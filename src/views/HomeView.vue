<template>
  <main>

    <heroSection />
    <cardsSection />
    
    <!-- <div class="image pt-16">
      <h1 class="text-4xl leading-[65px] w-[826px] text-center pt-[130px] mx-[310px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </h1>
      <div class="bio ml-[175px]">
        <h1 class="title text-[30px] pb-[32px]">Lorem Ipsum</h1>
        <p class="text-[16px] leading-7 w-[545px] pb-[46px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="image-block flex justify-center items-center">
        <img src="../image/Home3.png" class="w-[1146px] h-[462px] bg-cover bg-no-repeat" alt="">
      </div>
    </div> -->

  </main>
</template>


<script >
import heroSection from '../sections/home/heroSection.vue'
import cardsSection from '../sections/home/cardsSection.vue'

export default {
  components: {
    heroSection,
    cardsSection
  },
  data() {
    return {}
  },
}
</script>