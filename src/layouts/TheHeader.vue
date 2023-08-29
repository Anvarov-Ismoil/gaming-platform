<template>
  <header class="fixed w-full top-0 transition-all" :class="{ 'scroll': is_navbar_active }">
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

      <button class="burger text-2xl block lg:hidden relative z-[100]" @click="openMenu">
        <i class="fas fa-bars text-2xl" v-if="!isOpen"></i>
        <i class="fas fa-times text-2xl text-white" v-if="isOpen"></i>
      </button>
    </div>

    <!-- menu -->
    <div v-if="isMenuOpened" :class="{ active: isOpen }" class="mobile-menu w-full h-full fixed left-0">
      <ul class="menu flex flex-col items-center gap-[36px] lg:hidden pt-16">
        <li class="flex flex-col items-center gap-[88px]">
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
      ],
      is_navbar_active: false,
      isMenuOpened: false,
      isOpen: false,
    }
  },
  methods: {
    openMenu() {
      if (this.isMenuOpened == false) {
        this.isMenuOpened = true
        this.isOpen = true
      } else {
        this.isMenuOpened = false
        this.isOpen = false
      }
    },
    closeMenu() {},
    checkScreenWidth() {
      const winWidth = window.innerWidth

      if (winWidth < 1300) {
        this.isMenuOpened = false
        // return
      } else {
        this.isMenuOpened = true
      }
    },
  },
  mounted() {
    const winWidth = window.innerWidth

    window.addEventListener("scroll", () => {
      window.pageYOffset > 0
        ? (this.is_navbar_active = true)
        : (this.is_navbar_active = false);
      if (winWidth < 800 || this.is_navbar_active == true) {
        this.isMenuOpened = false
        this.isOpen = false
      }
    }),
      window.addEventListener('resize', this.checkScreenWidth)
    this.checkScreenWidth()
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

.scroll {
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 9999;
  margin-top: 0 !important;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  border-bottom: none;
  /* padding: 5px 36px; */
}

.mobile-menu {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
}

.mobile-menu {
  transition: 0.3s;
  /* background: rgba(30, 30, 30, 0.8); */
}

.mobile-menu.active {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  height: 100vh;
}
</style>