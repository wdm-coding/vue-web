<script setup lang='ts'>
  import { rightDataSource } from '../data'
  defineOptions({
    name: 'CpsRightPanel'
  })
</script>


<template>
  <!-- 02 Token算力经济 -->
  <div class="right_panel">
    <!-- 面板标题 -->
    <div class="right_panel_header">
      <div class="right_panel_index">
        <img
          src="@/assets/images/visualization/cps/panel-index-02.png"
          alt="02"
        >
      </div>
      <div class="right_panel_header_text">
        <span class="right_panel_title">{{ rightDataSource.title }}</span>
        <span class="right_panel_subtitle">{{ rightDataSource.subtitle }}</span>
      </div>
    </div>
    <!-- Token服务价值链 -->
    <div class="right_panel_chain">
      <span class="chain_title">{{ rightDataSource.tokenChain.title }}</span>
      <div class="chain_icons">
        <template
          v-for="(item, index) in rightDataSource.tokenChain.list"
          :key="item.title"
        >
          <img
            class="chain_icon"
            :src="item.icon"
            alt=""
          >
          <img
            v-if="index < rightDataSource.tokenChain.list.length - 1"
            class="chain_arrow"
            src="@/assets/images/visualization/cps/chain-arrow.png"
            alt="chain-arrow"
          >
        </template>
      </div>
      <div class="chain_labels">
        <div
          v-for="item in rightDataSource.tokenChain.list"
          :key="item.title"
          class="chain_label"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="chain_note">
        <span>{{ rightDataSource.tokenChain.desc }}</span>
      </div>
      <div class="chain_tags_row">
        <div
          v-for="tag in rightDataSource.appList.slice(0, 3)"
          :key="tag"
          class="chain_tag"
        >
          <span>{{ tag }}</span>
        </div>
      </div>
      <div class="chain_tags_row chain_tags_row--2">
        <div
          v-for="tag in rightDataSource.appList.slice(3)"
          :key="tag"
          class="chain_tag"
        >
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- 联合运营合作伙伴 -->
    <div class="right_panel_partner">
      <div class="partner_title_wrap">
        {{ rightDataSource.partner.title }}
        <span class="partner_title" />
      </div>
      <div class="partner_row">
        <n-grid :cols="12" :x-gap="20" :y-gap="20">
          <n-gi
            :span="6"
            v-for="item in rightDataSource.partner.list"
            :key="item.title"
            class="partner_card"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              style="width: 70px;height: 70px;"
            >
            <div class="partner_info">
              <span class="partner_name">{{ item.title }}</span>
              <img
                src="@/assets/images/visualization/cps/partner-tip.png"
                alt="partner-tip"
                style="width: 12px;height: 12px;"
              >
              <img
                src="@/assets/images/visualization/cps/partner-bar.png"
                alt="partner-bar"
                style="width: 74px;height: 25px;"
              >
            </div>
          </n-gi>
        </n-grid> 
      </div>
    </div>
  </div>
</template>


