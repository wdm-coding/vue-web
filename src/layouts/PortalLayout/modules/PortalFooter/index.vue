<script setup lang='ts'>

  defineOptions({
    name: 'PortalFooter'
  })
</script>


<template>
  <div class='portal_layout_footer_wrap'>
    <div>ICP备案/许可证号：陇ICP备19000165号</div>
    <div>建议使用Edge浏览器 (79以上版本)，Chrome浏览器 (73.0以上版本)，1440*900以上分辨率浏览本站</div>
  </div>
</template>


<style lang='scss' scoped>
  .portal_layout_footer_wrap{
    height: 100px;
    background-color: #000000;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
