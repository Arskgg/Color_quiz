<template>
  <q-page
    class="row content-center"
    :style="{
      'background-color': data.color,
    }"
  >
    <div class="col-12 q-pa-md">
      <q-color v-model="data.color" class="my-picker" />
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  color: "",
});
</script>

<style lang="scss" scoped>
.my-picker {
  margin: auto;
  padding: 10px;
  max-width: 700px;
}
</style>
