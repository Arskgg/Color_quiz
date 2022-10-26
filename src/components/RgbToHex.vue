<template>
  <div class="form">
    <div class="channel_container flex">
      <q-input
        v-model.number="data.r"
        outlined
        type="number"
        label="Red color (R)"
        maxlength="3"
      />
      <q-slider
        v-model="data.r"
        :min="0"
        :max="255"
        color="red"
        :drag-only-range="true"
      />
    </div>
    <div class="channel_container flex">
      <q-input
        v-model.number="data.g"
        outlined
        type="number"
        label="Green color (G)"
      />
      <q-slider v-model="data.g" :min="0" :max="255" color="green" />
    </div>
    <div class="channel_container flex">
      <q-input
        v-model.number="data.b"
        outlined
        type="number"
        label="Blue color (B)"
      />
      <q-slider v-model="data.b" :min="0" :max="255" color="blue" />
    </div>
    <q-input v-model="data.rgb" outlined readonly filled label="RGB " />
    <q-input
      v-model="data.hex"
      outlined
      readonly
      filled
      label="Hex"
      maxlength="7"
    />
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { rgbToHex } from "../utils/rgbToHex";
const data = reactive({
  hex: "",
  r: 0,
  g: 0,
  b: 0,
  rgb: "0, 0, 0",
});

const emit = defineEmits(["changeColor"]);

watch(data, (newValue) => {
  if (newValue.r > 255) data.r = 255;
  if (newValue.r < 0) data.r = 0;
  if (newValue.r === "") data.r = 0;

  if (newValue.g > 255) data.g = 255;
  if (newValue.g < 0) data.g = 0;
  if (newValue.g === "") data.g = 0;

  if (newValue.b > 255) data.b = 255;
  if (newValue.b < 0) data.b = 0;
  if (newValue.b === "") data.b = 0;

  data.rgb = `${data.r}, ${data.g}, ${data.b}`;
  data.hex = rgbToHex(data.r, data.g, data.b);
  emit("changeColor", data.hex);
});
</script>

<style lang="scss" scoped>
.channel_container {
  margin-bottom: 16px;
}
</style>
