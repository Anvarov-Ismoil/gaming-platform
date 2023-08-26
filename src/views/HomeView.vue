<template>
  <main>

    <heroSection />
    <cardsSection />
    <bannerSection />
    <optionsSection />

  </main>
</template>


<script >
import heroSection from '../sections/home/heroSection.vue'
import cardsSection from '../sections/home/cardsSection.vue'
import bannerSection from '../sections/home/bannerSection.vue'
import optionsSection from '../sections/optionsSection.vue'

export default {
  components: {
    heroSection,
    cardsSection,
    bannerSection,
    optionsSection
},
  data() {
    return {}
  },
}
</script>