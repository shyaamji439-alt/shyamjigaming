<script setup>
import { Vue3Marquee } from "vue3-marquee";

const testimonials = [
  {
    text: "The support I receive from this broker has been very welcoming. I thought I’ll be very confused with getting my way around the financial",
    name: "Ana Li",
    rating: 4,
  },
  {
    text: "Excellent platform with fast withdrawals and responsive support. The tools and educational content make trading much easier for beginners.",
    name: "Ana Li",
    rating: 5,
  },
  {
    text: "Smooth experience overall. The interface is intuitive and the support team is always ready to help when needed.",
    name: "Ana Li",
    rating: 4,
  },
  {
    text: "I really like how transparent everything is. Great platform for both beginners and experienced users.",
    name: "Ana Li",
    rating: 5,
  },
];
</script>

<template>
  <section class="py-20 overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 2xl:px-0">
      <!-- Heading -->
      <div class="text-center mb-14">
        <p class="uppercase font-bold tracking-wider text-[#EEAA36] mb-2">
          Who We Are
        </p>
        <h1 class="text-[42px] md:text-[50px] font-bold text-white">
          What our Clients Say
        </h1>
      </div>
    </div>

    <!-- Testimonial marquee -->
    <Vue3Marquee :clone="true" :duration="35" class="relative">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="mx-6 w-[380px] shrink-0 rounded-xl border border-[#2A2A2A] bg-gradient-to-b from-[#0B0B0B] to-[#050505] p-6 text-white"
      >
        <!-- Text -->
        <p class="text-sm leading-relaxed text-gray-300 mb-6">
          {{ item.text }}
        </p>

        <!-- Divider -->
        <div class="h-px w-full bg-[#2A2A2A] mb-4"></div>

        <!-- Footer -->
        <div class="flex items-center justify-between">
          <!-- Stars -->
          <div class="flex gap-1 text-[#EEAA36]">
            <i
              v-for="i in 5"
              :key="i"
              class="pi"
              :class="i <= item.rating ? 'pi-star-fill' : 'pi-star'"
            ></i>
          </div>

          <!-- Name -->
          <p class="font-semibold text-sm">
            {{ item.name }}
          </p>
        </div>
      </div>
    </Vue3Marquee>
    <div class="absolute top-0 right-0 w-[40%] -z-10">
      <img src="/svg/bg-right.svg" alt="" />
    </div>
    <div class="absolute top-0 left-0 w-[40%] -z-10">
      <img src="/svg/bg-left.svg" alt="" />
    </div>
  </section>

</template>
