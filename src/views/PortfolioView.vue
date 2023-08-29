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
import portGallery from '../sections/portfolio/portGallery.vue';
import portHero from '../sections/portfolio/portHero.vue';
import portReview from '../sections/portfolio/portReview.vue';
import portSearch from '../sections/portfolio/portSearch.vue';
import portVideo from '../sections/portfolio/portVideo.vue';


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