<template>
    <div class="trending pt-[150px]">
      <div class="title gap-[500px] flex justify-around items-center">
        <h1 class="text-[31px]">Currently Trending Games</h1>
        <button class="btn bg-btn-color py-[10px] px-[30px] rounded-xl">SEE ALL</button>
      </div>
      <div class="cards flex justify-center flex-row gap-[47px]">
        <div class="image-block pt-14 w-[250px]">
          <img src="../../assets/images/Home.png" class="w-[250px] h-[277px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
        <div class="image-block pt-14 w-[250px]">
          <img src="../../assets/images/Home1.png" class="w-[250px] h-[277px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
        <div class="image-block pt-14 w-[250px]">
          <img src="../../assets/images/Home2.png" class="w-[250px] h-[277px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
        <div class="image-block pt-14 w-[250px]">
          <img src="@/assets/images/Main.png" class="w-[250px] h-[277px] rounded-[20px]" alt="#">
          <p class="pt-6 text-center"><i class="fab fa-gripfire"></i> 40 Followers</p>
        </div>
      </div>
    </div>
</template> 

<script>
export default {
  data() {
    return {

    }
  }
}
</script>