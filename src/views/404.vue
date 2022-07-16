<template>
  <!-- 没有找到页面的内容显示 -->
  <div class="not-found-page">
    <el-card shadow="never" :body-style="{ padding: '5px' }">
      <el-row class="content__wrapper" type="flex">
        <el-image style="width: 200px; height: 200px" :src="logo" fit="contain" />
        <p>抱歉,没有找到你需要的页面</p>
        <el-row justify="center">
          <el-button type="primary" @click="backTo('Home')" plain>回到主页</el-button>
          <el-button type="warning" @click="backTo('Home')" plain>联系我们解决</el-button>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
  import { ref, toRefs } from 'vue'
  import logo from '@/assets/img/404.png'
  import { useRouter, useRoute } from 'vue-router'
  import { cloneDeep } from 'lodash'

  const logoWidth = ref(100)

  const router = useRouter()
  const route = useRoute()

  // 编程路由
  const backTo = name => {
    router.push({ name: name })
  }
</script>

<style lang="scss" scoped>
  .not-found-page :deep() {
    min-height: 600px;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;

    .el-card {
      width: 400px;
      height: 400px;
      border-radius: 5px;

      &__body {
        height: 100%;
      }

      .content__wrapper {
        height: 100%;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
      }
    }
  }
</style>
