<template>
  <div class="container">
    <div class="wrapper flex justify-center items-center flex-wrap lg:flex-nowrap pt-[132px] gap-20">
      <div class="video bg-portfolioBg bg-no-repeat bg-center bg-cover rounded-xl flex items-center justify-center w-96 h-72 
      lg:w-[670px] lg:h-[355px] ">
        <img class="cursor-pointer" src="../../assets/icons/video.svg" alt="">
      </div>
      <div class="titles w-[383px] text-left">
        <h1 class="pb-[12px] text-[30px] leading-[54px] font-bold">Lorem Ipsum is simply dummy text.</h1>
        <p class="pb-[28px] text-[14px] leading-[26px]">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy .</p>
        <ul>

          <li class="flex gap-[10px] pb-4" v-for="item in 4" :key="item">
            <img src="../../assets/icons/greenCheck.svg" alt="#">
            <p>Lorem Ipsum is simply</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {}
  }
}
</script>