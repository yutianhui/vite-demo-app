<template>
  <div style="height: 10px"></div>
  <!-- 测试使用vuex -->
  <div>
    <el-row class="content">
      <Tip text="1. 测试使用vuex" />
    </el-row>
    <el-row class="content content-wrapper" type="flex" justify="space-between">
      <el-col :span="8" class="select-wrapper user__info">
        <el-form :model="userInfoForm" ref="userInfoFormRef" label-width="80px">
          <el-form-item label="用户ID">
            <el-input v-model="userInfoForm.userId" />
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="userInfoForm.userName" />
          </el-form-item>
        </el-form>
        <!-- 操作按钮 -->
        <el-row justify="center">
          <el-button type="primary" @click="updateUserInfo(false)" plain>提交</el-button>
          <el-button type="danger" @click="updateUserInfo(true)" plain>清空</el-button>
        </el-row>
      </el-col>
      <el-col :span="15" class="user_info__show">
        <Tip text="当前的用户" />
        <p style="padding: 10px"><span>当前用户ID: </span> {{ userId ? userId : '暂无数据' }}</p>
        <p style="padding: 10px"><span>当前用户名: </span> {{ userName ? userName : '暂无数据' }}</p>
      </el-col>
    </el-row>
  </div>

  <!-- 测试树形选择器 -->
  <div>
    <el-row class="content">
      <Tip text="2. 测试树形选择器组件" />
    </el-row>
    <el-row class="content content-wrapper" type="flex" justify="space-between">
      <el-col :span="15" class="shower-wrapper">
        <p class="title">选中的节点的ID :</p>
        <p class="text">{{ currId }}</p>
        <p class="title">选中的节点标签 :</p>
        <p class="text">{{ currLabel }}</p>
        <p class="title">选中的节点的JSON数据 :</p>
        <p class="text">{{ JSON.stringify(currNode) }}</p>
      </el-col>
      <el-col :span="8" class="select-wrapper">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" default-expand-all />
      </el-col>
    </el-row>
  </div>

  <!-- 测试使用axios请求数据 -->
  <div>
    <el-row class="content">
      <Tip text="3. 测试使用axios请求数据" />
    </el-row>
    <el-row class="content content-wrapper axios-wrapper" type="flex" justify="space-between">
      <el-col :span="24">
        <!-- 内容展示的区域 -->
        <el-row class="user__info" align="middle">
          <el-col :span="4">
            <el-image class="user_info__image" style="width: 170px; height: 170px" :src="userImage" fit="cover" />
            <p style="font-weight: 800; text-align: center; margin: 10px 0; margin-bottom: 20px">{{ userFullName }}</p>
            <el-row justify="center">
              <el-button type="primary" @click="getUserData" :loading="getUserBtnLoading">随机更换一个</el-button>
            </el-row>
          </el-col>
          <el-col :span="12">
            <Tip text="用户信息" />
            <!-- 用户信息表单 -->
            <el-form v-if="userImage != ''" :model="userData" class="user_info_form" label-position="right" :disabled="true" label-width="80px">
              <el-form-item label="first name">
                <span style="font-weight: 800">{{ userData.name.first }}</span>
              </el-form-item>
              <el-form-item label="last name">
                <span style="font-weight: 800">{{ userData.name.last }}</span>
              </el-form-item>
              <el-form-item label="birth">
                <span style="font-weight: 800">{{ moment(userData.dob.date).format('YYYY-MM-DD HH:mm:ss') }}</span>
              </el-form-item>
              <el-form-item label="age">
                <span style="font-weight: 800">{{ userData.dob.age }}</span>
              </el-form-item>
              <el-form-item label="email">
                <span style="font-weight: 800">{{ userData.email }}</span>
              </el-form-item>
              <el-form-item label="gender">
                <span style="font-weight: 800">{{ userData.gender }}</span>
              </el-form-item>
              <el-form-item label="phone">
                <span style="font-weight: 800">{{ userData.phone }}</span>
              </el-form-item>
            </el-form>
            <Tip text="其他信息" />
            <el-form v-if="userImage != ''" :model="userData" class="user_info_form" label-position="right" :disabled="true" label-width="80px">
              <el-form-item label="注册时长">
                <span style="font-weight: 800">{{ userData.registered.age }} 年</span>
              </el-form-item>
              <el-form-item label="注册时间">
                <span style="font-weight: 800">{{ moment(userData.registered.date).format('YYYY-MM-DD HH:mm:ss') }}</span>
              </el-form-item>
            </el-form>
          </el-col>
          <!-- 展示请求到的数据 -->
          <el-col :span="8" class="user_json_data">
            <p>
              <Tip text="获取的用户JSON数据" />
            </p>
            <p style="width: 100%; height: 400px; overflow-y: auto">
              {{ JSON.parse(JSON.stringify(userData)) }}
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, toRefs, reactive, computed, readonly, onMounted, toRef } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import http from '@/plugins/axios/index.js'
import vueLogo from '@/assets/img/logo.png'

