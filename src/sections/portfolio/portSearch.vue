<template>
  <section class="pt-[100px]">
    <div class="container ">
      <div class="titles">
        <h1 class="text-[30px] leading-[57px] font-semibold">Lorem ispum</h1>
        <p class="max-w-[531px] text-[16px] leading-[30px] font-normal pb-[74px]">Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.</p>
      </div>

      <div class="search w-full flex justify-start md:justify-center items-center flex-wrap gap-[50px] rounded-2xl bg-[#1C140F] py-10 px-12">
        <div class="subtitles flex flex-col">
          <h1 class="text-[30px] font-medium">Stay in the loop</h1>
          <p class="max-w-[520px] text-[17px] font-normal">Subscribe to receive the latest news and updates about
            TDA. We promise not to spam you! </p>
        </div>

        <form class="w-[386px] flex justify-between items-center bg-white rounded-lg px-2 gap-2">
          <input class="py-[14px] outline-none text-black w-full" 
          placeholder="Enter email address" type="text" />
          <button class="px-5 py-2 bg-[#DC7000] rounded-lg">Continue</button>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>