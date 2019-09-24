<template>
  <div class="section-box">
    <div class="box-title">
      <span v-if="title">{{title}}</span>
      <slot name="title"></slot>
    </div>
    <div class="box-content">
      <slot name="content"></slot>
    </div>
    <el-row class="box-btn">
      <slot name="btn"></slot>
    </el-row>
    <div v-if="showLoading" class="el-loading-mask" style="">
      <div class="el-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      showLoading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less">
  .section-box {
    width: 100%;
    margin-bottom: 70px;
    position: relative;
    .box-title {
      height: 32px;
      line-height: 32px;
      border-bottom: solid 3px #4586E0;
      font-size: 14px;
    }
    .box-content {
      width: calc(100% - 22px);
      border: solid 1px #E6E6E6;
      display: table;
      background: #FFF;
      margin-bottom: 20px;
      padding: 10px;
    }
    .box-btn {
      text-align: center;
      margin-bottom: 50px;
    }
  }
</style>
