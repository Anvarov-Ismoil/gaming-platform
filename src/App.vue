<template>
  <TheHeader />
  <RouterView />
  <TheFooter/>
</template>

<script>
import TheFooter from "./layouts/TheFooter.vue";
import TheHeader from "./layouts/TheHeader.vue";
import { RouterView } from "vue-router";
export default {
  components: {
    TheHeader,
    TheFooter
},
};
</script>
