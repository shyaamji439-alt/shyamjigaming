<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const celebsContainerRef = ref(null);

onMounted(() => {
  gsap.from(celebsContainerRef.value.children, {
    scrollTrigger: {
      trigger: celebsContainerRef.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,  // Appear one after another
  });
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 2xl:px-0 py-10">
    <h1
      class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight text-center"
    >
      When Celebrities Play, They Choose Shyaam ji
    </h1>

    <div 
      ref="celebsContainerRef"
      class="grid grid-cols-2 xl:grid-cols-4 gap-16 mt-20"
    >
      <div class="">
        <img src="/images/c1.png" alt="">
      </div>
      <div class="">
        <img src="/images/c2.png" alt="">
      </div>
      <div class="">
        <img src="/images/c3.png" alt="">
      </div>
      <div class="">
        <img src="/images/c4.png" alt="">
      </div>
    </div>
  </section>
</template>
