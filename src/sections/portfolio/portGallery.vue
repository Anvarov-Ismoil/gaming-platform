<template>
  <div class="container">
    <div class="wrapper lg:pt-[182px]">
      <div
        class="card flex justify-center items-center flex-wrap lg:flex-nowrap gap-14 lg:gap-[166px] pb-20 lg:pb-[190px]"
        v-for="item in cardsArray" :key="item">
        <div class="titles w-[536px] text-right flex justify-end items-end flex-col">
          <h1 class="text-[30px] font-medium pb-[43px]">{{ item.title }}</h1>
          <p class="text-[17px] font-normal pb-4">{{ item.subtitle }}</p>
          <p class="text-[17px] pb-[46px]">{{ item.subsubtitle }}</p>
          <button class="max-w-[177px] bg-brand-orange px-8 py-3 rounded-[6px] ">
            Read more
          </button>
        </div>
        <img class="" :src="item.image" alt="#">
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      cardsArray: [
        {
          title: "Lorem Ipsum is simply dummy text dummy text",
          subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          subsubtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image: "src/assets/images/galleryCyber.png"
        },
        {
          image: "src/assets/images/galleryGirl.png",
          title: "Lorem Ipsum is simply dummy text dummy text",
          subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          subsubtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
          title: "Lorem Ipsum is simply dummy text dummy text",
          subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          subsubtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image: "src/assets/images/galleryShooter.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card:first-child .titles {
  order: 1;
}

.card:nth-child(2) .titles {
  order: 1;
  text-align: left;
  align-items: start;
}

.card:last-child .titles {
  order: 1;
}

.card:last-child {
  padding-bottom: 0;
}

@media(min-width: 1025px) {

  .card:first-child .titles,
  .card:last-child .titles {
    order: 0;
  }
}
</style>