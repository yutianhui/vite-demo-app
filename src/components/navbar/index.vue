<template>
  <el-card :body-style="{ padding: '10px' }">
    <el-row class="content" type="flex" justify="space-between" align="middle">
      <!-- logo 图片 -->
      <el-row justify="space-between" align="middle" class="logo-wrapper">
        <el-image style="width: 50px; height: 50px" :src="logo" fit="fill" />
        <h4>{{ title }}</h4>
      </el-row>
      <el-row justify="end">
        <el-button type="primary" @click="router.push('/')" text>主页</el-button>
        <el-button type="primary" @click="router.push('/tutorial')" text>指导教程</el-button>
        <el-button type="primary" @click="router.push('/concats')" plain>联系我们</el-button>
      </el-row>
    </el-row>
  </el-card>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import logo from '@/assets/img/logo.png'
  // 定义属性的使用
  defineProps({
    title: {
      type: String,
      default: 'My Vue3',
    },
  })

  const count = ref(0)

  const router = useRouter()
</script>

<style lang="scss" scoped>
  .el-card :deep() .el-card__body .logo-wrapper {
    h4 {
      margin-left: 10px;
      color: rgb(74, 74, 74);
      font-weight: 800;
      text-shadow: 0px 2px 5px rgb(31 63 109 / 20%);
    }
  }
</style>
