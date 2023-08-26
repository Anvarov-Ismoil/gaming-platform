<template>
  <main>

    <heroSection />
    <whySection />
    <aboutSection />
    <teamSection />
    <PreFooter />

  </main>
</template>

<script>
import heroSection from '../sections/about/heroSection.vue';
import whySection from '../sections/about/whySection.vue';
import aboutSection from '../sections/about/aboutSection.vue';
import teamSection from '../sections/about/teamSection.vue';
import PreFooter from '../sections/about/preFooter.vue';


export default {
  data() {
    return {};
  },
  components: {
    heroSection,
    whySection,
    aboutSection,
    teamSection,
    PreFooter
  },
}
</script>

<style></style>