<template>
  <section class="hero pt-[140px]">
    <div class="container ">
      <div class="titles flex justify-center items-center flex-col gap-3">
        <h3>Home   > <span class="text-[#E47500]">Services</span></h3>
        <h1 class="max-w-[942px] text-[33px] leading-[60px]">Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p class="text-[16px] leading-8 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div class="stats max-w-[1140px] rounded-xl bg-[#1C140F] py-[72px] mt-[45px]">
        <div class="sections flex justify-evenly items-center ">
          
          <div class="section flex flex-row gap-[36px]">
            <img class=" bg-white rounded-full p-[15px]" src="../../assets/icons/user.svg" alt="#">
            <div class="info pr-[118px] border-r">
              <h2 class="text-[25px] leading-[30px] font-bold ">90+</h2>
              <p class="text-[20px] leading-7">Clients</p>
            </div>
          </div>

          <div class="section flex flex-row gap-[36px]">
            <img class=" bg-white rounded-full p-[15px]" src="../../assets/icons/location.svg" alt="#">
            <div class="info pr-[118px] border-r">
              <h2 class="text-[25px] leading-[30px] font-bold ">30+</h2>
              <p class="text-[20px] leading-7">Clients</p>
            </div>
          </div>

          <div class="section flex flex-row gap-[36px]">
            <img class=" bg-white rounded-full p-[15px]" src="../../assets/icons/server.svg" alt="#">
            <div class="info">
              <h2 class="text-[25px] leading-[30px] font-bold ">50+</h2>
              <p class="text-[20px] leading-7">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
 export default {
  data() {
    return {

    }
  }
 }
</script>