<template>
  <div class="about">
    <h1>This is an about page
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button @click="Fun" type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </h1>
  </div>
</template>

<script>
import { UserRegisterAPI } from '@/api/index.js'
export default {
  data () {
    return {

    }
  },
  methods: {
    async Fun () {
      const res = await UserRegisterAPI('yaojun20221', '2222222222', '2222222222')
      console.log(res)
    }
  }
}
</script>
