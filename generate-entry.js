const fs = require("fs");
const path = require("path");
const list = [];

function listFile(dir) {
  const arr = fs.readdirSync(dir);

  arr.forEach(async function (item) {
    if (fs.existsSync(path.join(dir, item, "index.less"))) {
      list.push(
        `// ${item.replace(/^\S/, (s) =>
          s.toUpperCase()
        )}\nimport './${item}/index.less';`
      );
    }
  });

  return list.join("\n");
}

const res = listFile("./src");

fs.writeFile("./src/index.ts", res, function (err) {
  if (err) {
    throw err;
  }
});
