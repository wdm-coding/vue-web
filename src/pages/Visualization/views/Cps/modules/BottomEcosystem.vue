<script setup lang='ts'>
  import { ecosystemDataSource } from '../data'
  defineOptions({
    name: 'CpsBottomEcosystem'
  })
</script>


<template>
  <!-- 算力合作生态 -->
  <div class="bottom_ecosystem">
    <!-- 生态标题 -->
    <div class="bottom_ecosystem_title">
      <span>{{ ecosystemDataSource.title }}</span>
    </div>
    <!-- 云厂商卡片 -->
    <div
      v-for="card in ecosystemDataSource.list"
      :key="card.name"
      class="bottom_ecosystem_card"
    >
      <div class="cloud_card_header">
        <img
          class="cloud_logo"
          :src="card.logo"
          alt="logo"
        >
        <div class="cloud_name_row">
          <span class="cloud_name">{{ card.name }}</span>
          <img
            class="cloud_badge"
            :src="card.badge"
            alt="badge"
          >
        </div>
      </div>
      <div class="cloud_tags">
        <div
          v-for="tag in card.tags"
          :key="tag"
          class="cloud_tag"
        >
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- 多云生态伙伴 -->
    <div class="bottom_ecosystem_card bottom_ecosystem_card--multi">
      <div class="multi_title_wrap">
        {{ ecosystemDataSource.multi.title }}
      </div>
      <div class="multi_logos">
        <img
          v-for="logo in ecosystemDataSource.multi.logos"
          :key="logo"
          :src="logo"
          alt="logo"
        >
      </div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .bottom_ecosystem{
    width: 1880px;
    height: 196px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    align-self: center;
    margin-top: 25px;
    background: url('@/assets/images/visualization/cps/bottom-panel-bg.png') 100% no-repeat;
    background-size: 100% 100%;
    .bottom_ecosystem_title{
      position: absolute;
      top: -28px;
      left: 814px;
      display: flex;
      flex-direction: column;
      height: 50px;
      background: url('@/assets/images/visualization/cps/bottom-title-bg.png') 100% no-repeat;
      background-size: 100% 100%;
      width: 253px;
      span{
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 1) 0, rgba(0, 246, 255, 1) 100.000000%, rgba(0, 246, 255, 1) 100.000000%);
        width: 168px;
        height: 28px;
        overflow-wrap: break-word;
        color: rgba(161, 250, 255, 1);
        font-size: 28px;
        font-family: 'shsm';
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        line-height: 20px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 10px 0 0 42px;
      }
    }
    .bottom_ecosystem_card{
      display: flex;
      flex-direction: column;
      width: 510px;
      height: 135px;
      margin-top: 39px;
      background: url('@/assets/images/visualization/cps/cloud-card-bg.png') 100% no-repeat;
      background-size: 100% 100%;
      .cloud_card_header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 217px;
        height: 43px;
        margin: 15px 0 0 50px;
        .cloud_logo{
          height: 43px;
          width: auto;
        }
        .cloud_name_row{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 147px;
          height: 24px;
          margin: 10px 0px 0px 0px;
          .cloud_name{
            width: 71px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(254, 254, 255, 1);
            font-size: 24px;
            font-family: 'shsm';
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 24px;
          }
          .cloud_badge{
            width: 67px;
            height: 19px;
            margin: 3px 0px 0px 0px;
          }
        }
      }
      .cloud_tags{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        width: 480px;
        height: 46px;
        margin: 11px 0 20px;
        .cloud_tag{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(12, 35, 67, 1);
          border-radius: 8px;
          height: 46px;
          border: 1px solid rgba(36, 84, 151, 1);
          padding: 0 10px;
          span{
            height: 18px;
            overflow-wrap: break-word;
            color: rgba(69, 157, 255, 1);
            font-size: 18px;
            font-family: 'shsn';
            font-weight: normal;
            text-align: center;
            white-space: nowrap;
            line-height: 18px;
          }
        }
      }
    }
    .bottom_ecosystem_card--multi{
      width: 776px;
      background: url('@/assets/images/visualization/cps/cloud-card-3-bg.png') 100% no-repeat;
      background-size: 100% 100%;
      .multi_title_wrap{
        display: flex;
        flex-direction: row;
        width: 143px;
        height: 24px;
        margin: 24px 0 0 23px;
        overflow-wrap: break-word;
        color: rgba(254, 254, 255, 1);
        font-size: 24px;
        font-family: 'shsm';
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 24px;
      }
      .multi_logos{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        width: 713px;
        height: 36px;
        margin: 21px 0 30px;
        img{
          &:nth-child(1){
            width: 107px;
            height: 30px;
          }
          &:nth-child(2){
            width: 108px;
            height: 34px;
          }
          &:nth-child(3){
            width: 108px;
            height: 29px;
          }
          &:nth-child(4){
            width: 106px;
            height: 24px;
          }
          &:nth-child(5){
            width: 122px;
            height: 33px;
          }
        }
      }
    }
  }
</style>
