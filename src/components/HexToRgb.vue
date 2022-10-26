<template>
  <div class="form">
    <q-input v-model="data.hex" outlined label="Hex" maxlength="7" />
    <q-input v-model="data.r" readonly outlined filled label="Red color (R)" />
    <q-input
      v-model="data.g"
      readonly
      outlined
      filled
      label="Green color (G)"
    />
    <q-input v-model="data.b" readonly outlined filled label="Blue color (B)" />
    <q-input v-model="data.css" readonly outlined filled label="CSS color " />
  </div>
</template>

<script setup>
import { reactive, watch, defineEmits } from "vue";
import { hexToRgb } from "src/utils/hexToRgb";
const data = reactive({
  hex: "",
  c: "",
  g: "",
  b: "",
  a: "",
  css: "",
});

const emit = defineEmits(["changeColor"]);

watch(
  () => data.hex,
  () => {
    emit("changeColor", data.hex);
    if (!data.hex) {
      data.r = "";
      data.g = "";
      data.b = "";
      data.css = "";
      return;
    }

    const convertedColor = hexToRgb(data.hex);
    if (convertedColor) {
      data.hex = convertedColor.hex;
      data.r = convertedColor.r;
      data.g = convertedColor.g;
      data.b = convertedColor.b;
      data.css = convertedColor.css;
    }
  }
);
</script>

<style lang="scss" scoped>
.q-input:not(:last-child) {
  margin-bottom: 16px;
}
</style>
