<template>
  <q-page class="row justify-center content-center wrap" padding>
    <div class="col-xs-12 col-sm-6 row justify-center">
      <div class="card row rounded-borders q-pa-md shadow-7">
        <q-icon
          @click="changeConverter"
          name="swap_vert"
          size="lg"
          class="col-xs-2 col-lg-1 cursor-pointer justify-start"
        />
        <HexToRgb
          class="col-xs-10 col-lg-11 content-center column justify-center"
          v-if="!data.switchedConverter"
          @changeColor="setColor"
        />
        <RgbToHex class="col-xs-10 col-lg-11" v-else @changeColor="setColor" />
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 row justify-center">
      <div
        class="color-box rounded-borders shadow-7"
        :style="data.selectedColor && { backgroundColor: data.selectedColor }"
      ></div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";
import HexToRgb from "components/HexToRgb.vue";
import RgbToHex from "components/RgbToHex.vue";

const data = reactive({
  selectedColor: "",
  switchedConverter: false,
});

const setColor = (color) => {
  data.selectedColor = color;
};

const changeConverter = () => {
  data.switchedConverter = !data.switchedConverter;
  data.selectedColor = "";
};
</script>

<style lang="scss" scoped>
.color-box {
  width: 50%;
  height: 100%;
}

.card {
  width: 50%;
  height: 450px;
}

@media (max-width: 1400px) {
  .color-box {
    width: 90%;
  }
  .card {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .color-box {
    width: 100%;
    height: 200px;
  }
  .card {
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
