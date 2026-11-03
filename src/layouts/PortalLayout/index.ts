export interface MenuItem {
  path: string
  name: string
  title: string
  icon?: string
  access?: string[]
  children?: MenuItem[]
  type?: 'link' | 'router',
  openType?: 'blank' | 'self'
}
export const menus: MenuItem[] = [
  {
    path: '/portal/home',
    name: 'Home',
    title: '首页',
    access: []
  },
  {
    path: '/portal/naiveForm',
    name: 'NaiveForm',
    title: 'Naive表单项',
    access: []
  },
  {
    path: '/portal/visualization',
    name: 'Visualization',
    title: '数据可视化大屏',
    access: []
  }
]