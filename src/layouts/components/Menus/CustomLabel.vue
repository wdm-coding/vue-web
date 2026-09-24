<script setup lang='ts'>
  const {
    title = ''
  } = defineProps<{
    title: string
  }>()
  defineOptions({
    name: 'CustomLabel'
  })
</script>


<template>
  <div class='custom_label_wrap'>
    {{title}}
  </div>
</template>
