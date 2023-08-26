<template>
  <main>

    <heroSection />
    <cardsSection />
    <bannerSection />
    <optionsSection />
    <gallerySection />
    <preFooter />

  </main>
</template>


<script >
import heroSection from '../sections/home/heroSection.vue'
import cardsSection from '../sections/home/cardsSection.vue'
import bannerSection from '../sections/home/bannerSection.vue'
import optionsSection from '../sections/home/optionsSection.vue'
import gallerySection from '../sections/home/gallerySection.vue'
import preFooter from '../sections/home/preFooter.vue'

export default {
  components: {
    heroSection,
    cardsSection,
    bannerSection,
    optionsSection,
    gallerySection,
    preFooter
},
  data() {
    return {}
  },
}
</script>