<template>
  <el-container>
    <el-header>こんぱす</el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.el-container {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .el-container {
    width: 750px;
  }
}
</style>
