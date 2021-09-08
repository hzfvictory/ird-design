const path = require('path');
const fs = require('fs');
const uppercamelcase = require('uppercamelcase');
const fileSave = require('file-save');
const readlineSync = require('readline-sync');

const componentname = readlineSync.question('请输入组件名称，单词之间用“-”连接：');
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [
// 组件入口
  {
    filename: 'index.js',
    content: `import Ird${ComponentName} from './src/${componentname}';

Ird${ComponentName}.install = function (Vue) {
  Vue.component(Ird${ComponentName}.name, Ird${ComponentName});
};

export default Ird${ComponentName};`
  },
// 组件
  {
    filename: `src/${componentname}.vue`,
    content: `<template>
  <div class="ird-${componentname}"></div>
</template>

<script>
  export default {
    name: 'Ird${ComponentName}'
  };
</script>`
  },
// 组件样式文件
  {
    filename: path.join('../../src/styles/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
@import "common/var";
@include b(${componentname}) {}`
  },
// 组件markdown
  {
    filename: path.join('../../examples/docs/zh-CN', `${componentname}.md`),
    content: `## ${ComponentName} 组件中文名`
  }
];

// 将组件添加至 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 style.scss
const sassPath = path.join(__dirname, '../../src/styles/src/style.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "${componentname}";`;
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n');

// 添加到 index.js
const entryPath = path.join(__dirname, '../../src/index.js');
const fileContent = fs.readFileSync(entryPath).toString();
const regImport = /(?=const components)/;
const regReplace = /const components = \[[^\]]+\]/;
let indexJsContent = fileContent.replace(regImport, `import ${ComponentName} from 'packages/${componentname}';\n`);
indexJsContent = indexJsContent.replace(regReplace, (str) => str.slice(0, -1) === "\n" ? str.slice(0, -2) : str.slice(0, -1) + `,\n  ${ComponentName}\n]`);

fileSave(entryPath)
    .write(indexJsContent, 'utf8')
    .end('\n');

// 批量写入文件
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

console.log('初始化完成，需将组件路径自行添加至nav.config.json');