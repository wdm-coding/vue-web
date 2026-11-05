<script setup lang="ts">
  import { leftDataSource } from '../data'
  defineOptions({
    name: 'CpsLeftPanel'
  })
</script>

<template>
  <!-- 01 算力基础设施能力 -->
  <div class="left_panel">
    <!-- 面板标题 -->
    <div class="left_panel_header">
      <img
        class="left_panel_index"
        src="@/assets/images/visualization/cps/panel-index-01.png"
        :alt="leftDataSource.title"
      >
      <div class="left_panel_header_text">
        <span class="left_panel_title">{{ leftDataSource.title }}</span>
        <span class="left_panel_subtitle">{{ leftDataSource.subtitle }}</span>
      </div>
    </div>
    <!-- 数据中心 / 接入平台 统计 -->
    <div class="left_panel_stats">
      <template v-for="item in leftDataSource.stats" :key="item.title">
        <div class="stat_item">
          <div class="stat_item_left">
            <span class="stat_num">{{ item.num }}</span>
            <img class="stat_glow" src="@/assets/images/visualization/cps/stat-base.png" :alt="item.title">
          </div>
          <div class="stat_item_title">{{ item.title }}</div>
        </div>
      </template>
    </div>
    <!-- 资源接入-统一纳管-调度编排-计量计费-安全运维 流程 -->
    <div class="left_panel_flow">
      <template v-for="(item, index) in leftDataSource.flow" :key="item.title">
        <div class="flow_item">
          <div class="flow_left">
            <img :src="item.icon" :alt="item.title" class="flow_icon">
            <span class="flow_title">
              {{ item.title }}
            </span>
          </div>
          <img
            v-if="index < leftDataSource.flow.length - 1"
            src="@/assets/images/visualization/cps/flow-arrow.png"
            :alt="item.title"
            class="flow_arrow"
          >
        </div>
      </template>
    </div>
    <!-- 多类型算力资源适配 -->
    <div class="left_panel_adapt">
      <span class="adapt_title">{{ leftDataSource.adapt.title }}</span>
      <template v-for="(item, index) in leftDataSource.adapt.list" :key="item.title">
        <div :class="{ 'adapt_row': true, 'adapt_row_border': index < leftDataSource.adapt.list.length - 1 }">
          <img class="adapt_icon" :src="item.icon" :alt="item.title">
          <span class="adapt_name">{{ item.title }}</span>
          <span class="adapt_desc">{{ item.desc }}</span>
        </div>
      </template>
      <div class="adapt_note">
        {{ leftDataSource.adapt.bottomDesc }}
      </div>
    </div>
    <!-- 资源运行态势 -->
    <div class="left_panel_status">
      <div class="status_title_wrap">
        {{ leftDataSource.runStatus.title }}
      </div>
      <div class="status_row">
        <template v-for="(item) in leftDataSource.runStatus.list" :key="item.title">
          <div class="status_item" :style="{ backgroundImage: `url(${item.icon})` }">
            <span class="status_item_title">{{ item.title }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
	.left_panel {
		display: flex;
		flex-direction: column;
		width: 470px;
		height: 678px;
		margin-top: 15px;
		background: url("@/assets/images/visualization/cps/panel-bg.png") 100% no-repeat;
		background-size: 100% 100%;
		.left_panel_header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 367px;
			height: 40px;
			margin: 13px 0 0 15px;
			.left_panel_index {
				width: 61px;
				height: 40px;
			}
			.left_panel_header_text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 298px;
				height: 38px;
				margin: 1px 0 0 0;
				.left_panel_title {
					background-image: linear-gradient(
						270deg,
						rgba(121, 240, 255, 1) 0,
						rgba(121, 240, 255, 1) 0,
						rgba(255, 255, 255, 1) 100%,
						rgba(255, 255, 255, 1) 100%
					);
					width: 159px;
					height: 20px;
					overflow-wrap: break-word;
					color: rgba(86, 243, 253, 1);
					font-size: 20px;
					font-family: "shsm";
					font-weight: 700;
					text-align: left;
					white-space: nowrap;
					line-height: 20px;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.left_panel_subtitle {
					width: 297px;
					height: 10px;
					overflow-wrap: break-word;
					color: rgba(70, 151, 217, 1);
					font-size: 12px;
					font-family: "shsn";
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 12px;
					margin: 8px 0 0 1px;
				}
			}
		}
		.left_panel_stats {
			display: flex;
			flex-direction: row;
			width: 430px;
			height: 100px;
			background: url("@/assets/images/visualization/cps/left-stats-bg.png") 100% no-repeat;
			background-size: 100% 100%;
			margin: 20px 0 0 20px;
			.stat_item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.stat_item_left {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.stat_num {
						width: 21px;
						height: 20px;
						overflow-wrap: break-word;
						color: rgba(69, 244, 255, 1);
						font-size: 35px;
						font-family: "ybtth";
						font-weight: normal;
						text-align: center;
					}
				}
				.stat_item_title {
					width: 105px;
					height: 46px;
					background: url("@/assets/images/visualization/cps/stat-label.png") 100% no-repeat;
					background-size: 100% 100%;
					text-align: center;
					line-height: 46px;
					font-size: 16px;
					font-family: "shsn";
					font-weight: normal;
					color: rgba(255, 255, 255, 1);
					margin-left: -10px;
				}
			}
		}
		.left_panel_flow {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20px 20px 0 20px;
			.flow_item {
				display: flex;
				.flow_left {
					text-align: center;
					.flow_icon {
						width: 59px;
						height: 52px;
					}
					.flow_title {
						color: #40c4ff;
						font-size: 12px;
					}
				}
				.flow_arrow {
					width: 23px;
					height: 14px;
					position: relative;
					top: 20px;
					left: 5px;
				}
			}
		}
		.left_panel_adapt {
			width: 430px;
			height: 245px;
			display: flex;
			flex-direction: column;
			background: url("@/assets/images/visualization/cps/left-adapt-bg.png") 100% no-repeat;
			background-size: 100% 100%;
			margin: 20px 0 0 20px;
			.adapt_title {
				background-image: linear-gradient(
					180deg,
					rgba(121, 240, 255, 1) 0,
					rgba(121, 240, 255, 1) 0,
					rgba(255, 255, 255, 1) 100%,
					rgba(255, 255, 255, 1) 100%
				);
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 14px;
				font-family: "shsm";
				font-weight: 500;
				white-space: nowrap;
				line-height: 14px;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				margin: 10px;
			}
			.adapt_row {
				display: flex;
				align-items: center;
				margin: 4px 34px 4px 27px;
				.adapt_icon {
					width: 44px;
					height: 44px;
					margin-right: 10px;
				}
				.adapt_name {
					width: 209px;
					color: #fff;
					font-size: 14px;
				}
				.adapt_desc {
					color: #a0b7e1;
					font-size: 12px;
					font-family: "shsn";
				}
			}
      .adapt_row_border{
        padding-bottom: 2px;
        border-bottom: 1px solid #004771;
      }
			.adapt_note {
				width: 381px;
				height: 34px;
				background-image: linear-gradient(
					-90deg,
					rgba(1, 139, 250, 0.06) 0%,
					rgba(1, 139, 250, 0.12) 46%,
					rgba(1, 139, 250, 0.06) 100%
				);
				color: rgba(191, 212, 251, 1);
				font-size: 12px;
				font-family: "shsn";
        text-align: center;
        margin: 0 auto;
        line-height: 34px;
			}
		}
		.left_panel_status {
			display: flex;
			flex-direction: column;
			height: 110px;
			background: url("@/assets/images/visualization/cps/left-status-bg.png") 100% no-repeat;
			background-size: 100% 100%;
			width: 430px;
			margin: 19px 0 20px 20px;
			.status_title_wrap {
				display: flex;
				flex-direction: row;
				width: 84px;
				height: 15px;
				margin: 10px 0 0 10px;
				background-image: linear-gradient(
          180deg,
          rgba(121, 240, 255, 1) 0,
          rgba(121, 240, 255, 1) 0,
          rgba(255, 255, 255, 1) 100%,
          rgba(255, 255, 255, 1) 100%
        );
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        font-family: "shsm";
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 14px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
			}
			.status_row {
				display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 10px;
        .status_item{
          width: 119px;
          height: 46px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .status_item_title{
            width: 54px;
            height: 14px;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            font-family: "shsm";
            font-weight: 500;
            text-align: left;
            white-space: nowrap;
            line-height: 19.4977px;
            margin: 9px 0 0 53px;
          }
        }
			}
		}
	}
</style>
