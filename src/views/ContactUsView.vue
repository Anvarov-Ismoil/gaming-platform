<template>
  <div>
   <HeroSection />
   <PreFooter />
  </div>
</template>

<script>
import HeroSection from '../sections/contact/hero.vue';
import PreFooter from '../sections/contact/preFooter.vue';

export default {
  components: {
    HeroSection,
    PreFooter,
  }
}
</script>