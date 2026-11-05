<script setup lang='ts'>
  import * as echarts from 'echarts'
  import {
    computed, onBeforeUnmount, onMounted, ref, watch
  } from 'vue'
  import type { EChartsOption, EChartsType } from 'echarts'

  defineOptions({
    name: 'ChartBase'
  })

  interface Props {
    option?: EChartsOption
    loading?: boolean
    height?: number | string
    autoDispose?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    option: () => ({}),
    loading: false,
    height: '100%',
    autoDispose: true
  })

  const containerRef = ref<HTMLDivElement>()

  let chart: EChartsType | null = null
  let resizeObserver: ResizeObserver | null = null
  let resizeTimer: ReturnType<typeof setTimeout> | null = null

  const containerStyle = computed(() => ({
    height: typeof props.height === 'number' ? `${props.height}px` : props.height
  }))

  // 判断单个系列是否有数据（兼容 data / nodes / links，gauge 等单值对象视为有数据）
  function hasSeriesData(series: Record<string, unknown> | null | undefined): boolean {
    if (!series) return false
    const source = series.data ?? series.nodes ?? series.links
    if (source == null) return false
    if (Array.isArray(source)) return source.length > 0
    return true
  }

  // 空数据判断：无系列或所有系列均无数据（dataset 驱动的图表以 source 行数判断）
  const isEmpty = computed(() => {
    const option = props.option as Record<string, unknown> | null
    if (!option) return true
    const dataset = option.dataset as
      | Record<string, unknown>
      | Record<string, unknown>[]
      | undefined
    if (dataset) {
      const source = (Array.isArray(dataset) ? dataset[0] : dataset)?.source
      if (Array.isArray(source) && source.length > 1) return false
    }
    const series = option.series
    if (!series) return true
    const list = Array.isArray(series) ? series : [series]
    if (!list.length) return true
    return list.every(item => !hasSeriesData(item as Record<string, unknown>))
  })

  // 渲染 / 清空图表
  function renderChart() {
    if (!chart) return
    if (isEmpty.value) {
      chart.clear()
      return
    }
    chart.setOption(props.option, { notMerge: true })
  }

  // loading 遮罩（使用 echarts 内置 loading）
  function toggleLoading() {
    if (!chart) return
    if (props.loading) {
      chart.showLoading('default', {
        text: '',
        color: '#339af0',
        maskColor: 'rgba(0, 0, 0, 0.15)'
      })
    } else {
      chart.hideLoading()
    }
  }

  function hasSize(): boolean {
    return !!containerRef.value
      && containerRef.value.clientWidth > 0
      && containerRef.value.clientHeight > 0
  }

  // 初始化实例（容器无尺寸时延迟到 ResizeObserver 回调中创建）
  function ensureChart() {
    if (chart || !containerRef.value) return
    chart = echarts.init(containerRef.value)
    renderChart()
    toggleLoading()
  }

  function handleResize() {
    if (!chart) {
      if (hasSize()) ensureChart()
      return
    }
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => chart?.resize(), 100)
  }

  watch(
    () => props.option,
    () => {
      if (!chart && hasSize()) ensureChart()
      else renderChart()
    },
    { deep: true }
  )

  watch(
    () => props.loading,
    () => toggleLoading()
  )

  onMounted(() => {
    if (containerRef.value) {
      resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(containerRef.value)
    }
    if (hasSize()) ensureChart()
  })

  onBeforeUnmount(() => {
    if (!props.autoDispose) return
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = null
    resizeObserver?.disconnect()
    resizeObserver = null
    chart?.dispose()
    chart = null
  })

  defineExpose({
    getChart: () => chart,
    resize: () => chart?.resize()
  })
</script>


<template>
  <div class='chart_base' :style='containerStyle'>
    <div ref='containerRef' class='chart_base_canvas' />
    <div v-if='isEmpty && !loading' class='chart_base_empty'>
      <span class='chart_base_empty_text'>暂无数据</span>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .chart_base{
    position: relative;
    width: 100%;
    .chart_base_canvas{
      width: 100%;
      height: 100%;
    }
    .chart_base_empty{
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #909399;
      .chart_base_empty_text{
        margin-top: 8px;
        font-size: 12px;
      }
    }
  }
</style>
