// 算力基础设施能力
export const leftDataSource = {
  title: '算力基础设施能力',
  subtitle: 'COMPUTING POWER INFRASTRUCTURE CAPABILITY',
  stats: [
    {
      title: '数据中心',
      num: 7
    },
    {
      title: '接入平台',
      num: 8
    }
  ],
  flow: [
    {
      title: '资源接入',
      icon: new URL('../../../../assets/images/visualization/cps/flow-icon-1.png', import.meta.url).href
    },
    {
      title: '统一纳管',
      icon: new URL('../../../../assets/images/visualization/cps/flow-icon-2.png', import.meta.url).href
    },
    {
      title: '调度编排',
      icon: new URL('../../../../assets/images/visualization/cps/flow-icon-3.png', import.meta.url).href
    },
    {
      title: '计量计费',
      icon: new URL('../../../../assets/images/visualization/cps/flow-icon-4.png', import.meta.url).href
    },
    {
      title: '安全运维',
      icon: new URL('../../../../assets/images/visualization/cps/flow-icon-5.png', import.meta.url).href
    }
  ],
  adapt: {
    title: '多类型算力资源适配',
    bottomDesc: '支持多类型资源标准化接入与统一纳管',
    list: [
      {
        title: '通用算力CPU',
        desc: '云主机/裸金属/存储',
        icon: new URL('../../../../assets/images/visualization/cps/adapt-icon-1.png', import.meta.url).href
      },
      {
        title: '智能算力GPU',
        desc: '训练/推理/模型服务',
        icon: new URL('../../../../assets/images/visualization/cps/adapt-icon-2.png', import.meta.url).href
      },
      {
        title: '高性能算力HPC',
        desc: '并行计算/科研计费',
        icon: new URL('../../../../assets/images/visualization/cps/adapt-icon-3.png', import.meta.url).href
      }
    ]
  },
  runStatus: {
    title: '资源运行态势',
    list: [
      {
        title: '资源正常',
        icon: new URL('../../../../assets/images/visualization/cps/status-item-1.png', import.meta.url).href
      },
      {
        title: '调度稳定',
        icon: new URL('../../../../assets/images/visualization/cps/status-item-2.png', import.meta.url).href
      },
      {
        title: '安全可控',
        icon: new URL('../../../../assets/images/visualization/cps/status-item-3.png', import.meta.url).href
      }
    ]
  }
}

// Token算力经济
export const rightDataSource = {
  title: 'Token算力经济',
  subtitle: 'TOKEN COMPUTING ECONOMY',
  tokenChain: {
    title: 'Token服务价值链',
    desc: 'Token是模型推理服务的核心计量与价值单元',
    list: [
      {
        title: '绿色算力',
        icon: new URL('../../../../assets/images/visualization/cps/chain-icon-1.png', import.meta.url).href
      },
      {
        title: '模型推荐',
        icon: new URL('../../../../assets/images/visualization/cps/chain-icon-2.png', import.meta.url).href
      },
      {
        title: 'Token服务',
        icon: new URL('../../../../assets/images/visualization/cps/chain-icon-3.png', import.meta.url).href
      },
      {
        title: 'API调用',
        icon: new URL('../../../../assets/images/visualization/cps/chain-icon-4.png', import.meta.url).href
      },
      {
        title: '场景应用',
        icon: new URL('../../../../assets/images/visualization/cps/chain-icon-5.png', import.meta.url).href
      }
    ]
  },
  appList: [
    '智能问答/客服',
    '内容生成',
    '知识库RAG',
    '行业智能体',
    '数据智能分析'
  ],
  partner: {
    title: '联合运营合作伙伴',
    list: [
      {
        title: '绿色算力协调',
        icon: new URL('../../../../assets/images/visualization/cps/partner-icon-1.png', import.meta.url).href
      },
      {
        title: '模型服务接入',
        icon: new URL('../../../../assets/images/visualization/cps/partner-icon-2.png', import.meta.url).href
      },
      {
        title: 'Token服务运营',
        icon: new URL('../../../../assets/images/visualization/cps/partner-icon-3.png', import.meta.url).href
      },
      {
        title: '海外服务拓展',
        icon: new URL('../../../../assets/images/visualization/cps/partner-icon-4.png', import.meta.url).href
      }
    ]
  }
}

// 算力合作生态
export const ecosystemDataSource = {
  title: '算力合作生态',
  list: [
    {
      name: '浪潮云',
      logo: new URL('../../../../assets/images/visualization/cps/cloud-logo-1.png', import.meta.url).href,
      badge: new URL('../../../../assets/images/visualization/cps/cloud-badge.png', import.meta.url).href,
      tags: ['一云多芯+一云多算', 'AI工厂流水线', '智能体服务编排']
    },
    {
      name: '金山云',
      logo: new URL('../../../../assets/images/visualization/cps/cloud-logo-2.png', import.meta.url).href,
      badge: new URL('../../../../assets/images/visualization/cps/cloud-badge.png', import.meta.url).href,
      tags: ['跨域全域调度', '东西部算力流通', '训推一体化Maas']
    }
  ],
  multi: {
    title: '多云生态伙伴',
    logos: [
      new URL('../../../../assets/images/visualization/cps/eco-logo-1.png', import.meta.url).href,
      new URL('../../../../assets/images/visualization/cps/eco-logo-2.png', import.meta.url).href,
      new URL('../../../../assets/images/visualization/cps/eco-logo-3.png', import.meta.url).href,
      new URL('../../../../assets/images/visualization/cps/eco-logo-4.png', import.meta.url).href,
      new URL('../../../../assets/images/visualization/cps/eco-logo-5.png', import.meta.url).href
    ]
  }
}

// topNav
export const topNavDataSource = [
  {
    icon: new URL('../../../../assets/images/visualization/cps/nav-item-1.png', import.meta.url).href,
    title: '模型广场'
  },
  {
    icon: new URL('../../../../assets/images/visualization/cps/nav-item-2.png', import.meta.url).href,
    title: '数据工场'
  },
  {
    icon: new URL('../../../../assets/images/visualization/cps/nav-item-3.png', import.meta.url).href,
    title: '政务应用'
  },
  {
    icon: new URL('../../../../assets/images/visualization/cps/nav-item-4.png', import.meta.url).href,  
    title: '行业平台'
  },
]

