
<template>
  <el-card
    shadow="always"
    class="box-card">
    <div
      slot="header"
      class="clearfix">
      <span class="title">
        {{ this.event.title }}
      </span>
    </div>
    <div class="detail">
      <i class="el-icon-location">
        {{ this.event.place }}
      </i>
    </div>
    <div class="detail">
      <i class="el-icon-date">
        {{ this.event.date }}
      </i>
    </div>
    <div>
      <el-tag type="success">
        {{ this.getSupport }}
      </el-tag>
    </div>
    <div>
      <el-tag type="success">
        {{ this.getParesis }}
      </el-tag>
    </div>
  </el-card>
</template>


<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getSupport() {
      return `要支援認定${this.event.level.support}`;
    },
    getParesis() {
      const { paresis } = this.event.level;
      if (paresis === 'one_hand') {
        return '片手の麻痺';
      }
      if (paresis === 'two_hand') {
        return '両手の麻痺';
      }
      if (paresis === 'one_leg') {
        return '片足の麻痺';
      }
      if (paresis === 'two_leg') {
        return '両足の麻痺';
      }
      if (paresis === 'half_body') {
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
  margin-top: 10px;
  font-size: 20px;
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
