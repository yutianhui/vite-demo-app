/**
 * vue-router 4 路由
 * createRouter 创建路由对象
 * createWebHistory 使用History模式,浏览器不带hash url
 */
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
// 导入路由组件
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'
import Tutorial from '@/views/Tutorial.vue'
import Concats from '@/views/Concats.vue'

// 创建路由对象的函数
const buildRoute = (path, name, component) => ({
  path,
  name,
  component
})

// 定义页面路由
const routes = [buildRoute('/', 'Home', Home), buildRoute('/tutorial', 'Tutorial', Tutorial), buildRoute('/concats', 'Concats', Concats)]

// not found page - 404
routes.push(buildRoute('/:pathMatch(.*)*', 'Not Found', NotFound))

// 创建路由对象
const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * 全局路由前置守卫,路由改变前调用
 */
router.beforeEach((to, from, next) => {
  // console.log('路由前置守卫: to => ', to, ' | from => ', from);
  // 滚动到页面顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  // 改变页面的标题
  document.title = to.name
  // 改变NavBar标题
  store.dispatch('updateTitle', to.name)
  next()
})

// 导出路由对象
export default router
