<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textRef = ref(null);
const imageRef = ref(null);

onMounted(() => {
  // Left content fade
  gsap.from(textRef.value, {
    scrollTrigger: {
      trigger: textRef.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });

  // Image fade
  gsap.from(imageRef.value, {
    scrollTrigger: {
      trigger: imageRef.value,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.1,
  });
});
</script>

<template>
  <section
    class="max-w-7xl mx-auto py-10 px-4 2xl:px-0 flex flex-col xl:flex-row items-center justify-between gap-10"
  >
    <!-- Left content -->
    <div ref="textRef" class="w-full xl:w-1/2">
      <div class="space-y-4">
        <p class="uppercase font-bold tracking-wider text-[#EEAA36]">
          Top Services
        </p>

        <h1
          class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight"
        >
          Who Is Shyamji Online?
        </h1>

        <p class="max-w-3xl">
          Swamiji Online has become the safest, most exciting, and most valuable
          legal cricket ID provider in India. Our platform is built for players
          who are looking for trustworthiness and reliability, openness, and
          continuous thrill.
        </p>

        <div>
          <p>• A winning environment molded for your triumph</p>
          <p>• Connection to a widening network of happy bettors</p>
          <p>• Fair play and responsible betting support</p>
          <p>• Rely on our open dealings with no hidden terms</p>
        </div>

        <p>
          With reliable customer support and exciting features all under one
          gaming ID, Swamiji Online has become one of the most comprehensive and
          trustworthy Online Cricket ID platforms in India.
        </p>
      </div>
    </div>

    <!-- Right image -->
    <div ref="imageRef" class="w-full xl:w-1/2">
      <img
        src="/images/virat.webp"
        alt=""
        class="w-full xl:w-[90%]"
      />
    </div>
  </section>
</template>
