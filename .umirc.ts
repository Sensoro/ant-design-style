import { defineConfig } from 'dumi';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

export default defineConfig({
  mode: 'site',
  title: 'Sensoro Design',
  dynamicImport: {},
  favicon: logo,
  logo,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/sensoro-design/ant-design-style',
    },
  ],
  hash: true,
  workerLoader: {},
});
