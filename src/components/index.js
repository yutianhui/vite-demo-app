/**
 * 注册组件为全局组件
 */
import NavBar from './navbar/index.vue'
import Tip from './tip/tip.vue'
import Footer from './footer/index.vue'

// 导出安装方法
export default {
  version: '1.0.0',
  install(app) {
    app.component('NavBar', NavBar)
    app.component('Tip', Tip)
    app.component('Footer', Footer)
  }
}
