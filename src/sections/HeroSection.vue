<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const textRef = ref(null);

onMounted(() => {
  gsap.from(textRef.value, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
  });
});
</script>

<template>
  <section
    class="py-36 relative overflow-hidden"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 -z-10">
      <img
        src="/images/hero-bg.webp"
        alt=""
        class="w-full h-full object-cover opacity-40"
      />
    </div>

    <!-- Content -->
    <div
      ref="textRef"
      class="w-full space-y-6 text-center flex flex-col justify-center items-center max-w-7xl mx-auto px-4 2xl:px-0 relative z-10"
    >
      <h1
        class="font-bold text-[36px] md:text-[42px] lg:text-[50px] leading-tight"
      >
        Bharose ka dusra naam<br /> hai shyam ji book
      </h1>

      <p class="max-w-3xl">
        We provide you with an online ID for cricket, casino, and more than 5000+
        games. Join India’s leading online gaming site for incredible odds and a
        secure gaming experience. Get your Trusted Cricket ID via WhatsApp and
        access fast withdrawals, reliable service, and a user-friendly interface
        all in one place.
      </p>

      <a href="https://api.whatsapp.com/send/?phone=916262581872&text&type=phone_number&app_absent=0" target="_blank"
        class="mx-auto lg:mx-0 flex items-center gap-2 bg-gradient-to-b from-[#FAEAA8] to-[#B37A1A] px-6 py-3 rounded-xl text-black font-bold text-[18px] hover:scale-105 transition w-fit"
      >
        <i class="pi pi-whatsapp text-xl"></i>
        <span>Get Your ID Now</span>
      </a>
    </div>
  </section>
</template>
