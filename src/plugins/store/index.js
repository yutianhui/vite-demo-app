/**
 * vuex 4.0 存储全局的状态数据
 */
import { createStore } from 'vuex'
// 导入模块
import user from './modules/user'

// 全局默认的状态数据
const data = {
  state: {
    title: 'Home',
  },
  mutations: {
    updateTitle(state, title) {
      state.title = title
    },
  },
  actions: {
    updateTitle(context, title) {
      context.commit('updateTitle', title)
    },
  },
}

// 全局store对象
const store = createStore({
  modules: {
    user,
  },
  ...data,
})

// store全局对象
export default store
