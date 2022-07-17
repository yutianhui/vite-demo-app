<template>
  <!-- 顶部的 -->
  <div class="footer__header">
    <div class="hea_content"></div>
  </div>

  <!-- 主要内容展示区域 -->
  <el-row class="footer">
    <!-- 内容区域 -->
    <el-row class="content footer__wrapper">
      <el-col :span="8">
        <!-- header logo -->
        <el-row type="flex" justify="start" align="middle">
          <el-image class="footer-logo" style="width: 50px; height: 50px" :src="footerLogo" fit="cover" />
          <span style="color: white; padding-left: 10px; font-weight: 800">Study Vue3 By. yutianhui</span>
        </el-row>
        <!-- text -->
        <p style="padding: 10px 0; color: white; line-height: 1.7">
          Life comes in a package. This package includes happiness and sorrow, failure and success, hope and despair. Life is a learning process. Experiences in life teach us new lessons and make us a better person. With each passing day we learn to
          handle various situations.
        </p>
        <!-- 联系方式 -->
        <div class="div-divider"></div>
        <div class="concat__wrapper">
          <el-icon><HomeFilled /></el-icon>
          <p>England Bradford 49 Ebenezer St</p>
        </div>
        <div class="concat__wrapper">
          <el-icon><UserFilled /></el-icon>
          <p>website - <span style="color: #888">www.yutianhui.com.cn</span></p>
        </div>
        <div class="concat__wrapper">
          <el-icon><Histogram /></el-icon>
          <p>现在查看当今最流行的趋势 ! !</p>
        </div>
        <div class="concat__wrapper">
          <el-icon><LocationFilled /></el-icon>
          <p>(+44) 7560618027 Emergency Medical Technician, Restaurant</p>
        </div>
      </el-col>

      <!-- 引用的链接 -->
      <el-col :span="8" class="resource-links">
        <h4>使用的资源链接</h4>
        <el-row class="links">
          <el-col :span="12" v-for="item in resourceLinks" :key="item.name">
            <el-row align="middle">
              <!-- icon -->
              <el-icon><DArrowRight /></el-icon>
              <span>
                <a :href="item.link" target="_bank">{{ item.name }}</a>
              </span>
            </el-row>
          </el-col>
        </el-row>

        <h4>开发者</h4>
        <el-row class="links">
          <el-col :span="12">
            <el-row align="middle">
              <!-- icon -->
              <el-icon><DArrowRight /></el-icon>
              <span>
                <a href="https://www.yutianhui.com.cn">yutianhui dev</a>
              </span>
            </el-row>
          </el-col>
        </el-row>

        <!-- font image -->
        <h4>社交媒体</h4>
        <el-row class="links social_contact">
          <el-col :span="8" class="icon_wrapper" v-for="item in socialIcons" :key="item.name">
            <a :href="item.link" target="_bank" :style="{ ...item }">
              <i :class="item.name"></i>
            </a>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="8" class="subscribe-link">
        <h4>期待更多人加入</h4>
        <el-row class="social_contact people">
          <el-col :span="6" class="icon_wrapper" v-for="item in peopleImages" :key="item">
            <a href="/">
              <el-image class="footer-logo" :src="item" fit="cover" />
            </a>
          </el-col>
        </el-row>

        <h4>学习</h4>
        <p>Life comes in a package. This package includes happiness and sorrow, failure and success, hope and despair. Life is a learning process.</p>
        <h4>更多的内容使用</h4>
        <p>Life comes in a package. This package includes happiness and sorrow, Life comes in a package. failure and success, hope and despair. Life is a learning process.failure and success, hope and despair. Life is a learning process.</p>
      </el-col>
    </el-row>
  </el-row>

  <!-- 页脚部分 -->
  <el-row class="footer__foo">
    <el-row class="content" type="flex" justify="space-between" align="middle">
      <!-- 内容区域 -->
      <el-col :span="12">Copyright By yutianhui <span style="color: rgb(27, 148, 255)">2022</span> - <span style="color: rgb(27, 148, 255)">2032</span></el-col>
      <el-col :span="12" style="text-align: end">
        Tanks For Vue | <span>Vue3 Document In <a style="color: rgb(27, 148, 255)" href="https://vuejs.org/guide/introduction.html">This</a></span>
      </el-col>
    </el-row>
  </el-row>
</template>

<script setup>
import { ref, toRefs } from 'vue'
/** 导入图片资源 */
import footerLogo from '@/assets/img/logo.png'
import people01 from '@/assets/img/people/01.jpg'
import people02 from '@/assets/img/people/02.jpg'
import people03 from '@/assets/img/people/03.jpg'
import people04 from '@/assets/img/people/04.jpg'
import people05 from '@/assets/img/people/05.jpg'
import people06 from '@/assets/img/people/06.jpg'
import people07 from '@/assets/img/people/07.jpg'
import people08 from '@/assets/img/people/08.jpg'

