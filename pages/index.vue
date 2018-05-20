<template>
  <div class="top">
    <span class="title">
      興味のあるイベントを選びましょう！
    </span>
    <div class="cards">
      <EventCard
        class="card"
        v-for="(event, i) in this.events"
        v-touch="() => handleTransition(i)"
        :key="i"
        :event="event"/>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard.vue';
import axios from '~/plugins/axios';

export default {
  components: {
    EventCard,
  },
  data: () => ({
  }),
  async asyncData() {
    const user = (await axios.get('/api/user/0')).data;
    const events = (await axios.get('/api/events')).data;
    return { user, events };
  },
  methods: {
    handleTransition(i) {
      this.$router.push(`/event/${i}`);
    },
  },
};
</script>

<style scoped>
.top {
  vertical-align: top;
  width: 95%;
}
.cards {
  margin-top: 30px;
}

.card {
  margin-top: 20px;
}


.title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 30px;
}
</style>
