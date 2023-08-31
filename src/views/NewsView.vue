<template>
  <div>
    <HeroSection />
    <PreFooter />
  </div>
</template>

<script>
import HeroSection from '../sections/news/hero.vue';
import PreFooter from '../sections/news/preFooter.vue';

export default {
  components: {
    HeroSection,
    PreFooter,
  }
}
</script>