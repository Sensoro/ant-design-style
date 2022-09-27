const fs = require("fs");
const path = require("path");

const mainPth = "./src";

const files = fs.readdirSync(mainPth);
const entryFile = files
  .map((file) =>
    fs.existsSync(path.join(mainPth, file, "index.less"))
      ? `// ${file.replace(/^\S/, (s) =>
          s.toUpperCase()
        )}\nimport './${file}/index.less';`
      : ""
  )
  .filter((path) => !!path)
  .join("\n");

fs.writeFile("./src/index.ts", entryFile, function (err) {
  if (err) {
    throw err;
  }
});
