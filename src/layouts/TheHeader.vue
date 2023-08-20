<template>
  <header>
    <div class="container flex justify-between items-center">
      <div class="logo w-[60px] h-[60px]">
        <img src="https://cdn-icons-png.flaticon.com/512/8305/8305602.png" alt="">
      </div>
      <ul class="menu hidden items-center gap-[36px] lg:flex">
        <li class="flex items-center gap-[88px]">
          <router-link v-for="link in menuArray" :key="link" :to="link.route">
            {{ link.name }}
            <div class="line">
              <div class="w-8 h-1 bg-brand-orange rounded-full"></div>
              <div class="w-1 h-1 bg-brand-orange rounded-full"></div>
            </div>
          </router-link>
        </li>
        <button class="btn bg-brand-orange px-8 py-3 rounded-[6px]">
          Contact Us
        </button>
      </ul>

      <button class="burger text-2xl block lg:hidden">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuArray: [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'About Us',
          route: '/about'
        },
        {
          name: 'Portfolio',
          route: '/'
        },
        {
          name: 'News',
          route: '/'
        },
      ]
    }
  },
}
</script>

<style scoped>
.router-link-exact-active .line {
  display: flex;
  gap: 5px;
  position: relative;
}

.line {
  display: none;
  position: absolute;
  top: 10px;
  /* left: 40%; */
  right: 20%;
}
</style>