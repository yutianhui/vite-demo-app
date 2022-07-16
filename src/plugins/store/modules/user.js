import { ElMessage } from 'element-plus'

/**
 * store模块 - user (用户模块)
 * action -> mutation -> state -> view
 */
export default {
  /**
   * 存储全局的状态数据
   * 在组件中可以通过store对象访问
   */
  state: {
    userName: '',
    userId: '',
  },
  /**
   * 改变state的行为,接受state参数
   * 改变state的值
   */
  mutations: {
    // 更新用户信息
    updateUserInfo(state, user) {
      console.log('用户的信息更新,新的信息 => ', user)
      Object.keys(state).forEach(key => {
        state[key] = user[key]
      })
      ElMessage({
        message: '更新成功',
        type: 'success',
      })
    },
  },
  /**
   * actions 和 mutations 类似
   * 区别在于mutations中只能执行同步的方法
   * actions中可以执行异步的方法,触发mutation
   */
  actions: {
    // 更新用户信息
    updateUserInfo(context, user) {
      if (user.now === true) {
        context.commit('updateUserInfo', user)
        return
      }
      setTimeout(() => {
        context.commit('updateUserInfo', user)
      }, 1000)
    },
  },
}
