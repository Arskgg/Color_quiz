<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="absolute-center"> Color Quiz </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="link in linksList"
          :key="link.title"
          :to="link.link"
          :name="link.title"
          :icon="link.icon"
          :label="link.title"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      :breakpoint="768"
      :width="250"
    >
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const linksList = [
  {
    title: "Quiz",
    icon: "quiz",
    link: "/",
  },
  {
    title: "Converter",
    icon: "swap_vert",
    link: "/converter",
  },
  {
    title: "Picker",
    icon: "palette",
    link: "/color-picker",
  },
  // {
  //   title: "About",
  //   caption: "forum.quasar.dev",
  //   icon: "info",
  //   link: "https://forum.quasar.dev",
  // },
];
</script>

<style>
@media (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
