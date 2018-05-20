<template>
  <div class="top">
    <p>
      {{ this.user.name }} さんこんにちは
    </p>
    <div class="cards">
      <EventCard
        class="card"
        title="タイトル"
        place="場所"/>
      <EventCard
        class="card"
        title="タイトル"
        place="場所"/>
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
    event: [
      { name: 'イベント1' },
      { name: 'イベント2' },
    ],
  }),
  async asyncData() {
    // const { data } = await axios.get('/api/users');
    // return { users: data };
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
