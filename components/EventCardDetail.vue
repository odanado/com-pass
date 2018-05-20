<template>
  <el-card class="box-card">
    <el-row
      v-for="(event, i) in convertedEvent"
      :key="i">
      <el-col :span="12"><div class="grid-content key"/>
        <i class="el-icon-info" /> {{ event.key }}
      </el-col>
      <el-col :span="12"><div class="grid-content value"/>
        {{ event.value }}
      </el-col>
    </el-row>
  </el-card>
</template>

<script>

import * as util from '~/lib/util';

export default {
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    convertedEvent() {
      return [
        {
          key: '日時',
          value: this.event.date,
        },
        {
          key: '場所',
          value: this.event.place,
        },
        {
          key: '人数',
          value: this.event.number,
        },
        {
          key: '必要なレベル',
          value: util.getSupport(this.event.level.support),
        },
        {
          key: '必要なレベル',
          value: util.getParesis(this.event.level.paresis),
        },
        {
          key: 'イベントの種類',
          value: util.getType(this.event.type),
        },
      ];
    },
  },
};
</script>

<style scoped>
.el-icon-info {
  padding-right: 5px;
}
.el-row {
  border-bottom: dashed 2px gray;
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>
