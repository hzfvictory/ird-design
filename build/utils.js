const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');

// var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
let externals = {};

Object.keys(Components).forEach(function (key) {
  externals[`ird/packages/${key}`] = `ird/lib/${key}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;