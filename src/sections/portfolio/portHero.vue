<template>
  <section class="hero pt-[140px]">
    <div class="container ">
      <div class="titles flex justify-center items-center flex-col gap-3">
        <h3>Home > <span class="text-[#E47500]">Services</span></h3>
        <h1 class="max-w-[942px] text-[33px] leading-[60px]">Lorem Ipsum is simply dummy text of the printing and.</h1>
        <p class="text-[16px] leading-8 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
      </div>
      <div class="stats rounded-xl bg-light-brown py-[72px] mt-[45px]">
        <div class="sections flex items-center justify-evenly flex-wrap gap-10">
          <div class="card  flex gap-[36px] w-[250px]" v-for="item in array" :key="item">
            <img class="bg-white rounded-full p-[15px] w-14 h-14" :src="item.icon" alt="#">
            <div class="info pr-24 border-r-none lg:border-r">
              <h2 class="text-[25px] leading-[30px] font-bold">
                {{ item.number }}
              </h2>
              <p class="text-[20px] leading-7">
                {{ item.text }}
              </p>
            </div>
          </div>

          <!-- <div class="section flex flex-row gap-[36px]">
            <img class=" bg-white rounded-full p-[15px]" src="../../assets/icons/location.svg" alt="#">
            <div class="info pr-[118px] border-r">
              <h2 class="text-[25px] leading-[30px] font-bold ">30+</h2>
              <p class="text-[20px] leading-7">Clients</p>
            </div>
          </div> -->

          <!-- <div class="section flex flex-row gap-[36px]">
            <img class=" bg-white rounded-full p-[15px]" src="../../assets/icons/server.svg" alt="#">
            <div class="info">
              <h2 class="text-[25px] leading-[30px] font-bold ">50+</h2>
              <p class="text-[20px] leading-7">Clients</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import user from '../../assets/icons/user.svg'
import location from '../../assets/icons/location.svg'
import server from '../../assets/icons/server.svg'

export default {
  data() {
    return {
      array: [
        {
          icon: user,
          number: '90+',
          text: 'Clients',
        },
        {
          icon: location,
          number: '30+',
          text: 'Countries',
        },
        {
          icon: server,
          number: '50+',
          text: 'Projects',
        },
      ]
    }
  }
}
</script>

<style scoped>
.card:last-child .info {
  border-right: 0;
  padding-right: 0;
}
</style>