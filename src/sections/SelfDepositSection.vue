<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: "Dream444.com",
    logo: "/svg/dream4.svg",
  },
  {
    name: "Dream444.com",
    logo: "/svg/my11.svg",
  },
];

const marqueeItems = [
  "Cricket Betting",
  "Live Casino",
  "Sports Exchange",
  "Fast Withdrawal",
  "24x7 Support",
];

const headerRef = ref(null);
const cardsRef = ref([]);
const bannerRef = ref(null);
const marqueeRef = ref(null);

onMounted(() => {
  // Header fade
  gsap.from(headerRef.value, {
    scrollTrigger: {
      trigger: headerRef.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });

  // Cards fade stagger
  gsap.from(cardsRef.value, {
    scrollTrigger: {
      trigger: cardsRef.value[0],
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Banner fade
  gsap.from(bannerRef.value, {
    scrollTrigger: {
      trigger: bannerRef.value,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
  });

  // Marquee fade
  gsap.from(marqueeRef.value, {
    scrollTrigger: {
      trigger: marqueeRef.value,
      start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  });
});
</script>

<template>
  <section class="py-20 overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 2xl:px-0">
      <!-- Header -->
      <div
        ref="headerRef"
        class="text-center flex flex-col items-center space-y-4"
      >
        <p class="uppercase font-bold tracking-wider text-[#EEAA36]">
          Top Services
        </p>
        <h1
          class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight"
        >
          Trusted Shyaam ji Online Partners
        </h1>
        <p class="max-w-3xl">
          We are proud to be working with some of the best online platforms of
          the gaming industry. Brands which bring you the quality services with
          amazing odds, and ultimate gaming experiences. Here are some elite
          online gaming sites provided by us:
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div
          v-for="(item, index) in platforms"
          :key="index"
          ref="cardsRef"
          class="relative rounded-2xl border border-[#E7C873] p-6 bg-gradient-to-br from-[#0B0B0B] via-[#0F0F0F] to-[#0B0B0B] shadow-[0_0_40px_rgba(231,200,115,0.15)]"
        >
          <div class="mb-4">
            <img :src="item.logo" alt="" class="h-16" />
          </div>

          <p class="text-white text-[22px] md:text-[24px] font-semibold mb-6">
            {{ item.name }}
          </p>

          <div class="space-y-3 text-sm text-gray-300">
            <div class="flex justify-between border-b border-dashed border-gray-600 pb-1">
              <span>1 Coin</span>
              <span>₹1</span>
            </div>
            <div class="flex justify-between border-b border-dashed border-gray-600 pb-1">
              <span>Minimum ID</span>
              <span>₹100</span>
            </div>
            <div class="flex justify-between border-b border-dashed border-gray-600 pb-1">
              <span>Minimum Bet</span>
              <span>₹100</span>
            </div>
          </div>

          <button
            class="mt-6 bg-gradient-to-b from-[#FAEAA8] to-[#B37A1A] px-4 py-3 rounded-xl text-black font-semibold text-[16px] md:text-[18px] w-full"
          >
            Self Deposit Withdrawal
          </button>
        </div>
      </div>

      <!-- Banner -->
      <div
        ref="bannerRef"
        class="bg-[#141414] p-4 flex flex-col xl:flex-row items-center justify-between gap-8 rounded-xl mt-10"
      >
        <div class="w-full xl:w-1/2 space-y-8">
          <h3 class="font-bold text-[40px]">
            Play with India’s Most Legal Online Betting ID Provider
          </h3>
          <p>
            The first step to success in cricket betting is a proper platform.
            Shyaam ji Online has built a reputation as a
            <span class="font-bold text-[#EEAA36]">
              trusted betting ID provider
            </span>
            through continuously providing reliable services.
          </p>
          <button
            class="mx-auto lg:mx-0 flex items-center gap-2 bg-gradient-to-b from-[#FAEAA8] to-[#B37A1A] px-6 py-3 rounded-xl text-black font-bold text-[18px] hover:scale-105 transition w-fit"
          >
            <i class="pi pi-whatsapp text-xl"></i>
            <span>Get Your ID Now</span>
          </button>
        </div>
        <div class="w-full xl:w-1/2">
          <img src="/images/banner.webp" alt="" class="w-full xl:w-[90%]" />
        </div>
      </div>

      <!-- Marquee -->
      <div ref="marqueeRef" class="relative mt-24">
        <div
          class="w-[130%] -ml-[15%] rotate-[-4deg] bg-gradient-to-r from-[#FAEAA8] via-[#E7C873] to-[#B37A1A] py-4 shadow-lg overflow-hidden"
        >
          <Vue3Marquee :clone="true" :duration="18">
            <div
              v-for="(item, index) in marqueeItems"
              :key="index"
              class="flex items-center gap-4 mx-10 text-black whitespace-nowrap py-3"
            >
              <i class="pi pi-money-bill text-xl mt-1"></i>
              <span class="font-instument text-[32px] md:text-[55px] italic">
                {{ item }}
              </span>
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>

    <!-- Backgrounds -->
    <div class="absolute top-0 right-0 w-[50%] -z-10 hidden md:block">
      <img src="/svg/bg-right.svg" alt="" />
    </div>
    <div class="absolute top-0 left-0 w-[50%] -z-10 hidden md:block">
      <img src="/svg/bg-left.svg" alt="" />
    </div>
  </section>
</template>
