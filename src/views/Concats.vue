<template>
  <!-- text -->
  <div style="height: 20px"></div>
  <el-row justify="center">
    <el-row class="text__wrapper" justify="center">
      <p>{{ 'our members'.toUpperCase() }}</p>
      <div></div>
    </el-row>
  </el-row>

  <!-- images area -->
  <el-row class="content people__images" justify="center">
    <el-col :span="8" v-for="(item, index) in imagesArea1" :key="index">
      <a href="#" style="display: inline-block">
        <el-image :src="item" :style="{ 'animation-delay': index * 0.37 + 's' }" fit="cover" />
      </a>
    </el-col>
  </el-row>
  <el-row class="content people__images">
    <el-col :span="8" v-for="(item, index) in imagesArea2" :key="index">
      <a href="#" style="display: inline-block">
        <el-image :src="item" :style="{ 'animation-delay': (index + 1) * 0.43 + 's' }" fit="cover" />
      </a>
    </el-col>
  </el-row>

  <!-- text -->
  <div style="height: 20px"></div>
  <el-row justify="center">
    <el-row class="text__wrapper" justify="center">
      <p>{{ 'Our goal'.toUpperCase() }}</p>
      <div></div>
    </el-row>
  </el-row>

  <div style="height: 20px"></div>
  <el-row class="content card-views" style="width: 70%" justify="space-between">
    <!-- card -->
    <el-card :body-style="{ padding: '0px' }" shadow="hover" v-for="(item, index) in cardViews" :key="index">
      <el-row class="background" :style="{ 'background-color': item.background }"></el-row>
      <el-row class="image_wrapper" justify="center">
        <el-image :src="item.img" style="width: 80px; height: 80px" :style="{ outline: `5px solid ${item.outline}` }" fit="cover" />
      </el-row>
      <el-row justify="center">
        <el-row class="text__wrapper" justify="center">
          <p>{{ item.text.toUpperCase() }}</p>
          <div></div>
        </el-row>
      </el-row>
    </el-card>
  </el-row>
</template>

<script setup>
import { ref, toRefs } from 'vue'
// user image
import people01 from '@/assets/img/people/01.jpg'
import people02 from '@/assets/img/people/02.jpg'
import people03 from '@/assets/img/people/03.jpg'
import people04 from '@/assets/img/people/04.jpg'
import people05 from '@/assets/img/people/05.jpg'
import people06 from '@/assets/img/people/06.jpg'
import people07 from '@/assets/img/people/07.jpg'
import people08 from '@/assets/img/people/08.jpg'
// chahua
import chahua01 from '@/assets/img/chahua/chahua01.png'
import chahua02 from '@/assets/img/chahua/chahua02.png'
import chahua03 from '@/assets/img/chahua/chahua03.png'

// images area
const imagesArea1 = [people01, people02]
const imagesArea2 = [people03, people04, people05, people06, people07, people08]
// card views
const cardViews = [
  { img: chahua01, background: 'rgb(249, 128, 51)', text: 'Fast', outline: 'rgb(248, 97, 128)' },
  { img: chahua02, background: 'rgb(58, 138, 199)', text: 'Security', outline: 'rgb(46, 85, 102)' },
  { img: chahua03, background: 'rgb(146, 179, 172)', text: 'Data', outline: 'rgb(237, 250, 205)' }
]
</script>

<style lang="scss" scoped>
// text__wrapper
.text__wrapper {
  margin: 20px;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  p {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 2px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  div {
    height: 100px;
    width: 8px;
    background-color: white;
    transform: rotate(45deg);
    position: absolute;
    top: -20px;
    animation: solid-text-wrapper 2s ease-in infinite alternate;
  }
}
// images
.content.people__images :deep() {
  width: 50%;

  .el-col {
    text-align: center;
    padding: 20px;
  }

  .el-col .el-image {
    display: inline-block;
    height: 140px;
    width: 140px;
    overflow: hidden;
    border: 5px solid rgba($color: rgb(126, 149, 207), $alpha: 0.5);
    border-radius: 50%;
    transition: 0.15s ease-in-out;
    position: relative;
    animation: images-up-down 1s ease-in-out infinite alternate;

    .el-image__inner {
      transition: 0.25s ease-in-out;
    }
    &:hover {
      box-shadow: 0 0 10px rgba($color: #637c89, $alpha: 0.5);
      .el-image__inner {
        transform: scale(1.15);
      }
    }
  }
}

// card-views
.card-views {
  .el-card {
    overflow: hidden;
    width: 250px;
    .background {
      height: 100px;
      //   background-color: rgb(132, 132, 132);
    }
    .image_wrapper {
      position: relative;
      top: -40px;
      .el-image {
        outline: 5px solid rgb(167, 167, 167);
        border-radius: 50%;
      }
    }
  }
}
</style>
