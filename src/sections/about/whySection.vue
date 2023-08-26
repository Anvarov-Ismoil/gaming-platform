<template>
  <section class="Why_us">
    <div class="container">
      <h1 class="mt-36 text-2xl">Why work with us</h1>
      <div class="cards flex items-center justify-center lg:justify-between flex-wrap gap-4">
        <div class="card bg-light-brown w-[378px] rounded-[20px] mt-[63px]" v-for="card in 3" :key="card">
          <button class="btn w-[140px] py-[7px] text-[#fff] bg-button rounded-lg mt-[65px] ml-[37px]">Lorem ipsum</button>
          <div class="text ml-[37px] mt-[25px] pb-[65px]">
            <h1 class="py-[20px] text-[20px]">Lorem ipsum</h1>
            <p class="text-[14px] w-[304px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>