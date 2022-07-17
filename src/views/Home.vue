<template>
  <el-row class="home__page">
    <!-- 内容区域  -->
    <el-row class="content" align="middle">
      <!-- logo区域 -->
      <el-col :span="8">
        <el-card class="img__wrapper" shadow="hover">
          <el-image class="footer-logo" style="width: 250px; height: 250px" :src="vueLogo" fit="cover" />
          <p>version: <span style="color: rgb(65, 184, 131)">^3.2.25</span></p>
        </el-card>
      </el-col>
      <!-- 项目介绍区域 -->
      <el-col :span="16" class="project__resume">
        <el-row>
          <el-col :span="12">
            <Tip text="Vue3" />
            <p>组件的代码超过几百行时，这时增加或者修改某个需求</p>
            <p>就要在 data、methods、computed 以及 mounted 中反复的跳转</p>
            <p>Vue3 使用新的 Composition API</p>
            <p>setup 是 Vue3.x 新增的一个选项， 他是组件内使用 Composition API的入口。</p>
            <Tip text="关于本项目的介绍" />
            <p>学习vue3的新特性和API,Vite</p>
            <p>这个项目就是学习vue3的demo项目，会使用和vue3相关的技术栈在这个项目中体现</p>
            <p>例如： vue-router（路由） ， vuex （全局状态管理），Element-Plus （element-ui适配vue3版本 - 组件库）</p>
            <p>使用新的聚合API，setup等.......</p>
          </el-col>
          <el-col :span="12">
            <Tip text="新的API" />
            <p>Vue3 数据都使用proxy进行封装</p>
            <p>ref() - 处理基本数据类型为响应式</p>
            <p>reactive() - 处理引用数据类型(数据/对象)为响应式数据</p>
            <p>toRefs() - 将reactive()数据的属性转换为响应式的</p>
            <p>...</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import vueLogo from '@/assets/img/logo.png'
</script>

<style lang="scss" scoped>
.home__page {
  min-height: 500px;
  height: calc(100vh - 70px);
  .content {
    .el-col {
      text-align: center;
      padding: 20px;
    }
  }

  .el-col.project__resume {
    .el-row .el-col {
      text-align: start;
      p {
        line-height: 1.8;
      }
    }
  }
}

.img__wrapper {
  padding: 20px;
  background-color: white;
  border-radius: 20px;
}
</style>
