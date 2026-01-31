<script setup>
const images = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s5.png",
  "/images/s6.png",
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 2xl:px-0 py-10">
    <h1
      class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight text-center"
    >
      Top Gaming Sports You Can Bet On<br />
      With Your Online Betting ID
    </h1>

    <div class="mt-16">
      <Vue3Marquee :clone="true" :duration="35">
        <div class="" v-for="item in images">
          <img :src="item" alt="" class="w-[70%]" />
        </div>
      </Vue3Marquee>
    </div>

    <div class="flex justify-center mt-10">
        <button
      class="mx-auto lg:mx-0 flex items-center gap-2 bg-gradient-to-b from-[#FAEAA8] to-[#B37A1A] px-6 py-3 rounded-xl text-black font-bold text-[18px] hover:scale-105 transition w-fit"
    >
      <i class="pi pi-whatsapp text-xl"></i>
      <span>Get Your ID Now</span>
    </button>
    </div>
  </section>
</template>
