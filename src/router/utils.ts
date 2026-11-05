import list, { type RouterItem } from './routers'
import router from './index'
import { type RouteRecordRaw } from 'vue-router'
import { getToken } from '@/utils/storage'
const modules = import.meta.glob('@/pages/**/index.vue')
const getLayout = (componentPath: string, name: string) => {
  if (!componentPath) {
    switch (name) {
      case 'Portal':
        return () => import('@/layouts/PortalLayout/index.vue')
      case 'UserCenter':
        return () => import('@/layouts/SiderLayout/index.vue')
      default:
        return () => import('@/layouts/components/PageMain/index.vue')
    }
  } else {
    return modules[componentPath] || (() => import('@/pages/NotFound/index.vue'))
  }

}
// 递归转换函数
const transformRoutes = (routes: RouterItem[]): RouteRecordRaw[] => {
  return routes.map(item => {
    const componentPath = item.componentPath ? `/src/pages/${item.componentPath.replace(/^\/+/, '')}` : ''
    // 基础路由对象
    const baseRoute: any = {
      path: item.path,
      name: item.name
    }
    // 处理重定向
    if (item.redirect) {
      baseRoute.redirect = item.redirect
    }
    // 处理组件路径
    baseRoute.component = getLayout(componentPath, item.name)
    // 处理嵌套路由
    if (item.children) {
      baseRoute.children = transformRoutes(item.children)
      if (item.path === '/') {
        baseRoute.redirect = `/${item.children[0].path}`
      } else if (item.path.startsWith('/') && item.path !== '/') {
        baseRoute.redirect = `${item.path}/${item.children[0].path}`
      } else {
        baseRoute.redirect = `/${item.path}/${item.children[0].path}`
      }
    }
    // 处理元数据
    baseRoute.meta = {
      title: item.title || null,
      icon: item.icon || null
    }
    return baseRoute
  })
}
// 转换路由
const dynamicRoutes = transformRoutes(list)
// 将转换后的路由添加到 router 中
dynamicRoutes.forEach(route => {
  router.addRoute(route)
})
// 添加404路由
router.addRoute({
  path: '/:pathMatch(.*)*',
  redirect: '/404'
})
// 登录白名单
const whiteList = ['/login', '/404', '/', '/home', '/naiveForm']
// 路由全局守卫
router.beforeEach((to, from) => {
  const isLogin = !!getToken()
  if (!isLogin && !whiteList.includes(to.path)) {
    return '/login'
  }
  if (isLogin && to.path === '/login') {
    return from.path
  }
  return true
})
