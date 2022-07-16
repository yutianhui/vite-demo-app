/**
 * "element-plus": "^2.2.8" 组件库
 */
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

export default {
  install: app => {
    app.use(ElementPlus)
    /* element plus icons */
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
