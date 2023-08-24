<template>
  <main>

    <heroSection />
    <cardsSection />
    <bannerSection />

  </main>
</template>


<script >
import heroSection from '../sections/home/heroSection.vue'
import cardsSection from '../sections/home/cardsSection.vue'
import bannerSection from '../sections/home/bannerSection.vue'

export default {
  components: {
    heroSection,
    cardsSection,
    bannerSection
    },
  data() {
    return {}
  },
}
</script>