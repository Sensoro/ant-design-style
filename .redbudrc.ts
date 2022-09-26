import { defineConfig } from 'redbud';

export default defineConfig({
  esm: {
    output: 'es'
  },
  cjs: {
    output: 'lib'
  },
  umd: {
    name: 'antd',
    output: 'dist'
  },
})
