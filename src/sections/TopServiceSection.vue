<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headerRef = ref(null);

onMounted(() => {
  gsap.from(headerRef.value, {
    scrollTrigger: {
      trigger: headerRef.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 2xl:px-0 py-16">
    <!-- Header (Animated) -->
    <div
      ref="headerRef"
      class="flex flex-col lg:flex-row items-start lg:items-center gap-8"
    >
      <div class="w-full lg:w-1/2 space-y-3">
        <p class="uppercase font-bold tracking-wider text-[#EEAA36]">
          Top Services
        </p>
        <p
          class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight"
        >
          Premium Online Gaming ID Provider – Your Trusted Partner
        </p>
      </div>

      <div class="w-full lg:w-1/2">
        <p>
          Join India’s elite online gaming sites for incredible odds and secure
          gaming experiences. If you are a pro bettor or just a beginner,
          Swamiji Online gaming ID provider will give you the utmost serenity.
          From us you can get your one stop id where you can bet on all live
          sports and world’s all live casino games. We recommend you must
          concentrate on making money while we take care of security, cash-out,
          and everything else, Your Victory is our Concern.
        </p>
      </div>
    </div>

    <!-- Services Grid (NO animation, all 4 cards visible) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <div
        class="p-10 flex flex-col items-center space-y-4 text-center rounded-xl hover:shadow-lg transition"
      >
        <img src="/svg/support.svg" alt="" class="h-14" />
        <p class="text-[22px] font-semibold">24×7 Customer Support</p>
      </div>

      <div
        class="p-10 flex flex-col items-center space-y-4 text-center rounded-xl hover:shadow-lg transition"
      >
        <img src="/svg/withdrawl.svg" alt="" class="h-14" />
        <p class="text-[22px] font-semibold">
          Instant<br />Withdrawal
        </p>
      </div>

      <div
        class="p-10 flex flex-col items-center space-y-4 text-center rounded-xl hover:shadow-lg transition"
      >
        <img src="/svg/whatsapp.svg" alt="" class="h-14" />
        <p class="text-[22px] font-semibold">
          Whatsapp<br />Support
        </p>
      </div>

      <div
        class="p-10 flex flex-col items-center space-y-4 text-center rounded-xl hover:shadow-lg transition"
      >
        <img src="/svg/call.svg" alt="" class="h-14" />
        <p class="text-[22px] font-semibold">
          Call<br />Support
        </p>
      </div>
    </div>
  </section>
</template>
