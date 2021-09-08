const markdownIt = require('markdown-it')
const MarkdownItContainer = require("markdown-it-container");
const anchorPlugin = require('markdown-it-anchor');
const hljs = require("highlight.js");
const Config = require('markdown-it-chain');
const VueTemplateComplier = require("vue-template-compiler");
const {parse, compileTemplate} = require("@vue/component-compiler-utils");
const uslug = require('uslug');
const slugify = s => uslug(s);
const config = new Config();

module.exports = (source) => {
  // 需要解析成vue代码块集合
  const componentCodeList = [];
  let styleCodeList = [];
  const globalScript = [];

  function containers(markdownIt) {
    // 初始还MarkdownIt用于转换md文件为html
    // 解析【:::tip:::】
    markdownIt.use(MarkdownItContainer, "tip");
    // 解析【:::warning:::】
    markdownIt.use(MarkdownItContainer, "warning");
    // 解析【:::danger:::】
    markdownIt.use(MarkdownItContainer, "danger");
    // 使用【markdown-it-container】插件解析【:::template :::】代码块为vue渲染
    markdownIt.use(MarkdownItContainer, "template", {
      // 验证代码块为【:::template :::】才进行渲染
      validate(params) {
        return params.trim().match(/^template\s*(.*)$/);
      },
      // 代码块渲染
      render(tokens, index) {
        const token = tokens[index];
        const tokenInfo = token.info.trim().match(/^template\s*(.*)$/);
        if (token.nesting === 1) {
          // template
          const desc = tokenInfo && tokenInfo.length > 1 ? tokenInfo[1] : ""; // 描述
          // 获取vue组件示例的代码
          const nextIndex = tokens[index + 1];
          let content = nextIndex.type === "fence" ? nextIndex.content : "";
          // 将content解析为vue组件基本属性对象;

          let {template, script, styles} = parse({
            source: content,
            compiler: VueTemplateComplier,
            needMap: false
          });
          // 1.处理样式
          styleCodeList = styleCodeList.concat(styles);

          // 2.将template的转为render函数
          let templateCodeRender = "";
          if (template && template.content) {

            let rep = function (match, item1, item2, item3) {
              // item2 是空格部分
              return item1 + item3
            }
            let source = template.content.replace(/(>)(\s*)(<)/g, rep);

            const {code} = compileTemplate({
              source: source,
              compiler: VueTemplateComplier
            });
            templateCodeRender = code;
          }

          // 3.获取script的代码
          script = script ? script.content : "";
          if (script) {
            const [global, content] = script.split(/export\s+default/);
            globalScript.push(global.trim());
            script = `const exportJavaScript = ${content}`; // vue的函数部分
          } else {
            script = "const exportJavaScript = {};";
          }

          // 4.代码块解析将需要解析vue组件的存储，渲染html用组件名称替代
          const name = `element-demo-${componentCodeList.length}`;
          // 渲染组件代码添加到数据集合
          componentCodeList.push(`"${name}":(function () {
          ${templateCodeRender}
          ${script}
           return {
             ...exportJavaScript,
            ${templateCodeRender ? "render," : ""}
            ${templateCodeRender ? "staticRenderFns," : ""}   
           }
          })()`);


          // 5.将需要渲染的示例用element-demo组件包裹替换插槽显示示例效果
          if (markdownIt.render(desc)) {
            return `<demo-block>
                       <${name} slot="source" />
                       <div slot="docs"> ${markdownIt.render(desc)}</div> 
                  `;
          } else {
            return `<demo-block>
                       <${name} slot="source" />
                  `;
          }
        }
        return '</demo-block>';
      }
    });
    // 代码块  ×
    markdownIt.use(MarkdownItContainer, "code", {
      validate(params) {
        return params.trim().match(/^code\s*(.*)$/);
      },
      render(tokens, index) {
        const tokenInfo = tokens[index].info.trim().match(/^code\s*(.*)$/);
        if (tokens[index].nesting === 1) {
          const description = tokenInfo && tokenInfo.length > 1 ? tokenInfo[1] : '';
          let content = tokens[index + 1].type === 'fence' ? tokens[index + 1].content : '';
          // 可以在md里面不写 template 标签
          content += `<template> ${content}</template>`
          let {template} = parse({
            source: content,
            compiler: VueTemplateComplier,
            needMap: false
          });

          if (markdownIt.render(description)) {
            return `<demo-block>
                       <div slot="source">${template.content}</div>
                       <div slot="docs"> ${markdownIt.render(description)}</div> 
                  `;
          } else {
            return `<demo-block>
                       <div slot="source">${template.content}</div>
                  `;
          }
        }
        return '</demo-block>';
      }
    });
  }

  // 链式调用
  config.options.html(true).end().plugin('anchor').use(anchorPlugin, [
    {
      level: 3,
      slugify: slugify,
      permalink: true,
      permalinkSymbol: `#`,
      permalinkBefore: true,
      // permalinkHref: slug => `#${slug}`
    }
  ]).end().plugin('containers').use(containers).end();
  const md = config.toMd(markdownIt, {
    html: true,
    xhtmlOut: true,
    // 将markdown中的代码块用hljs高亮显示
    highlight: function (str, lang) {
      // console.log(str);
      // console.log(lang);

      if (lang && hljs.getLanguage(lang)) {
        return `<pre class='hljs language-${lang}'><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      }
      return `<pre class="hljs language-${lang}"><code>${markdownIt.utils.escapeHtml(str)}</code></pre>`;
    }
  });

  // 将所有转换好的代码字符串拼接成vue单组件template、script、style格式
  return `
        <template>
          <section class="content">
            ${md.render(source)}
          </section>
        </template>
        <script>
           ${globalScript.join(" ")}
           export default {
           name: 'ElementDemo',
           components: {
            ${componentCodeList.join(",")}
           }
         }
       </script>
       <style lang='scss'>
         ${Array.from(styleCodeList, m => m.content).join("\n")}
       </style>
  `;
}


