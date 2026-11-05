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
      v-for="(card, index) in ecosystemDataSource.list"
      :key="card.name"
      class="bottom_ecosystem_card"
      :class="index === 0 ? 'bottom_ecosystem_card--inspur' : 'bottom_ecosystem_card--kingsoft'"
    >
      <div
        class="cloud_card_header"
        :class="index === 1 ? 'cloud_card_header--kingsoft' : ''"
      >
        <img
          class="cloud_logo"
          :class="index === 1 ? 'cloud_logo--kingsoft' : ''"
          :src="card.logo"
          alt=""
        >
        <div
          class="cloud_name_row"
          :class="index === 1 ? 'cloud_name_row--kingsoft' : ''"
        >
          <span class="cloud_name">{{ card.name }}</span>
          <img
            class="cloud_badge"
            :src="card.badge"
            alt=""
          >
        </div>
      </div>
      <div
        class="cloud_tags"
        :class="index === 1 ? 'cloud_tags--kingsoft' : ''"
      >
        <div
          v-for="(tag, i) in card.tags"
          :key="tag"
          class="cloud_tag"
          :class="index === 0 && i === 0 ? 'cloud_tag--w174' : index === 1 ? 'cloud_tag--kingsoft' : ''"
        >
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- 多云生态伙伴 -->
    <div class="bottom_ecosystem_card bottom_ecosystem_card--multi">
      <div class="multi_title_wrap">
        <span class="multi_title">{{ ecosystemDataSource.multi.title }}</span>
      </div>
      <div class="multi_logos">
        <img
          v-for="logo in ecosystemDataSource.multi.logos"
          :key="logo"
          :src="logo"
          alt=""
        >
      </div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .bottom_ecosystem{
    position: relative;
    display: flex;
    flex-direction: row;
    width: 1880px;
    height: 196px;
    margin: 25px 0 0 20px;
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
      height: 135px;
      .cloud_card_header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 217px;
        height: 43px;
        margin: 15px 0 0 50px;
        .cloud_logo{
          width: 43px;
          height: 43px;
        }
        .cloud_logo--kingsoft{
          width: 54px;
          height: 43px;
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
        .cloud_name_row--kingsoft{
          width: 148px;
          margin: 11px 0px 0px 0px;
        }
      }
      .cloud_card_header--kingsoft{
        width: 224px;
        margin: 13px 0 0 29px;
      }
      .cloud_tags{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 480px;
        height: 46px;
        margin: 11px 0 20px 15px;
        .cloud_tag{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(12, 35, 67, 1);
          border-radius: 8px;
          height: 46px;
          border: 1px solid rgba(36, 84, 151, 1);
          width: 144px;
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
        .cloud_tag--w174{
          width: 174px;
        }
        .cloud_tag--kingsoft{
          width: 154px;
        }
      }
      .cloud_tags--kingsoft{
        width: 479px;
        margin: 12px 0 21px 15px;
      }
    }
    .bottom_ecosystem_card--inspur{
      width: 510px;
      margin: 38px 0 0 20px;
      background: url('@/assets/images/visualization/cps/cloud-card-bg.png') 100% no-repeat;
      background-size: 100% 100%;
    }
    .bottom_ecosystem_card--kingsoft{
      width: 510px;
      margin: 39px 0 0 22px;
      background: url('@/assets/images/visualization/cps/cloud-card-bg.png') 100% no-repeat;
      background-size: 100% 100%;
    }
    .bottom_ecosystem_card--multi{
      width: 776px;
      margin: 39px 20px 0 22px;
      background: url('@/assets/images/visualization/cps/cloud-card-3-bg.png') 100% no-repeat;
      background-size: 100% 100%;
      .multi_title_wrap{
        display: flex;
        flex-direction: row;
        width: 143px;
        height: 24px;
        margin: 24px 0 0 23px;
        .multi_title{
          width: 143px;
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
      }
      .multi_logos{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 713px;
        height: 36px;
        margin: 21px 0 30px 33px;
        img{
          &:nth-child(1){
            width: 107px;
            height: 30px;
          }
          &:nth-child(2){
            width: 108px;
            height: 34px;
            margin: 0 0 0 41px;
          }
          &:nth-child(3){
            width: 108px;
            height: 29px;
            margin: 0px 0px 0px 40px;
          }
          &:nth-child(4){
            width: 106px;
            height: 24px;
            margin: 0 0 0 41px;
          }
          &:nth-child(5){
            width: 122px;
            height: 33px;
            margin: 0px 0px 0px 40px;
          }
        }
      }
    }
  }
</style>
