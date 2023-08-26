<template>
  
  <section class="Options w-full mx-auto object-cover bg-no-repeat bg-[url('src/assets/images/bg.png')]">
    <div class="Container mx-auto">
      <div class="Titles pt-[96px] flex justify-center items-center flex-col ">
        <h1 class=" w-[826px] text-[30px] leading-[56px] font-bold text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <p class="w-[820px] text-center text-[16px] leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="options">
        <div class="cards">
            <div class="card">
              <img src="" alt="">
              <h3>Mobile Game Development</h3>
              <i class="far fa-arrow-right" style="color: #dc7000;"></i>
              <i class="fab fa-gripfire"></i>
              <font-awesome-icon :icon="['far', 'arrow-right']" style="color: #dc7000;" />
              <i class="far fa-arrow-right"></i>
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

    }
  }
}
</script>
