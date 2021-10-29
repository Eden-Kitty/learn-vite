
import vue from '@vitejs/plugin-vue'
import { proxyTable } from './src/config'
const path = require('path')
// const chalk = require('chalk')

module.exports = {
  plugins: [vue()],
  resolve: {
    alias: [{
      find: '@',
      replacement: path.join(__dirname, '/src')
    }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/scss/var.scss";@import "./src/assets/style/scss/mixin.scss";'
      }
    }
  },
  hostname: '0.0.0.0',
  port: 8080,
  open: true,
  https: false,
  ssr: false,
  base: './',
  outDir: 'dist',
  proxy: proxyTable
}
