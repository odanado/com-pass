<template>
  <div class="root">
    <p class="title">
      {{ this.event.title }}
    </p>

    <el-button
      class="registerButton">
      このイベントに参加する！
    </el-button>

    <div class="info">
      <div class="item">
        <div>
          <i class="el-icon-info">募集人数</i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from '~/plugins/axios';

export default {
  async asyncData({ params }) {
    const event = (await axios.get(`/api/event/${params.id}`)).data;
    return { event };
  },
};
</script>

<style scoped>
.root {
  width: 100%;
}
.registerButton {
  height: 100px;
  width: 100%;
  font-size: 24px;
}

.info {
  background-color: white;
  margin-top: 30px;
  border: solid 1px gray;
}
.item {
  text-align: left;
  padding-left: 10px;
}

.title {
  border-bottom: dashed 2px gray;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
}

</style>
