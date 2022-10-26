<template>
  <q-page class="column justify-center content-center" padding>
    <div class="text-center message">
      {{ data.message }}
    </div>

    <div class="score__container row justify-center">
      <h3>{{ data.score }}</h3>
    </div>

    <div
      class="color-box rounded-borders shadow-7"
      :style="{ backgroundColor: `${data.mainColor}` }"
    ></div>

    <div class="btns row justify-between q-pt-xl">
      <q-btn
        @click="newColor"
        :label="data.mainColor"
        :style="{ order: data.order }"
        :ripple="false"
        size="lg"
      />
      <q-btn
        @click="newColor"
        :label="data.randomColor1"
        :ripple="false"
        style="order: 2"
        size="lg"
      />
      <q-btn
        @click="newColor"
        :label="data.randomColor2"
        :ripple="false"
        style="order: 1"
        size="lg"
      />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { randomColor } from "src/utils/randomHex";
import { getRandomInt } from "src/utils/randomNumber";
const data = reactive({
  mainColor: "",
  randomColor1: "",
  randomColor2: "",
  order: 1,
  score: 0,
  message: "Сhoose the correct option",
});

const newColor = (e) => {
  if (e.target.outerText === data.mainColor.toUpperCase()) {
    console.log("WIN");
    data.mainColor = randomColor();
    data.randomColor1 = randomColor();
    data.randomColor2 = randomColor();
    data.order = getRandomInt(3);
    data.score = ++data.score;
    data.message = "Correct! 😊";
  } else {
    data.score = 0;
    data.message = "Wrong! 😢 \nTry again";
  }
};

onMounted(() => {
  data.mainColor = randomColor();
  data.randomColor1 = randomColor();
  data.randomColor2 = randomColor();
  data.order = getRandomInt(3);
});
</script>

<style lang="scss" scoped>
.message {
  font-size: 40px;
}
.color-box {
  height: 500px;
  width: 50%;
}

.btns {
  gap: 10px;
}

@media (max-width: 768px) {
  .color-box {
    height: 200px;
    width: auto;
  }

  .message {
    font-size: 25px;
  }
}
</style>
