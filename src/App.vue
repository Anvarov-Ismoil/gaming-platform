<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import TheHeader from './layouts/TheHeader.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    TheHeader
  }
}
</script>