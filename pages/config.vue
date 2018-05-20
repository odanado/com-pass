<template>
  <div class="top">
    <span class="title">
      あなたが体の部位で麻痺している場所はどこですか？
    </span>
    <el-select
      class="selectParesis"
      v-model="paresis"
      placeholder="麻痺の部位">
      <el-option
        v-for="item in paresisList"
        size="large"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>

    <el-select
      class="selectSupport"
      v-model="support"
      placeholder="麻痺の部位">
      <el-option
        v-for="item in supportList"
        size="large"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>


    <el-button
      @click="show"
      type="success"
      class="registerButton">
      イベント一覧を表示する
    </el-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    paresisList: [
      {
        label: '片手',
        value: 'one_hand',
      }, {
        label: '両手',
        value: 'two_hand',
      }, {
        label: '片足',
        value: 'one_leg',
      }, {
        label: '両足',
        value: 'two_leg',
      }, {
        label: '半身',
        value: 'half_body',
      },
    ],
    supportList: [
      {
        label: '要支援認定1',
        value: '1',
      },
      {
        label: '要支援認定2',
        value: '2',
      },
    ],
    paresis: '',
    support: '',
  }),
  methods: {
    show() {
      this.$router.push('/');
    },
  },
};
</script>


<style scoped>
.el-select {
  margin-top: 30px;
  margin-bottom: 5px;
  height: 60px;
}

.top {
  vertical-align: top;
  width: 95%;
  /* とりあえず */
  height: 1000px;
}

.title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 30px;
}

.registerButton {
  height: 100px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}


</style>
