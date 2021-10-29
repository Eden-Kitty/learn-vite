import { createApp } from 'vue'
import App from './App.vue'
// import Axios from '@/utils/request'
import Router from './router'
import { $appEnv, $appMetaEnv } from '@/utils/'
import '@/assets/style/scss/index.scss'

// 测试环境输出当前环境变量
if (['dev', 'local', 'test'].includes($appEnv)) {
  console.log(`当前所在环境${$appEnv}`)
  console.table($appMetaEnv)
}

const app = createApp(App)
window.__App__ = app

// app.use(Axios).use(Router).mount('#app')
app.use(Router).mount('#app')
