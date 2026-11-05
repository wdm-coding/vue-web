<script setup lang='ts'>
  import {
    onBeforeUnmount, onMounted, ref 
  } from 'vue'
  defineOptions({
    name: 'CpsHeader'
  })

  const WEEKS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const timeText = ref('')
  let timer: ReturnType<typeof setInterval> | null = null

  function pad(num: number) {
    return String(num).padStart(2, '0')
  }

  function updateTime() {
    const d = new Date()
    timeText.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}\u00A0\u00A0${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}\u00A0\u00A0${WEEKS[d.getDay()]}`
  }

  onMounted(() => {
    updateTime()
    timer = setInterval(updateTime, 1000)
  })

  onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
    timer = null
  })
</script>


<template>
  <!-- 顶部标题栏：左侧时间 / 右侧电源图标（标题文字含于背景图） -->
  <div class="cps_header">
    <span class="cps_header_time">{{ timeText }}</span>
    <img
      class="cps_header_power"
      src="@/assets/images/visualization/cps/header-power-icon.png"
      alt=""
    >
  </div>
</template>


<style lang='scss' scoped>
  .cps_header{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 59px;
    background: url('@/assets/images/visualization/cps/header-bg.png') 100% no-repeat;
    background-size: 100% 100%;
    .cps_header_time{
      margin: 22px 0 0 14px;
      color: rgba(158, 167, 180, 1);
      font-size: 16px;
      font-family: 'shsm';
      text-align: left;
      white-space: nowrap;
      line-height: 22px;
    }
    .cps_header_power{
      width: 17px;
      height: 18px;
      margin: 17px 22px 0 auto;
    }
  }
</style>
