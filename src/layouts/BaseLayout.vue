<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main class="">
    <Navbar />
    <RouterView />
    <div class="relative z-30">
      <a
        href="https://api.whatsapp.com/send/?phone=916262581872&text&type=phone_number&app_absent=0"
        target="_blank"
        class="pi pi-whatsapp bg-white p-3 text-green-500 text-[40px] md:text-[50px] fixed bottom-5 right-5 rounded-full cursor-pointer"
      >
      </a>
    </div>
    <Footer />
  </main>
</template>
