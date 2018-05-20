<template>
  <div class="top">
    <p>
      {{ this.user.name }} さんこんにちは
    </p>
    <p>
      あなたが、体の部位で麻痺している場所はどこですか？
    </p>
    <div id='paresis'>
      <input
        type="checkbox"
        id="one_hand"
        value="one_hand"
        v-model="checkedNames">
      <label for="one_hand">片手</label><br>
      <input
        type="checkbox"
        id="two_hand"
        value="two_hand"
        v-model="checkedNames">
      <label for="two_hand">両手</label><br>
      <input
        type="checkbox"
        id="one_leg"
        value="one_leg"
        v-model="checkedNames">
      <label for="one_leg">片足</label><br>
      <input
        type="checkbox"
        id="two_leg"
        value="two_leg"
        v-model="checkedNames">
      <label for="two_leg">両足</label><br>
      <input
        type="checkbox"
        id="half_body"
        value="half_body"
        v-model="checkedNames">
      <label for="half_body">半身</label><br>
    </div>
    <div id=''>
      <button>送信</button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.top {
  vertical-align: top;
  width: 95%;
}

</style>
