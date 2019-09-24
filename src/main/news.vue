<template>
  <div class="">
    news
    <span @click="_back">点击后退</span>
  </div>
</template>

<script>
export default {
  methods: {
    _back() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
