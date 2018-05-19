
<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix">
      <span class="title">
        {{ this.title }}
      </span>
    </div>
    <div class="detail">
      <i class="el-icon-location">
        {{ this.place }}
      </i>
    </div>
    <div class="detail">
      <i class="el-icon-date">
        {{ this.date }}
      </i>
    </div>
    <el-tag type="success">
      {{ this.support }}
    </el-tag>
  </el-card>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    place: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '2018年',
    },
    support: {
      type: String,
      default: '要支援認定1',
    },
  },
};
</script>

<style scoped>
.item {
  margin-bottom: 18px;
}
.title {
  font-size: 28px;
}

.detail {
  margin: 5px auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  text-align: left;
}
</style>
