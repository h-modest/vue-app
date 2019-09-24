<!-- 页面切换组件 -->
<template lang="html">
  <transition :name="transitionName" keep-alive>
    <router-view />
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: ''
      }
    },
    watch: {
      $route (to, from) {
        if (to.meta.index > 0) {
          if (to.meta.index < from.meta.index) {
            this.transitionName = 'slide-right'
          } else {
            this.transitionName = 'slide-left'
          }
        } else if (to.meta.index === 0 && from.meta.index > 0) {
          this.transitionName = 'slide-right'
        }
      }
    }
  }
</script>

<style lang="less" src="@/assets/style/animate.less"></style>
