const glob = require("glob");

const getPrettierFiles = () => {
  let files = [];
  const mdFiles = glob.sync("examples/**/*.md*", {
    ignore: ["**/node_modules/**", "build/**"],
  });
  const vueFiles = glob.sync("examples/**/*.vue*", {
    ignore: ["**/node_modules/**", "build/**"],
  });
  const jsFiles = glob.sync("examples/**/*.js*", {
    ignore: ["**/node_modules/**", "build/**"],
  });

  files = [...mdFiles, ...jsFiles, ...vueFiles];
  if (!files.length) {
    return;
  }
  return files;
};

module.exports = getPrettierFiles;
