<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["Live & Application Class", "Mocks", "Crash Course"];

const blogs = [
  {
    title: "Big Bash League 2026: Play Smart Using a Legal Cricket ID Provider – Shyaam ji Online",
    date: "Jun 8, 2026",
    image: "/images/b1.png",
    featured: true,
  },
  {
    title: "Big Bash League 2026: Play Smart Using a Legal Cricket ID Provider – Shyaam ji Online",
    date: "Jun 8, 2026",
    image: "/images/b2.png",
  },
  {
    title: "Big Bash League 2026: Play Smart Using a Legal Cricket ID Provider – Shyaam ji Online",
    date: "Jun 8, 2026",
    image: "/images/b3.png",
  },
  {
    title: "Big Bash League 2026: Play Smart Using a Legal Cricket ID Provider – Shyaam ji Online",
    date: "Jun 8, 2026",
    image: "/images/b4.png",
  },
];

const blogsContainerRef = ref(null);

onMounted(() => {
  if (blogsContainerRef.value && blogsContainerRef.value.children.length > 0) {
    gsap.from(blogsContainerRef.value.children, {
      scrollTrigger: {
        trigger: blogsContainerRef.value,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    });
  }
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 2xl:px-0 py-16 text-white">
    <!-- Heading -->
    <div class="mb-12">
      <h1
        class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight text-center"
      >
        Our Latest News
      </h1>
    </div>

    <!-- FLEX CONTAINER - SAME STAGGERED FADE -->
    <div 
      ref="blogsContainerRef"
      class="flex flex-col lg:flex-row gap-10"
    >
      <!-- LEFT: Featured Blog (60%) -->
      <div class="lg:w-[60%] space-y-4">
        <img
          src="/images/b1.png"
          alt="Featured Blog"
          class="rounded-2xl w-full object-cover"
        />

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in categories"
            :key="tag"
            class="text-[12px] px-3 py-1 rounded-full bg-[#1a1a1a] text-yellow-400"
          >
            {{ tag }}
          </span>
        </div>

        <h2 class="text-[22px] font-semibold leading-snug">
          Big Bash League 2026: Play Smart Using a Legal Cricket ID Provider –
          Shyaam ji Online
        </h2>

        <p class="text-white/50 text-[13px]">Jun 8, 2026</p>
      </div>

      <!-- RIGHT: Side Blogs + Images (40%) -->
      <div class="lg:w-[50%] flex gap-4">
        <!-- Side Text Blogs -->
        <div class="space-y-8">
          <div v-for="(blog, i) in blogs.slice(1)" :key="i" class="flex gap-4">
            <div class="">
              <div class="flex flex-wrap gap-2 mb-2">
                <span
                  v-for="tag in categories"
                  :key="tag"
                  class="text-[11px] px-3 py-1 rounded-full bg-[#1a1a1a] text-yellow-400"
                >
                  {{ tag }}
                </span>
              </div>

              <h3 class="text-[18px] font-medium leading-snug">
                {{ blog.title }}
              </h3>

              <p class="text-white/40 text-[12px] mt-1">
                {{ blog.date }}
              </p>
            </div>

            <div class="">
              <img :src="blog.image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
