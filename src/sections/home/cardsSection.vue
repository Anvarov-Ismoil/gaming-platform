<template>
  <section class="trending pt-[150px]">
    <div class="container mx-auto">

      <div class="title flex justify-between items-center flex-wrap">
        <h1 class="text-[31px] mb-4 lg:mb-0">Currently Trending Games</h1>
        <button @click="cardsVisible += step" v-if="cardsVisible < cardsArray.length"
          class="btn bg-btn-color py-[10px] px-[30px] rounded-xl">
          SEE ALL
        </button>
      </div>
      <div class="wrapper flex items-center justify-center flex-wrap gap-[47px]">
        <div class="card pt-14 w-[250px]" v-for="item in visibleCards" :key="item">
          <img :src="item.image" class="w-[250px] h-[277px] rounded-3xl" alt="#">
          <p class="pt-6 text-center">
            <i class="fab fa-gripfire"></i>
            {{ item.number }} Followers
          </p>
        </div>
      </div>
    </div>
  </section>
</template> 

<script>
export default {
  data() {
    return {
      cardsVisible: 4,
      step: 4,
      cardsArray: [
        {
          image: 'src/assets/images/Home.png',
          number: '40',
        },
        {
          image: 'src/assets/images/About.png',
          number: '30',
        },
        {
          image: 'src/assets/images/Home2.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
        {
          image: 'src/assets/images/Main.png',
          number: '40',
        },
      ]
    }
  },
  computed: {
    visibleCards() {
      return this.cardsArray.slice(0, this.cardsVisible)
    }
  }
}
</script>