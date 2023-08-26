<template>
  <section class="options flex justify-center items-center w-full bg-optionsBg bg-no-repeat bg-cover bg-center py-[90px]">
    <div class="container mx-auto">
      <div class="titles flex justify-center items-center flex-col">
        <h1 class="max-w-[826px] text-[30px] leading-[56px] font-bold text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h1>
        <p class="max-w-[820px] text-center text-[16px] leading-8 pt-[25px]">Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="cards flex justify-center items-center flex-wrap gap-16 pt-[100px]">
        <div class="card text-center w-[220px]" v-for="card in cardsArray" :key="card">
          <div class="block mx-auto w-[65px] h-[65px] bg-white rounded-full p-[17px]">
            <img class="w-full h-full" :src="card.image" alt="#">
          </div>
          <h3 class="py-6">{{ card.text }}</h3>
          <i :class="card.icon"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import phone from '@/assets/icons/phone.svg'
import pc from '@/assets/icons/pc.svg'
import ps4 from '@/assets/icons/ps4.svg'
import vr from '@/assets/icons/vr.svg'
import ar from '@/assets/icons/ar.svg'
import theD from '@/assets/icons/3D.svg'

export default {
  data() {
    return {
      cardsArray: [
        {
          image: phone,
          text: 'Mobile Game Development',
          icon: 'fas fa-arrow-right text-brand-orange',
        },
        {
          image: pc,
          text: 'PC Game Development',
          icon: 'fas fa-arrow-right text-brand-orange',
        },
        {
          image: ps4,
          text: 'PS4 Game Development',
          icon: 'fas fa-arrow-right text-brand-orange',
        },
        {
          image: vr,
          text: 'AR/VR Solutions',
          icon: 'fas fa-arrow-right text-brand-orange',
        },
        {
          image: ar,
          text: 'AR/VR design',
          icon: 'fas fa-arrow-right text-brand-orange',
        },
        {
          image: theD,
          text: '3D Modelings',
          icon: 'fas fa-arrow-right text-brand-orange',
        },
      ]
    }
  }
}
</script>
