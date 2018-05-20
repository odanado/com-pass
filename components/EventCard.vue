
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
    <div>
      <el-tag type="success">
        {{ this.getSupport }}
      </el-tag>
      <el-tag type="success">
        {{ this.getParesis }}
      </el-tag>
    </div>
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
      default: '1',
    },
    paresis: {
      type: String,
      default: 'one_hand',
    },
  },
  computed: {
    getSupport() {
      return `要支援認定${this.support}`;
    },
    getParesis() {
      if (this.paresis === 'one_hand') {
        return '片手の麻痺';
      }
      if (this.paresis === 'two_hand') {
        return '両手の麻痺';
      }
      if (this.paresis === 'one_leg') {
        return '片足の麻痺';
      }
      if (this.paresis === 'two_leg') {
        return '両足の麻痺';
      }
      if (this.paresis === 'half_body') {
        return '半身の麻痺';
      }
      return '';
    },
  },
};
</script>

<style scoped>
.el-tag {
  margin-right: 10px;
}
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
