<script setup lang='ts'>
  import { rightDataSource } from '../data'
  import partnerTip1 from '@/assets/images/visualization/cps/partner-tip-1.png'
  import partnerTip2 from '@/assets/images/visualization/cps/partner-tip-2.png'
  import partnerTip3 from '@/assets/images/visualization/cps/partner-tip-3.png'
  import partnerTip4 from '@/assets/images/visualization/cps/partner-tip-4.png'
  defineOptions({
    name: 'CpsRightPanel'
  })
  const partnerTips = [partnerTip1, partnerTip2, partnerTip3, partnerTip4]
</script>


<template>
  <!-- 02 Token算力经济 -->
  <div class="right_panel">
    <!-- 面板标题 -->
    <div class="right_panel_header">
      <div class="right_panel_index">
        <img
          src="@/assets/images/visualization/cps/panel-index-02.png"
          alt=""
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
            :src="item.icon"
            alt=""
          >
          <img
            v-if="index < rightDataSource.tokenChain.list.length - 1"
            src="@/assets/images/visualization/cps/chain-arrow.png"
            alt=""
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
        <span class="partner_title">{{ rightDataSource.partner.title }}</span>
      </div>
      <div class="partner_row">
        <div
          v-for="(item, index) in rightDataSource.partner.list.slice(0, 2)"
          :key="item.title"
          class="partner_card"
          :class="index === 1 ? 'partner_card--2' : ''"
        >
          <div class="partner_card_inner">
            <img
              class="partner_icon"
              :src="item.icon"
              alt=""
            >
            <div class="partner_card_text">
              <span>{{ item.title }}</span>
              <div
                class="partner_bar"
                :class="index === 1 ? 'partner_bar--2' : ''"
              >
                <img
                  :src="partnerTips[index]"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="partner_row partner_row--2">
        <div
          v-for="(item, i) in rightDataSource.partner.list.slice(2)"
          :key="item.title"
          class="partner_card"
          :class="`partner_card--${i + 3}`"
        >
          <div
            class="partner_card_inner"
            :class="`partner_card_inner--${i + 3}`"
          >
            <img
              class="partner_icon"
              :class="`partner_icon--${i + 3}`"
              :src="item.icon"
              alt=""
            >
            <div
              class="partner_card_text"
              :class="`partner_card_text--${i + 3}`"
            >
              <span>{{ item.title }}</span>
              <div
                class="partner_bar"
                :class="i === 0 ? 'partner_bar--3' : ''"
              >
                <img
                  :src="partnerTips[i + 2]"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
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
    margin: 15px 0 0 19px;
    background: url('@/assets/images/visualization/cps/panel-bg.png') 100% no-repeat;
    background-size: 100% 100%;
    .right_panel_header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 248px;
      height: 40px;
      margin: 14px 0 0 15px;
      .right_panel_index{
        display: flex;
        flex-direction: column;
        height: 40px;
        background: url('@/assets/images/visualization/cps/panel-index-02-bg.png') 100% no-repeat;
        background-size: 100% 100%;
        width: 61px;
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
        width: 390px;
        height: 58px;
        margin: 20px 0 0 21px;
        img{
          &:nth-child(1){
            width: 54px;
            height: 49px;
            margin: 9px 0px 0px 0px;
          }
          &:nth-child(2){
            width: 21px;
            height: 13px;
            margin: 20px 0 0 5px;
          }
          &:nth-child(3){
            width: 54px;
            height: 47px;
            margin: 11px 0 0 4px;
          }
          &:nth-child(4){
            width: 21px;
            height: 13px;
            margin: 20px 0 0 5px;
          }
          &:nth-child(5){
            width: 54px;
            height: 58px;
            margin: 0px 0px 0px 5px;
          }
          &:nth-child(6){
            width: 21px;
            height: 13px;
            margin: 20px 0 0 4px;
          }
          &:nth-child(7){
            width: 53px;
            height: 49px;
            margin: 9px 0 0 5px;
          }
          &:nth-child(8){
            width: 21px;
            height: 13px;
            margin: 20px 0 0 5px;
          }
          &:nth-child(9){
            width: 54px;
            height: 54px;
            margin: 4px 0 0 4px;
          }
        }
      }
      .chain_labels{
        display: flex;
        flex-direction: row;
        width: 404px;
        height: 32px;
        margin: 10px 0 0 14px;
        .chain_label{
          display: flex;
          flex-direction: column;
          height: 32px;
          background: url('@/assets/images/visualization/cps/chain-label.png') 100% no-repeat;
          background-size: 100% 100%;
          width: 68px;
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
            margin: -2px 0 0 8px;
          }
          &:nth-child(2){
            margin: 0px 0px 0px 16px;
          }
          &:nth-child(3){
            margin: 0px 0px 0px 16px;
            span{
              width: 67px;
              text-align: left;
              margin: -1px 0 0 1px;
            }
          }
          &:nth-child(4){
            margin: 0px 0px 0px 16px;
            span{
              margin: -1px 0 0 10px;
            }
          }
          &:nth-child(5){
            margin: 0px 0px 0px 16px;
            span{
              margin: -2px 0 0 9px;
            }
          }
        }
      }
      .chain_note{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(270deg, rgba(1, 139, 250, 1) 0, rgba(1, 139, 250, 0.058824) 0, rgba(1, 139, 250, 1) 45.874023%, rgba(1, 139, 250, 0.121569) 46.264648%, rgba(1, 139, 250, 1) 100.000000%, rgba(1, 139, 250, 0.058824) 100.000000%);
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
        .partner_title{
          background-image: linear-gradient(180deg, rgba(121, 240, 255, 1) 0, rgba(121, 240, 255, 1) 0, rgba(255, 255, 255, 1) 100.000000%, rgba(255, 255, 255, 1) 100.000000%);
          width: 112px;
          height: 15px;
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
      }
      .partner_row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 390px;
        height: 99px;
        margin: 25px 0 0 20px;
        .partner_card{
          display: flex;
          flex-direction: row;
          width: 185px;
          height: 99px;
          background: url('@/assets/images/visualization/cps/partner-card-1-bg.png') 100% no-repeat;
          background-size: 100% 100%;
          .partner_card_inner{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 161px;
            height: 77px;
            margin: 13px 0 0 11px;
            .partner_icon{
              width: 70px;
              height: 77px;
            }
            .partner_icon--3{
              height: 75px;
            }
            .partner_icon--4{
              height: 75px;
            }
            .partner_card_text{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 74px;
              height: 49px;
              margin: 15px 0px 0px 0px;
              span{
                width: 73px;
                height: 12px;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 12px;
                font-family: 'shsn';
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 12px;
                margin: 0px 0px 0px 1px;
              }
              .partner_bar{
                display: flex;
                flex-direction: column;
                height: 25px;
                background: url('@/assets/images/visualization/cps/partner-bar-1.png') -1px 0px no-repeat;
                background-size: 76px 26px;
                width: 74px;
                margin: 12px 0px 0px 0px;
                img{
                  width: 11px;
                  height: 11px;
                  margin: -9px 0 0 30px;
                }
              }
              .partner_bar--2{
                background: url('@/assets/images/visualization/cps/partner-bar-2.png') -1px 0px no-repeat;
                background-size: 76px 26px;
              }
              .partner_bar--3{
                background: url('@/assets/images/visualization/cps/partner-bar-3.png') -1px 0px no-repeat;
                background-size: 76px 26px;
                margin: 12px 0 0 7px;
              }
            }
            .partner_card_text--3{
              width: 85px;
              height: 48px;
              margin: 14px 0px 0px 0px;
              span{
                width: 85px;
                height: 11px;
              }
            }
            .partner_card_text--4{
              height: 48px;
              margin: 14px 0px 0px 0px;
              span{
                width: 73px;
                height: 11px;
              }
            }
          }
          .partner_card_inner--3{
            width: 165px;
            height: 75px;
            margin: 15px 0 0 11px;
          }
          .partner_card_inner--4{
            height: 75px;
            margin: 15px 0 0 11px;
          }
        }
        .partner_card--2{
          background: url('@/assets/images/visualization/cps/partner-card-2-bg.png') 100% no-repeat;
          background-size: 100% 100%;
        }
        .partner_card--3{
          background: url('@/assets/images/visualization/cps/partner-card-3-bg.png') 100% no-repeat;
          background-size: 100% 100%;
        }
        .partner_card--4{
          background: url('@/assets/images/visualization/cps/partner-card-4-bg.png') 100% no-repeat;
          background-size: 100% 100%;
          .partner_bar{
            background: url('@/assets/images/visualization/cps/partner-bar-4.png') -1px 0px no-repeat;
            background-size: 76px 26px;
          }
        }
      }
      .partner_row--2{
        margin: 19px 0 18px 20px;
      }
    }
  }
</style>
