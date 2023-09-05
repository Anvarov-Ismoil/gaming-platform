<template>
  <section class="pt-[103px]">
    <div class="container">
      <div class="wrapper flex items-start gap-[72px]">

      <div class="left flex flex-col max-w-[580px] border-b-[0.7px]" >
        <div class="card" v-for="item in rightArray" :key="item">

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
            class="max-w-[490px] text-[17px] leading-9 pb-[90px]"
            >
            {{ item.subsubtitle }}
          </p>
        </div>
      </div>
    </div>
      
      <div class="right pt-[90px]">
        <div class="cards flex items-center justify-center flex-col gap-[70px]">
          <div class="card flex items-center"  v-for="item in leftArray" :key="item">
            <div class="img-block w-[195px] h-[183px]">
            <img :src="item.img" alt="#"
            class="pr-[31px]"
            />
          </div>
            <div class="info h-[183px]">
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
      ],
      leftArray: [
        {
          img: "src/assets/newsImages/news1.png"
        },
        {
          img: "src/assets/newsImages/news2.png"
        },
        {
          img: "src/assets/newsImages/news3.png"
        },
        {
          img: "src/assets/newsImages/news4.png"
        },
        {
          img: "src/assets/newsImages/news5.png"
        },
        {
          img: "src/assets/newsImages/news6.png"
        },
        {
          img: "src/assets/newsImages/news7.png"
        }
      ]
    };
  },
};
</script>

<style scoped>
.left:nth-last-child(2){
  padding-top: 90px;
  border: none;
}
</style>
