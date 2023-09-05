<template>
  <section class="pt-[103px]">
    <div class="container">

      <div class="left max-w-[580px]" v-for="item in rightArray" :key="item">
        <img :src="item.img" alt="#" />
        <div class="name flex items-center py-5 gap-5">
          <p class="bg-[#2351F5] py-2 px-[28px] text-base leading-8">
            John smash
          </p>
          <p class="text-base leading-8">.5min</p>
        </div>

        <div class="titles">
          <h1 class="text-3xl font-semibold pb-[32px]">
            {{ item.title }}
          </h1>
          <p class="max-w-[490px] text-[17px] leading-8 pb-[32px]">
            {{ item.subtitle }}
          </p>
          <p
            class="max-w-[490px] text-[17px] leading-9 pb-[90px] border-b-[0.7px]"
          >
            {{ item.subsubtitle }}
          </p>
        </div>
      </div>

      <div class="right">
        <div class="cards">
          <div class="card flex items-center">
            <img src="../../assets/news images/news1.png" alt="#"
            class="pr-[31px]"
            />
            <div class="info">
              <div class="name flex items-center py-5 gap-5">
                <p class="bg-[#2351F5] py-2 px-[28px] text-base leading-8">
                  John smash
                </p>
                <p class="text-base leading-8">.5min</p>
              </div>
              <h1 class="max-w-[360px] text-[23px] font-semibold">Lorem Ipsum is simply dummy text dummy text ?</h1>
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
      rightArray: [
        {
          img: "src/assets/newsImages/newsGirl.png",
          title: "Lorem Ipsum is simply dummy text dummy text",
          subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,`,
          subsubtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.`
        },
        {
          img: "src/assets/newsImages/newsMain.png",
          title: "Lorem Ipsum is simply dummy text dummy text",
          subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,`,
          subsubtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.`
        }
      ]
    };
  },
};
</script>
