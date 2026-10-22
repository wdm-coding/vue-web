import { defineStore } from 'pinia'
import AuthApi from '@/api/auth.api'
import MenuApi from '@/api/systemManage/menu.api'
import { clearCache, setToken } from '@/utils/storage'
import type { AuthState } from '@/stores/type'
const useAuthStore = defineStore('auth',
  {
    state: (): AuthState => ({
      loginAfter: '/',
      isLoggedIn: false,
      token: '',
      userInfo: null,
      menuTree: null,
    }),
    getters: {},
    actions: {
      async fetchLogin(params: { username: string, password: string }) {
        const { code, data } = await AuthApi.userLogin({
          username: params.username,
          password: params.password,
        })
        if (code === 0) {
          setToken(data)
          this.token = data
          // 写入同源共享登录态标记，供 notebook 等同源前端监听同步
          localStorage.setItem('wdm_auth_state', 'login')
        }
      },
      async fetchUserInfo() {
        const { code, data } = await AuthApi.getUserInfo()
        if (code === 0) {
          this.userInfo = data
        }
      },
      async fetchMenuTree() {
        const { code, data } = await MenuApi.getMenuTree()
        if (code === 0) {
          this.menuTree = data
        }
      },
      async userLogin(params: { username: string, password: string }) {
        try {
          await this.fetchLogin(params)
          await this.fetchUserInfo()
          await this.fetchMenuTree()
          this.isLoggedIn = true
          return this.loginAfter
        } catch (error) {
          throw error
        }
      },
      async userLogout() {
        try {
          const { code } = await AuthApi.logout()
          if (code === 0) {
            this.isLoggedIn = false
            this.removeCache()
            // 清除同源共享登录态标记，notebook 等同源前端监听后同步跳转登录页
            localStorage.removeItem('wdm_auth_state')
            return true
          }
        } catch (error) {
          throw error
        }
      },
      removeCache() {
        clearCache()
      }
    },
    persist: {
      key: 'auth',
      storage: window.sessionStorage
    }
  }
)

export default useAuthStore
