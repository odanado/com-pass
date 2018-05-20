<template>
  <div class="top">
    <p>
      {{ this.user.name }} さんこんにちは
    </p>
    <div class="cards">
      <EventCard
        class="card"
        v-for="(event, i) in this.events"
        v-touch="() => handleTransition(event)"
        :key="i"
        :title="event.title"
        :place="event.place"/>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard.vue';
// import axios from '~/plugins/axios';

export default {
  components: {
    EventCard,
  },
  data: () => ({
    user: {
      name: '名前',
    },
    events: [
      { title: 'イベント1', place: '場所' },
      { title: 'イベント2', place: '場所' },
    ],
  }),
  async asyncData() {
    // const { data } = await axios.get('/api/users');
    // return { users: data };
  },
  methods: {
    handleTransition(event) {
      console.log(event);
      this.$router.push('/event/1');
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

.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
