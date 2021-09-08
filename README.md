### 文档说明

#### 命令项目

- docs:dev 本地启动文档实例
- docs:build 打包文档 **注意**：为了能加载历史文档要根据 package 的 `version`的版本打包
- lib:build 组件库多入口打包，目的为了按需加载
- lib:export 组件库直接打包，方便直接引入
- release 排列顺序执行 lib:build、lib:export

**css**

gulp 打包

目录 cd packages/theme-default

- dev 实时编译 scss
- build 打包 scss

#### 项目目录

```
├── build    --webpack的配置项
├── examples  --文档
│   ├── assets  --静态资源
│   │   ├── images
│   │   └── styles
│   ├── components  --组件
│   ├── docs  --md文档编写区域
│   │   └── zh-CN  --全球化
│   ├── i18n --全球化
│   ├── pages --页面
│   └── router --路由
├── lib --组件打包后 可供三方开发者使用
├── packages  --组件开发的区域
│   ├── button
│   │   └── src
│   ├── button-group
│   ├── input
│   │   └── src
├── server  --服务端
├── src --组件的一些基础使用
│   ├── directives
│   ├── mixins
│   ├── utils
│   └── styles  --组件的样式统一到这里
│       ├── lib
│       └── src
│           └── common
└── types  --代码提示
```

#### 开发举例

统一 都是 书籍名称 举例子

```text
朝花夕拾 鲁迅 1926
昆虫记 让-亨利·卡西米尔·法布尔 1907 生物学
假如给我三天光明 海伦·凯勒 1903
海底两万里 儒勒·凡尔纳 1869 法国 长篇科幻小说
骆驼祥子 老舍 1937 中国 长篇小说
平凡的世界 路遥 1986 中国 长篇小说
老人与海 海明威 1951 美国 中篇小说

三国演义、⽔浒传、⻄游记、红楼梦、周易、诗经、尚书、周礼、仪礼、礼记、左传、公⽺传、⾕梁传、论语、

道德经、⽼⼦、庄⼦、墨⼦、荀⼦、⻤⾕⼦、孙⼦兵法、史记
```
