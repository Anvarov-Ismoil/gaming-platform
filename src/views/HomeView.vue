<template>
  <main>

    <heroSection />
    <cardsSection />
    <bannerSection />
    <optionsSection />
    <gallerySection />

  </main>
</template>


<script >
import heroSection from '../sections/home/heroSection.vue'
import cardsSection from '../sections/home/cardsSection.vue'
import bannerSection from '../sections/home/bannerSection.vue'
import optionsSection from '../sections/optionsSection.vue'
import gallerySection from '../sections/home/gallerySection.vue'

export default {
  components: {
    heroSection,
    cardsSection,
    bannerSection,
    optionsSection,
    gallerySection
},
  data() {
    return {}
  },
}
</script>