<style lang='scss' scoped>
  .right_panel{
    display: flex;
    flex-direction: column;
    width: 470px;
    height: 678px;
    margin-top: 15px;
    background: url('@/assets/images/visualization/cps/panel-bg.png') 100% no-repeat;
    background-size: 100% 100%;
    .right_panel_header{
      width: 248px;
      height: 40px;
      display: flex;
      margin: 14px 0 0 15px;
      .right_panel_index{
        width: 60px;
        height: 40px;
        display: flex;
        flex-direction: column;
        background: url('@/assets/images/visualization/cps/panel-index-02-bg.png') 100% no-repeat;
        background-size: 100% 100%;
        img{
          width: 60px;
          height: 39px;
        }
      }
      .right_panel_header_text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 179px;
        height: 38px;
        margin: 1px 0px 0px 0px;
        .right_panel_title{
          background-image: linear-gradient(270deg, rgba(121, 240, 255, 1) 0, rgba(121, 240, 255, 1) 0, rgba(255, 255, 255, 1) 100.000000%, rgba(255, 255, 255, 1) 100.000000%);
          width: 142px;
          height: 20px;
          overflow-wrap: break-word;
          color: rgba(86, 243, 253, 1);
          font-size: 20px;
          font-family: 'shsm';
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 20px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .right_panel_subtitle{
          width: 178px;
          height: 10px;
          overflow-wrap: break-word;
          color: rgba(70, 151, 217, 1);
          font-size: 12px;
          font-family: 'shsn';
          font-weight: normal;
          text-align: left;
          white-space: nowrap;
          line-height: 12px;
          margin: 8px 0 0 1px;
        }
      }
    }
    .right_panel_chain{
      display: flex;
      flex-direction: column;
      width: 430px;
      height: 282px;
      background: url('@/assets/images/visualization/cps/right-chain-bg.png') 100% no-repeat;
      background-size: 100% 100%;
      margin: 19px 0 0 20px;
      .chain_title{
        background-image: linear-gradient(180deg, rgba(121, 240, 255, 1) 0, rgba(121, 240, 255, 1) 0, rgba(255, 255, 255, 1) 100.000000%, rgba(255, 255, 255, 1) 100.000000%);
        width: 112px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: 'shsm';
        font-weight: 500;
        text-align: center;
        white-space: nowrap;
        line-height: 14px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 11px 0 0 11px;
      }
      .chain_icons{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 390px;
        height: 58px;
        margin: 20px 0 0 21px;
        .chain_icon{
          &:nth-child(1){
            width: 54px;
            height: 49px;
          }
          &:nth-child(3){
            width: 54px;
            height: 47px;
          }
          &:nth-child(5){
            width: 54px;
            height: 58px;
          }
          &:nth-child(7){
            width: 53px;
            height: 49px;
          }
          &:nth-child(9){
            width: 54px;
            height: 54px;
          }
        }
        .chain_arrow{
          align-self: center;
          width: 21px;
          height: 13px;
        }
      }
      .chain_labels{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 404px;
        height: 32px;
        margin: 10px 0 0 14px;
        .chain_label{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 68px;
          height: 32px;
          background: url('@/assets/images/visualization/cps/chain-label.png') 100% no-repeat;
          background-size: 100% 100%;
          span{
            height: 12px;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            font-family: 'shsn';
            font-weight: normal;
            text-align: center;
            white-space: nowrap;
            line-height: 12px;
          }
        }
      }
      .chain_note{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image:  linear-gradient(-90deg, rgba(1,139,250,0.06) 0%, rgba(1,139,250,0.12) 46%, rgba(1,139,250,0.06) 100%);
        height: 30px;
        width: 411px;
        margin: 8px 0 0 10px;
        span{
          width: 264px;
          height: 12px;
          overflow-wrap: break-word;
          color: rgba(191, 212, 251, 1);
          font-size: 12px;
          font-family: 'shsn';
          font-weight: normal;
          text-align: center;
          white-space: nowrap;
          line-height: 12px;
        }
      }
      .chain_tags_row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 378px;
        height: 28px;
        margin: 14px 0 0 26px;
        .chain_tag{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(7, 29, 56, 1);
          border-radius: 4px;
          height: 28px;
          border: 1px solid rgba(0, 0, 0, 1);
          width: 116px;
          span{
            height: 13px;
            overflow-wrap: break-word;
            color: rgba(42, 161, 216, 1);
            font-size: 12px;
            font-family: 'shsn';
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            line-height: 21.4309px;
          }
        }
      }
      .chain_tags_row--2{
        width: 247px;
        margin: 13px 0 16px 91px;
      }
    }
    .right_panel_partner{
      display: flex;
      flex-direction: column;
      height: 283px;
      background: url('@/assets/images/visualization/cps/right-partner-bg.png') 100% no-repeat;
      background-size: 100% 100%;
      width: 430px;
      margin: 20px 0 20px 20px;
      .partner_title_wrap{
        display: flex;
        flex-direction: row;
        width: 112px;
        height: 15px;
        margin: 8px 0 0 10px;
        background-image: linear-gradient(180deg, rgba(121, 240, 255, 1) 0, rgba(121, 240, 255, 1) 0, rgba(255, 255, 255, 1) 100.000000%, rgba(255, 255, 255, 1) 100.000000%);
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: 'shsm';
        font-weight: 500;
        text-align: center;
        white-space: nowrap;
        line-height: 14px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .partner_row{
        width: 390px;
        height: 220px;
        margin: auto;
        .partner_card{
          width: 100%;
          height: 100px;
          background: url('@/assets/images/visualization/cps/partner-card-bg.png') 100% no-repeat;
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 10px;
          .partner_info{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .partner_name{
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 12px;
              font-family: 'shsn';
              font-weight: normal;
              text-align: center;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
</style>
