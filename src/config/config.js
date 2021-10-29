export default {
  hostname: '127.0.0.1',
  port: 8888,
  open: true, // 是否自动在浏览器打开
  https: false, // 是否开启 https
  ssr: false, // 服务端渲染
  optimizeDeps: {
    include: ['moment', 'axios']
  },
  base: './', // 在生产中服务时的基本公共路径 默认 /
  outDir: 'dist'
}
