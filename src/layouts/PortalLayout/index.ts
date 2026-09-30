export interface MenuItem {
  path: string
  name: string
  title: string
  icon?: string
  access?: string[]
  children?: MenuItem[]
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
    path: '/appCatalog',
    name: 'AppCatalogue',
    title: '应用资源',
    access: ['login']
  },
  {
    path: '/parent',
    name: 'Parent',
    title: '父组件',
    access: ['login'],
    children: [
      {
        path: '/parent/son1',
        name: 'Son1',
        title: '子111',
        access: ['login']
      },
      {
        path: '/parent/son2',
        name: 'Son2',
        title: '子222',
        access: ['login']
      }
    ]
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    title: '个人中心',
    access: ['login']
  }
]