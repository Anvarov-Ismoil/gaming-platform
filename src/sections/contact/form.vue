<template>
  <div class="form pt-[54px] mt-[90px] lg:mt-[150px] w-full bg-cover bg-FormBg">
    <div class="container">
      <div class="titles flex items-center justify-center flex-col">
        <h1 class="text-[30px] leading-[57px]">Say hello</h1>
        <p class="text-[13px] leading-[25px]">Lorem Ipsum is simply dummy text of the printing .</p>
      </div>
      <div class="inform max-w-[670px] m-auto pt-[80px]">

          <div class="name pb-[20px] flex items-center justify-between flex-wrap gap-[30px]">
            <div class="fname text-input-p">
              <p>First name</p>
            <input type="text" class="sm:w-[320px] h-[56px] rounded-[9px] bg-input-color border-[0.6px] border-[#CECECE]">
            </div>

            <div class="lname text-input-p">
              <p>Last name</p>
            <input type="text" class="sm:w-[320px] w-full h-[56px] rounded-[9px] bg-input-color border-[0.6px] border-[#CECECE]">
            </div>
          </div>

        <div class="info pb-[20px]">
          <div class="email text-input-p">
              <p>Email Address</p>
            <input type="text" class="md:w-[670px] w-full h-[56px] rounded-[9px] bg-input-color border-[0.6px] border-[#CECECE]">
            </div>
        </div>

        <div class="message">
          <div class="sms text-input-p">
              <p>Message</p>
            <input type="text" class="md:w-[670px] w-full h-[232px] rounded-[9px] bg-input-color border-[0.6px] border-[#CECECE]">
            </div>
        </div>
        <div class="bttn flex items-center md:justify-end justify-center">
        <button class="btn my-[50px] bg-brand-orange px-[47px] py-3 rounded-[10px]">Get in Touch</button>
        </div>
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