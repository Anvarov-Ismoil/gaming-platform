<template>
  <main class="h-[200vh]">

    <heroSection />

    <!-- <div class="trending pt-32">
      <div class="title gap-[500px] flex justify-around items-center">
        <h1 class="text-[31px]">Currently Trending Games</h1>
        <button class="btn bg-btn-color py-[10px] px-[30px] rounded-xl">SEE ALL</button>
      </div>
      <div class="cards flex justify-center flex-row gap-[47px]">
        <div class="image-block pt-14 w-[250px]">
          <img src="../image/Home.png" class="w-[250px] h-[277px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
        <div class="image-block pt-14 w-[250px]">
          <img src="../image/Home1.png" class="w-[250px] h-[277px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
        <div class="image-block pt-14 w-[250px]">
          <img src="../image/Home2.png" class="w-[250px] h-[277px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
        <div class="image-block pt-14 w-[250px]">
          <img src="../image/Main.png" class="w-[250px] h-[277px] rounded-[20px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
      </div>
    </div> -->

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

export default {
  components: {
    heroSection
  },
  data() {
    return {}
  },
}
</script>