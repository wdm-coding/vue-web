<script setup lang='ts'>
  import GradientText from '@/components/vueBits/GradientText.vue'
  import LogoList from '../components/logo-list.vue'
  const devList = [
    {
      key: 'dev-lmg-portal',
      label: '陇明公门户',
      icon: 'https://test.gslmg.com/web/front/static/img/logo.f3208d6c.png',
      url: 'https://test.gslmg.com/web/front/#/home'
    }
  ]
  const prodList = [
    {
      key: 'prod-lmg-portal',
      label: '陇明公门户',
      icon: 'https://test.gslmg.com/web/front/static/img/logo.f3208d6c.png',
      url: 'https://www.gslmg.com/web/front/#/home'
    },
    {
      key: 'prod-client-web',
      label: '登记平台',
      icon: 'svg-register-web-logo',
      url: 'https://sjdj.gansu.gov.cn/register-client/home'
    },
    {
      key: 'prod-dcp-dao',
      label: '授权门户',
      icon: 'svg-dcp-dao-logo',
      url: 'https://gsdataop.com/ops-portal/home'
    },
    {
      key: 'prod-dcp-dnf',
      label: '功能节点门户',
      icon: 'svg-dcp-dnf-logo',
      url: 'https://gansu-ndi.com/fportal/home'
    },
    {
      key: 'prod-dcp-dev',
      label: '数据产品开发',
      icon: 'svg-dcp-dev-logo',
      url: 'https://gsdataop.com/mktplace-dev'
    }
  ]
  const utilList = [
    {
      key: 'gitLab',
      label: 'gitLab',
      icon: new URL('@/assets/images/navigation/csdsj-gitlab-logo.png', import.meta.url).href,
      url: 'http://125.74.159.115:8778/dashboard/groups'
    },
    {
      key: 'zadig',
      label: 'zadig',
      icon: new URL('@/assets/images/navigation/zadig-logo.png', import.meta.url).href,
      url: 'https://zadig.silkdo.com/signin?redirect=%2Fv1%2Fdashboard'
    },
    {
      key: 'lanhu',
      label: 'lanhu',
      icon: 'svg-lanhu-logo',
      url: 'https://lanhuapp.com/dashboard/#/item'
    }
  ]
  const handleClick = (item: any) => {
    window.open(item.url, '_blank')
  }
  defineOptions({
    name: 'Project'
  })
</script>


<template>
  <div class='project_wrap'>
    <GradientText
      text='开发环境'
      :colors="['#45c6aa', '#f6f6f7', '#3a09db']"
      style="font-size: 32px;"
    />
    <LogoList :items="devList" @itemClick="handleClick" />
    <GradientText text='生产环境' style="font-size: 32px;" />
    <LogoList :items="prodList" @itemClick="handleClick" />
    <GradientText text='工具' style="font-size: 32px;" />
    <LogoList :items="utilList" @itemClick="handleClick" />
  </div>
</template>
