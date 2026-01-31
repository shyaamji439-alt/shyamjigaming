<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    title: "Players",
    value: "100+",
    desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    title: "Tournaments",
    value: "1989+",
    desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    title: "Years",
    value: "4+",
    desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    title: "Coffe Cups",
    value: "12+",
    desc: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const leftRef = ref(null);
const statsRef = ref([]);

onMounted(() => {
  // Left content fade
  gsap.from(leftRef.value, {
    scrollTrigger: {
      trigger: leftRef.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });

  // Stats fade stagger
  gsap.from(statsRef.value, {
    scrollTrigger: {
      trigger: statsRef.value[0],
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <section class="relative overflow-hidden py-32">
    <!-- Background Image -->
    <div class="absolute inset-0 -z-10">
      <img
        src="/images/bg-2.webp"
        alt=""
        class="w-full h-full object-cover opacity-60"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 2xl:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <!-- Left content -->
        <div ref="leftRef">
          <p class="text-[#E7C873] text-sm tracking-widest uppercase mb-4">
            Who We Are
          </p>

          <h1 class="text-white text-4xl md:text-5xl font-bold leading-tight">
            We are the <br />
            gamblers
          </h1>
        </div>

        <!-- Right stats -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div
            v-for="(item, index) in stats"
            :key="index"
            ref="statsRef"
          >
            <p class="text-white font-semibold mb-2">
              {{ item.title }}
            </p>

            <p class="text-[#E7C873] text-4xl font-bold mb-3">
              {{ item.value }}
            </p>

            <p class="text-gray-400 text-sm leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
