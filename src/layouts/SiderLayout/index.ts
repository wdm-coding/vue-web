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
    path: '/userCenter/myApp',
    name: 'MyApp',
    title: '我的应用',
    icon: 'svg-vite',
    access: []
  },
  {
    path: '/userCenter/myApply',
    name: 'MyApply',
    title: '我的申请',
    icon: 'Accessibility',
    access: ['login']
  },
  {
    path: '/userCenter/myEvaluate',
    name: 'MyEvaluate',
    title: '我的评价',
    icon: 'Accessibility',
    access: ['login']
  },
  {
    path: '/userCenter/complaintMng',
    name: 'ComplaintMng',
    title: '投诉管理',
    icon: 'Accessibility',
    access: ['login']
  },
  {
    path: '/userCenter/analysisReport',
    name: 'AnalysisReport',
    title: '分析报告',
    icon: 'Accessibility',
    access: ['login']
  },
  {
    path: '/userCenter/userParent',
    name: 'UserParent',
    title: '父组件',
    icon: 'Accessibility',
    access: ['login'],
    children: [
      {
        path: '/userCenter/userParent/son1',
        name: 'Son1',
        title: '子111',
        icon: 'Accessibility',
        access: ['login']
      },
      {
        path: '/userCenter/userParent/son2',
        name: 'Son2',
        title: '子222',
        icon: 'Accessibility',
        access: ['login']
      }
    ]
  }
]