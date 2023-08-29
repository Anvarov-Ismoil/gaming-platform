<template>
  <main>

    <portHero/>
    <portVideo/>
    <portGallery/>
    <portReview/>
    <portSearch/>

  </main>
</template>

<script >
import portHero from '../sections/portfolio/portHero.vue';
import portVideo from '../sections/portfolio/portVideo.vue';
import portGallery from '../sections/portfolio/portGallery.vue';
import portReview from '../sections/portfolio/portReview.vue';
import portSearch from '../sections/portfolio/portSearch.vue';


export default {
  components: {
    portHero,
    portVideo,
    portGallery,
    portReview,
    portSearch
},
  data() {
    return {}
  },
}
</script>