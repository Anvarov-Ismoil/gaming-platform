<template>
  <main>
    <div class="hero flex flex-row justify-between">
      <div class="titles w-[527px] flex flex-col pt-[210px] pl-[211px] ">
        <h3 class="text-xl text-[#E87D0E]">3D game Dev</h3>
        <h1 class="text-[50px] w-[480px] leading-[77px] font-bold">Work that we produce for our clients</h1>
        <p class="text-[16px] pt-[26px] pb-[50px] w-[530px] h-[100px] leading-8">Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <button class="w-[195px] h-[53px] bg-[#FA8305] rounded-[40px] text-[16px] px-[31px] py-[14px] mt-[57px]">Get more
          details</button>
      </div>
      <img src="@/assets/images/Main.png" alt="#" class="img pr-[25px] w-[739px] h-[656px] pt-[126px]">

    </div>

    <div class="container">
      <h1 class="mt-[145px] text-[25px]">Why work with us</h1>
      <div class="cards flex justify-center items-center gap-[45px]">
        <div class="card bg-[#1C140F] w-[378px] rounded-[20px] mt-[63px]">
          <button class="btn w-[140px] py-[7px] text-[#fff] bg-button rounded-lg mt-[65px] ml-[37px]">Lorem ipsum</button>
          <div class="text ml-[37px] mt-[25px] pb-[65px]">
            <h1 class="py-[20px] text-[20px]">Lorem ipsum</h1>
            <p class="text-[14px] w-[304px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
        <div class="card bg-[#1C140F] w-[378px] rounded-[20px] mt-[63px]">
          <button class="btn w-[140px] py-[7px] text-[#fff] bg-button rounded-lg mt-[65px] ml-[37px]">Lorem ipsum</button>
          <div class="text ml-[37px] mt-[25px] pb-[65px]">
            <h1 class="py-[20px] text-[20px]">Lorem ipsum</h1>
            <p class="text-[14px] w-[304px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
        <div class="card bg-[#1C140F] w-[378px] rounded-[20px] mt-[63px]">
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

    <div class="about bg-[#1C140F] mt-[150px] flex justify-center items-center gap-[95px]">
      <div class="left pt-[250px]">
        <img src="src/assets/images/About us.png" class="" alt="">
      </div>
      <div class="right flex flex-col items-start gap-[15px] pt-[150px]">
        <p class="text-[16px]">Lorem ipsum</p>
        <h1 class="text-[28px] w-[531px] leading-[44px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
        <p class="w-[536px] text-[16px] leading-[32px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </div>
    </div>

    <div class="container">
      <section class="team">
        <h1 class="text-[28px] mt-[148px]">Our Team</h1>
        <div class="cards mt-[53px] flex justify-center items-center gap-[28px]">
          <div class="card flex flex-col justify-center items-center w-[295px] rounded-[20px] bg-[#1C140F] py-[35px] px-[86px]">
            <img src="src/assets/images/bill.png" class="w-[123px] h-[123px]" alt="">
            <h1 class="text-[19px]">John peter</h1>
            <p class="text-[16px]">COO</p>
          </div>
          <div class="card flex flex-col justify-center items-center w-[295px] rounded-[20px] bg-[#1C140F] py-[35px] px-[86px]">
            <img src="src/assets/images/bill.png" class="w-[123px] h-[123px]" alt="">
            <h1 class="text-[19px]">John peter</h1>
            <p class="text-[16px]">COO</p>
          </div>
          <div class="card flex flex-col justify-center items-center w-[295px] rounded-[20px] bg-[#1C140F] py-[35px] px-[86px]">
            <img src="src/assets/images/bill.png" class="w-[123px] h-[123px]" alt="">
            <h1 class="text-[19px]">John peter</h1>
            <p class="text-[16px]">COO</p>
          </div>
          <div class="card flex flex-col justify-center items-center w-[295px] rounded-[20px] bg-[#1C140F] py-[35px] px-[86px]">
            <img src="src/assets/images/bill.png" class="w-[123px] h-[123px]" alt="">
            <h1 class="text-[19px]">John peter</h1>
            <p class="text-[16px]">COO</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<!-- <div class="hero flex flex-row justify-between">
  <div class="titles w-[527px] flex flex-col pt-[210px] pl-[211px] ">
    <h3 class="text-xl text-[#E87D0E]">Home > About us</h3>
    <h1 class="text-[50px] w-[480px] leading-[77px] font-bold">Work that we produce for our clients</h1>
    <p class="text-[16px] pt-[26px] pb-[50px] w-[530px] h-[100px] leading-8">Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
    <button class="w-[195px] h-[53px] bg-[#FA8305] rounded-[40px] text-[16px] mt-[57px] px-[31px] py-[14px]">Get more
      details</button>
  </div>
  <img src="../image/Main.png" alt="#" class="img pr-[25px] w-[739px] h-[656px] pt-[126px]">
  <div class="cards pt-[145px]">
    <h1 pb-[63px]>Why work with us</h1>
    <div class="card bg-[#1C140F]">
      <button class="btn w-[140px] py-[7px]">Lorem ipsum</button>
      <h1 class="py-[20px]">Lorem ipsum</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,</p>
    </div>
  </div>
</div> -->