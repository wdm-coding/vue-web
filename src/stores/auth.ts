import { defineStore } from 'pinia'
import AuthApi from '@/api/auth.api'
import MenuApi from '@/api/systemManage/menu.api'
import { clearCache, setToken } from '@/utils/storage'
interface AuthState {
  loginAfter: string // 登录后跳转路径
  isLoggedIn: boolean // 是否登录成功
  token: string // 登录凭证token
  userInfo: object | null  // 用户信息
  menuTree: object | null  // 菜单树
}
export const useAuthStore = defineStore('auth',
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