<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<template>
  <!-- NAVBAR -->
  <nav
    class="max-w-7xl mx-auto px-4 2xl:px-0 flex items-center justify-between py-4 relative z-50"
  >
    <!-- Logo -->
    <div>
      <img src="/svg/logo.svg" alt="Logo" class="h-10" />
    </div>

    <!-- Desktop Menu -->
    <div
      class="hidden md:flex uppercase font-bold items-center gap-6"
    >
      <a href="#home" class="hover:text-[#EEAA36]">Home</a>
      <a href="#about" class="hover:text-[#EEAA36]">About Us</a>
      <a href="#games" class="hover:text-[#EEAA36]">Our Games</a>
      <a href="#blogs" class="hover:text-[#EEAA36]">Our Blogs</a>
      <a href="#faq" class="hover:text-[#EEAA36]">Faq</a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <button
      class="text-2xl pi pi-bars"
      @click="isSidebarOpen = true"
    >
    </button>
    </div>
  </nav>

  <!-- MOBILE SIDEBAR -->
  <!-- MOBILE SIDEBAR -->
<div
  v-if="isSidebarOpen"
  class="fixed inset-0 z-50 flex"
>
  <!-- Overlay -->
  <div
    class="absolute inset-0 bg-black/50"
    @click="closeSidebar"
  ></div>

  <!-- Sidebar -->
  <aside
    class="
      relative w-64 bg-black h-full p-6
      flex flex-col gap-6 uppercase font-bold text-white
      transition-transform duration-300 ease-out
      translate-x-0
    "
  >
    <!-- Close -->
    <button
      class="self-end text-2xl mb-6"
      @click="closeSidebar"
    >
      ✕
    </button>

    <a href="#home" @click="closeSidebar">Home</a>
    <a href="#about" @click="closeSidebar">About Us</a>
    <a href="#games" @click="closeSidebar">Our Games</a>
    <a href="#blogs" @click="closeSidebar">Our BLogs</a>
    <a href="#faq" @click="closeSidebar">Faq</a>
  </aside>
</div>


  <!-- Backgrounds -->
  <div class="absolute top-0 right-0 w-[40%] -z-10 hidden md:block">
    <img src="/svg/bg-right.svg" alt="" />
  </div>
  <div class="absolute top-0 left-0 w-[40%] -z-10 hidden md:block">
    <img src="/svg/bg-left.svg" alt="" />
  </div>
</template>
