<template>
  <section class="team">
    <div class="container">
      <h1 class="text-[28px] mt-[148px]">Our Team</h1>
      <div
        class="wrapper mt-[53px] flex justify-center items-center gap-[28px]"
      >
        <div
          class="card flex flex-col justify-center items-center w-[295px] rounded-[20px] bg-[#1C140F] py-[35px] px-[86px]"
          v-for="item in cardsArray"
          :key="item"
        >
          <img :src="item.image" class="w-[123px] h-[123px]" alt="" />
          <h1 class="text-[19px]">{{ item.name }}</h1>
          <p class="text-[16px]">COO</p>
        </div>
      </div>
      <div class="text pt-40">
        <h1 class="text-3xl">Lorem Ipsum</h1>
        <p class="text-base pt-8 w-[545px] leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div
        class="sub flex items-center justify-around bg-[#1C140F] rounded-2xl mt-20"
      >
        <div class="text my-10">
          <h1 class="text-3xl">Stay in the loop</h1>
          <p class="text-lg pt-2">
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!
          </p>
        </div>
        <form
          class="w-[386px] flex justify-evenly items-center bg-white rounded-lg"
        >
          <input
            class="py-[14px]"
            placeholder="Enter email address"
            type="text"
          />
          <button class="w-[105px] h-[37px] bg-[#DC7000] rounded-lg">
            Continue
          </button>
        </form>
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
