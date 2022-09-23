import path from "path";
import { defineConfig } from "dumi";

const logo =
  "https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg";

const SRC_DIR = path.join(__dirname, "src");

export default defineConfig({
  mode: "site",
  title: "Sensoro Design",
  dynamicImport: {},
  favicon: logo,
  logo,
  outputPath: 'site',
  navs: [
    null,
    {
      title: "GitHub",
      path: "https://github.com/sensoro-design/ant-design-style",
    },
  ],
  hash: true,
  extraBabelPlugins: [
    [
      require.resolve("babel-plugin-import"),
      {
        libraryName: "antd",
        customStyleName: (name: string, file: object) => {
          return path.join(SRC_DIR, `${name}/index.less`);
        },
      },
      "antd",
    ],
  ],
});
