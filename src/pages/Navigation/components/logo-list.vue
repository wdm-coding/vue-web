<script setup lang='ts'>
  const emit = defineEmits(['itemClick'])
  const props = withDefaults(
    defineProps<{
      items: any[]
    }>(),
    {
      items: () => []
    }
  )
  const handleClick = (item: any) => {
    emit('itemClick', item)
  }
  defineOptions({
    name: 'LogoList'
  })
</script>


<template>
  <div class='logo_list_wrap'>
    <div
      v-for="item in items"
      :key="item.label"
      class='logo_item'
      @click="handleClick(item)"
    >
      <Icon :name="item.icon" width="50px" />
      <div class='item_label'>{{ item.label }}</div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .logo_list_wrap{
      display: flex;
      align-items: center;
      gap: 40px;
      padding: 20px 0;
      .logo_item{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
        .item_label{
          font-size: 14px;
        }
      }
    }
</style>
