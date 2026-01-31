<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { no: "01", title: "Create Your Cricket ID", desc: "Join live sports exchange gaming in minutes." },
  { no: "02", title: "1M+ Active Players", desc: "A large, active community means more action and better excitement every day." },
  { no: "03", title: "5000+ Games", desc: "Cricket, football, live casino, slots, Teen Patti & more — all in one login." },
  { no: "04", title: "Live Betting", desc: "Bet in real time and stay connected to every moment of the match." },
  { no: "05", title: "Secure & Trusted", desc: "Bank-grade security, transparent odds, and reliable transactions." },
  { no: "06", title: "Fast Payouts", desc: "Withdraw your winnings in 2–4 hours on average." },
  { no: "07", title: "24/7 Support", desc: "Always-on customer support via chat, call, and messaging apps." },
  { no: "08", title: "User-Friendly Platform", desc: "Simple design. Easy betting. Smooth experience." },
  { no: "09", title: "Responsible Gaming", desc: "Set limits, stay in control, and play responsibly." },
];

const featuresContainerRef = ref(null);

onMounted(() => {
  // Container fade (triggers entire grid)
  gsap.from(featuresContainerRef.value, {
    scrollTrigger: {
      trigger: featuresContainerRef.value,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 2xl:px-0 py-10">
    <div class="space-y-8">
      <h1 class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight">
        What Makes Swamiji Online India’s Legal<br />
        Cricket Betting Platform
      </h1>

      <button
        class="mx-auto lg:mx-0 flex items-center gap-2 bg-gradient-to-b from-[#FAEAA8] to-[#B37A1A] px-6 py-3 rounded-xl text-black font-bold text-[18px] hover:scale-105 transition w-fit"
      >
        <i class="pi pi-whatsapp text-xl"></i>
        <span>Get Your ID Now</span>
      </button>
    </div>

    <!-- FEATURES GRID - SAME FADE AS YOUR NEW CODE -->
    <div 
      ref="featuresContainerRef"
      class="mt-6 bg-black py-16 rounded-2xl"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 px-6">
        <div
          v-for="(item, index) in features"
          :key="item.no"
          class="flex gap-6"
        >
          <!-- Big faded number -->
          <div class="text-[60px] font-bold text-white/30 leading-none select-none">
            {{ item.no }}
          </div>

          <!-- Text content -->
          <div>
            <h3 class="text-white font-semibold text-[18px] mb-2">{{ item.title }}</h3>
            <p class="text-white/60 text-[14px] leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
