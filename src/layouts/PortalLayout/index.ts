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
    path: '/home',
    name: 'Home',
    title: '首页',
    access: []
  },
  {
    path: '/naiveForm',
    name: 'NaiveForm',
    title: 'Naive表单项',
    access: []
  },
  {
    path:'/notebook/',
    name:'Notebook',
    title:'文档中心',
    type:'link',
    openType:'self'
  }
]