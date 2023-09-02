<template>
  <div>
   <HeroSection />
   <FormSection />
   <PreFooter />
  </div>
</template>

<script>
import HeroSection from '../sections/contact/hero.vue';
import FormSection from '../sections/contact/form.vue';
import PreFooter from '../sections/contact/preFooter.vue';

export default {
  components: {
    HeroSection,
    PreFooter,
    FormSection
  }
}
</script>