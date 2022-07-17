<template>
  <NavBar :title="store.state.title" />
  <!-- router view -->
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import { useStore } from 'vuex'

// 使用vuex中的数据
const store = useStore()
</script>

<style lang="scss" scoped></style>
