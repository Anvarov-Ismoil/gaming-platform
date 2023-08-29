<template>
  <div class="review bg-[#1C140F]">
    <div class="container">
      <div class="wrapper flex justify-center items-center flex-col">
        <div class="titles pb-[70px] pt-[88px]">
          <h1 class="max-w-[440px] mx-auto text-center text-[35px] leading-[50px] font-medium pb-[20px]">Trusted by
            Thousands of Happy Customer</h1>
          <p class="max-w-[500px] text-center text-[14px] leading-6">Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy .</p>
        </div>
        <!-- :pagination="{
        }"  -->
        <div class="cards flex items-center justify-center">
          <swiper :slidesPerView="'auto'" :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }" loop="true" :pagination="{
  dynamicBullets: true,
}" :modules="modules" class="mySwiper lg:max-w-[1200px] bg-red-500">
            // clickable: true,
            <swiper-slide v-for="item in cardsArray" :key="item">
              <div
                class="card max-w-[400px] p-[30px] bg-light-brown rounded-xl border-2 border-[#DC7000] flex justify-center items-start flex-col">
                <div class="icon flex flex-row gap-[20px] pb-[20px]">
                  <img :src="item.image" alt="#">
                  <div class="info pr-[60px]">
                    <p class="max-w-[340px] text-[18px] font-medium">{{ item.name }}</p>
                    <p class="text-[14px] text-[#4F5665]">{{ item.location }}</p>
                  </div>
                  <div class="rating flex items-center">
                    <p>4.5</p>
                    <img src="../../assets/icons/star.svg" alt="#">
                  </div>
                </div>
                <div class="text">
                  <p class="text-[14px] leading-[26px]">{{ item.review }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="buttons"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default {
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      cardsArray: [
        {
          image: "src/assets/icons/robert.svg",
          name: "Viezh Robert",
          location: "Warsaw, Poland",
          review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
          image: "src/assets/icons/jessica.svg",
          name: "Yessica Christy",
          location: "Shanxi, China",
          review: "Lorem Ipsum is simply dummy text of the printing and "
        },
        {
          image: "src/assets/icons/kimjong.svg",
          name: "Kim Young Jou",
          location: "Seoul, Korea",
          review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>