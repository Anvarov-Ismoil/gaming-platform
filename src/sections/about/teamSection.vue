<template>
  <section class="team">
    <div class="container">
      <h1 class="text-[28px] mt-[148px]">Our Team</h1>
      <div class="wrapper mt-[53px] flex items-center justify-center lg:justify-between gap-5 flex-wrap">
        <div
          class="card text-center w-[275px] rounded-[20px] bg-[#1C140F] py-[35px] px-[86px]"
          v-for="item in cardsArray" :key="item">
          <div class="image w-[123px] h-[123px]">
            <img :src="item.image" class="w-full h-full object-cover" alt="" />
          </div>
          <h1 class="text-[19px]">{{ item.name }}</h1>
          <p class="text-[16px]">CEO</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cardsArray: [
        {
          image: "src/assets/images/bill.png",
          name: "John Peter",
        },
        {
          image: "src/assets/images/bill.png",
          name: "John Peter",
        },
        {
          image: "src/assets/images/bill.png",
          name: "John Peter",
        },
        {
          image: "src/assets/images/bill.png",
          name: "John Peter",
        },
      ],
    };
  },
};
</script>