/** 资源链接数据 */
const resourceLinks = [
  { name: 'Vue', link: 'https://vuejs.org/guide/introduction.html' },
  { name: 'Vue Router', link: 'https://router.vuejs.org/zh/' },
  { name: 'Vuex', link: 'https://vuex.vuejs.org/zh/' },
  { name: 'Lodash', link: 'https://www.lodashjs.com/' },
  { name: 'Element Plus', link: 'https://element-plus.org/zh-CN' },
  { name: 'Scss', link: 'https://www.sass.hk/docs/' },
  { name: 'Moment', link: 'https://momentjs.com/' },
  { name: 'Font Awesome', link: 'https://fontawesome.com/' },
  { name: '...', link: '/' }
]

/**  社交的媒体的链接 */
// <i class="fa-brands fa-twitter"></i>
const socialIcons = [
  { name: 'fa-brands fa-facebook-f', 'background-color': 'rgb(23, 115, 234)', link: 'https://twitter.com/login' },
  { name: 'fa-brands fa-twitter', 'background-color': 'rgb(52, 179, 247)', link: 'https://www.facebook.com/' },
  { name: 'fa-brands fa-youtube', 'background-color': 'red', link: 'https://www.youtube.com/' },
  { name: 'fa-brands fa-snapchat-square', 'background-color': 'rgb(250, 176, 5)', link: 'https://www.snapchat.com/' },
  { name: 'fa-brands fa-github', 'background-color': 'rgb(27, 31, 35)', link: 'https://www.github.com/yutianhui' },
  { name: 'fa-brands fa-weixin', 'background-color': 'rgb(44, 187, 0)', link: 'https://www.wechat.com/' }
]

/** 图片资源 */
const peopleImages = [people01, people02, people03, people04, people05, people06, people07, people08]
</script>

<style lang="scss" scoped>
.footer__header {
  box-sizing: border-box;
  overflow-x: hidden;
  margin-bottom: -2px;
  .hea_content {
    border-left: 50vw solid rgb(36, 44, 64);
    border-top: 300px solid transparent;
    border-right: 50vw solid rgb(36, 44, 64);
    border-bottom: 100px solid rgb(36, 44, 64);
  }
}

.footer {
  min-height: 400px;
  // border-top: 1px solid rgb(226, 226, 226);
  padding: 10px 0;
  background-color: rgb(36, 44, 64);
  color: white;

  .el-row.footer__wrapper {
    .el-col {
      padding: 10px;
      // background-color: aqua;
      overflow: hidden;
    }
  }
}

.div-divider {
  background-color: rgb(91, 109, 156);
  height: 1px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.concat__wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 50px;
  margin-top: 40px;
  .el-icon {
    color: rgb(65, 184, 131);
    font-size: 22px;
    margin-left: 4px;
  }
  p {
    margin-left: 20px;
    line-height: 1.7;
  }
}

.resource-links {
  h4 {
    font-weight: 800;
    margin-bottom: 15px;
  }

  .el-col .el-icon {
    font-size: 15px;
  }
  .el-col span a {
    margin-left: 6px;
    color: rgb(27, 148, 255);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .links {
    margin-bottom: 15px;
  }
}

.subscribe-link {
  h4 {
    font-weight: 800;
    margin-bottom: 15px;
  }
  p {
    line-height: 1.8;
    margin-bottom: 15px;
  }
}

.footer__foo {
  margin-top: -2px;
  height: 42px;
  background-color: rgb(31, 37, 55);
  color: white;
  font-size: 13px;
  .content {
    padding: 0 10px;
  }
}

// 社交图标
.social_contact .icon_wrapper {
  // background-color: rgba($color: white, $alpha: 0.5);
  text-align: center;

  // 属性值
  $padding: 10px;
  $fontSize: 25px;

  & > a {
    height: $padding * 2 + $fontSize;
    width: $padding * 2 + $fontSize;
    transition: 0.25s ease-in-out;
    overflow: hidden;
    display: inline-block;
    // background-color: rgb(23, 115, 234);
    border-radius: 50%;
    outline: 5px solid rgb(63, 72, 94);
    margin-bottom: 20px;
    &:hover {
      outline: 5px solid rgb(110, 119, 144);
    }
  }

  svg {
    color: white;
    padding: $padding;
    font-size: $fontSize;
  }
}

.people.social_contact {
  a {
    outline: 5px solid rgb(77, 84, 100);
    border-radius: 5px;
    .el-image {
      transition: 0.25s ease-in-out;
    }
    /* 鼠标移入缩放图片 */
    &:hover {
      .el-image {
        transform: scale(1.2);
      }
    }
  }
}
</style>
