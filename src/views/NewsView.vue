<template>
  <div>
    <HeroSection />
    <newsSection />
    <PreFooter />
  </div>
</template>

<script>
import HeroSection from '../sections/news/hero.vue';
import newsSection from '../sections/news/gallery.vue';
import PreFooter from '../sections/news/preFooter.vue';

export default {
  components: {
    HeroSection,
    PreFooter,
    newsSection
  }
}
</script>