import { createApp } from 'vue'
import App from './App.vue'
// 自定义全局样式
import '@/assets/css/global.scss'
// element-plus
import ElementPlus from '@/plugins/element-plus'
// vuex
import store from '@/plugins/store'
// 路由组件
import router from '@/plugins/router'
// 自定义的全局组件
import components from '@/components'

/* create app */
const app = createApp(App)

/* component */
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(components)

/* 挂载节点 */
app.mount('#app')
