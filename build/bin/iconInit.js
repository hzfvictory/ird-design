const path = require('path');
const fs = require('fs');

const iconJSONPath = path.resolve(__dirname, '../../src/styles/src/fonts/iconfont.json');
const outputPath = path.resolve(__dirname, '../../src/styles/src/icon.scss');
const iconJSON = require(iconJSONPath);
const prefix = iconJSON.css_prefix_text;
const fontFaceTemplate = `@font-face {
  font-family: "iconfont";
  src: url("fonts/iconfont.woff2?t=1623297540147") format("woff2"),
    url("fonts/iconfont.woff?t=1623297540147") format("woff"),
    url("fonts/iconfont.ttf?t=1623297540147") format("truetype");
}
`;
const classNameTemplate = `[class^="ird-icon-"],
[class*=" ird-icon-"] {
  font-family: "iconfont" !important;
  font-style: normal;
  vertical-align: baseline;
  display: inline-block;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
const animationTemplate = `// loading 加转圈效果
.ird-icon-loading,
.ird-icon-spin {
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  100% {
    transform: rotate(360deg);
  }
}`;
let iconTemplate = '';
iconJSON.glyphs.forEach((item) => {
  iconTemplate += `.${prefix + item.font_class}:before {
    content: "\\${item.unicode}";
  }`;
});

fs.writeFile(outputPath, fontFaceTemplate + classNameTemplate + animationTemplate + iconTemplate, () => {
  console.log('done');
});



