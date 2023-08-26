<template>
  <main>

    <heroSection />
    <whySection />
    <aboutSection />
    <teamSection />
    

  </main>
</template>

<script>
import heroSection from '../sections/about/heroSection.vue';
import whySection from '../sections/about/whySection.vue';
import aboutSection from '../sections/about/aboutSection.vue';
import teamSection from '../sections/about/teamSection.vue';


export default {
    data() {
        return {};
    },
  components: {
    heroSection,
    whySection,
    aboutSection,
    teamSection,
    },
}
</script>

<style>
</style>