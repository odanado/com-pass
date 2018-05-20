<template>
  <el-row>
    <el-col :span="7">
      <div
        class="grid-content">
        <el-button
          v-if="!['/', '/config'].includes(this.$route.path)"
          @click="handleBack"
          class="backButton"
          round>
          戻る
        </el-button>
      </div>
    </el-col>
    <el-col :span="10">
      <div class="grid-content header">
        こんぱす
      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content"/>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.backButton {
  background-color: transparent;
  font-size: 22px;
}
.el-col {
  min-height: 60px;
}
.header {
  font-size: 30px;
}
</style>
