<template>
  <div>
    <header>
      <div class="topper">
        <img src="" alt="" />
      </div>
    </header>
    <section class="container">
      <router-link :to="{ path: '/hugepage' }">
        跳转大页面
      </router-link>
    </section>
    <footer>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" src="@/assets/style/home.less"></style>
