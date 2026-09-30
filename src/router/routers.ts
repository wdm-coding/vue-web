export interface RouterItem {
  path: string
  name: string
  redirect?: string
  componentPath?: string
  icon?: string
  title?: string
  children?: RouterItem[]
}
const list: RouterItem[] = [
  {
    path: '/',
    name: 'Portal',
    children: [
      {
        path: 'home',
        name: 'Home',
        componentPath: '/Home/index.vue',
        icon: 'home',
        title: '首页'
      },
      {
        path: 'naiveForm',
        name: 'NaiveForm',
        componentPath: '/NaiveForm/index.vue',
        icon: 'naive-form',
        title: 'NaiveForm'
      },
      {
        path: 'appCatalog',
        name: 'AppCatalogue',
        componentPath: '/AppCatalogue/index.vue',
        icon: 'app-catalogue',
        title: '应用资源'
      },
      {
        path: 'parent',
        name: 'Parent',
        icon: 'parent',
        title: '父组件',
        children: [
          {
            path: 'son1',
            name: 'Son1',
            componentPath: '/Parent/Son1/index.vue',
            icon: 'son1',
            title: '子111'
          },
          {
            path: 'son2',
            name: 'Son2',
            componentPath: '/Parent/Son2/index.vue',
            icon: 'son2',
            title: '子222'
          }
        ]
      }
    ]
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    icon: 'user',
    title: '个人中心',
    children: [
      {
        path: 'myApp',
        name: 'MyApp',
        componentPath: '/UserCenter/MyApp/index.vue',
        icon: 'user-app',
        title: '我的应用'
      },
      {
        path: 'myApply',
        name: 'MyApply',
        componentPath: '/UserCenter/MyApply/index.vue',
        icon: 'user-apply',
        title: '我的申请'
      },
      {
        path: 'myEvaluate',
        name: 'MyEvaluate',
        componentPath: '/UserCenter/MyEvaluate/index.vue',
        icon: 'user-evaluate',
        title: '我的评价'
      },
      {
        path: 'complaintMng',
        name: 'ComplaintMng',
        componentPath: '/UserCenter/ComplaintMng/index.vue',
        icon: 'user-complaint',
        title: '投诉管理'
      },
      {
        path: 'analysisReport',
        name: 'AnalysisReport',
        componentPath: '/UserCenter/AnalysisReport/index.vue',
        icon: 'user-analysis-report',
        title: '分析报告'
      },
      {
        path: 'userParent',
        name: 'UserParent',
        icon: 'userParent',
        title: '父组件',
        children: [
          {
            path: 'son1',
            name: 'userSon1',
            componentPath: '/Parent/Son1/index.vue',
            icon: 'son1',
            title: '子111'
          },
          {
            path: 'son2',
            name: 'userSon2',
            componentPath: '/Parent/Son2/index.vue',
            icon: 'son2',
            title: '子222'
          }
        ]
      }
    ]
  }
]


export default list