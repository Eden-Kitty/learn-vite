import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'

//  创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 内部提供了 history 模式的实现
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})
export default router
