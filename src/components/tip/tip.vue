<template>
  <el-row class="tip">
    <el-row class="tip__wrapper">{{ text }}</el-row>
  </el-row>
</template>

<script setup>
  // 组件属性
  defineProps({
    text: String,
  })
</script>

<style lang="scss" scoped>
  .tip {
    .tip__wrapper {
      border-left: 4px solid rgb(65, 184, 131);
      padding: 4px 10px;
      color: rgb(69, 95, 124);
      font-weight: 800;
      margin: 10px 0;
      text-shadow: 0px 2px 5px rgb(31 63 109 / 20%);
    }
  }
</style>
