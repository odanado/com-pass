<template>
  <div class="root">
    <p class="title">
      {{ this.event.title }}
    </p>

    <el-button
      type="success"
      class="registerButton">
      このイベントに参加する！
    </el-button>

    <EventCardDetail :event="event"/>
  </div>
</template>


<script>
import EventCardDetail from '~/components/EventCardDetail.vue';
import axios from '~/plugins/axios';

export default {
  components: {
    EventCardDetail,
  },
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
  font-weight: bold;
  margin-bottom: 30px;
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

.box-card {
  width: 100%;
  text-align: left;
}

</style>