const store = useStore()

/* ----- 1. 测试使用vuex ----- */
const userInfoForm = reactive({ userId: '', userName: '' })
const updateUserInfo = clear => {
  store.dispatch('updateUserInfo', clear ? {} : { ...userInfoForm })
}
const userName = computed(() => store.state.user.userName)
const userId = computed(() => store.state.user.userId)

/* ----- 2. 测试使用树形选择器 ----- */
// 树形控件配置模板
const defaultProps = {
  children: 'children',
  label: 'label'
}

// 控件的数据
const treeData = reactive([
  {
    id: '1',
    label: '1. 聚合API',
    children: [
      { id: '1-1', label: '1-1. ref()' },
      { id: '1-2', label: '1-2. toRefs()' },
      { id: '1-3', label: '1-3. reactive()' }
    ]
  }
])

setTimeout(() => {
  for (let index = 2; index < 6; index++) {
    treeData.push({
      id: `${index}`,
      label: `${index}. 聚合API`,
      children: [
        { id: `${index}-1`, label: `${index}-1. ref()` },
        { id: `${index}-2`, label: `${index}-2. toRefs()` },
        { id: `${index}-3`, label: `${index}-3. reactive()` }
      ]
    })
  }
}, 2000)

const currNode = ref(null)
const currId = ref('请点击节点')
const currLabel = ref('请点击节点')

// 树形控件点击的回调
const handleNodeClick = (node, treeNode, eventObj) => {
  console.log('当前节点 => ', node)
  console.log('树节点 => ', treeNode)
  console.log('事件对象 => ', eventObj)
  currNode.value = node
  currId.value = node.id
  currLabel.value = node.label
}

/* ----- 3. 测试使用axios请求 ----- */
// 用户数据对象
const userData = ref(null)
const userImage = ref('')
const userFullName = ref('')
const getUserBtnLoading = ref(true)
// 获取用户信息的函数
const getUserData = () => {
  getUserBtnLoading.value = true
  http
    .get('/api/')
    .then(({ data }) => {
      userData.value = data.results[0]
      userImage.value = userData.value.picture.large
      let { title, first, last } = userData.value.name
      userFullName.value = title + '. ' + first + ' ' + last
      store.dispatch('updateUserInfo', { userId: userData.value.dob.age, userName: userFullName, now: true })
      // console.log('获取的数据： ', userData.value);
    })
    .catch(err => {
      console.log('获取数据失败: ', err)
    })
    .finally(() => {
      getUserBtnLoading.value = false
    })
}

// monunted -  页面渲染后的时候调用
onMounted(async () => {
  // 请求数据
  getUserData()
})
</script>

<style lang="scss" scoped>
.content-wrapper {
  margin-top: 10px;
  margin-bottom: 10px;

  & > .el-col {
    border-radius: 5px;
    height: 500px;
    overflow-x: auto;
    overflow-y: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  .user__info .el-form {
    width: 90%;
    margin-top: 10px;
    :deep(.el-input__wrapper) {
      border-radius: 4px;
    }
  }
  .user_info__show {
    p span {
      color: #888;
      font-weight: 800;
    }
  }

  // .select-wrapper {
  //   background-color: antiquewhite;'
  // }

  .shower-wrapper {
    padding: 0 15px;
    background-color: rgb(111, 210, 165);
    p {
      margin-top: 10px;
    }
    .title {
      color: rgb(64, 126, 99);
      font-weight: 800;
    }
    .text {
      color: rgb(45, 104, 77);
    }
  }
}

.axios-wrapper > .el-col :deep() {
  color: rgb(122, 154, 242);
  background-color: rgb(209, 221, 255);

  & > .user__info {
    height: 100%;
    & > .el-col {
      height: 100%;
      overflow-y: auto;
    }
  }

  .user_json_data {
    // overflow-x: hidden;
    color: rgb(150, 175, 243);
  }

  // 图片的外层div
  .user_info__image {
    display: block;
    margin: 20px auto;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid rgb(174, 190, 231);
    // box-shadow: 0 2px 12px 0 rgba(165, 97, 97, 0.5);

    img.el-image__inner {
      transition: all 0.25s ease-in-out;
    }

    &:hover {
      img.el-image__inner {
        transform: scale(1.1);
      }
    }
  }

  .user_info_form {
    margin: 0 auto;
    .el-form-item {
      display: inline-flex;
      padding: 10px;
      width: 50%;
    }
  }

  //
}
</style>
