<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "How do I create my Online Cricket ID at Shyaam ji Online?",
    answer:
      "You can create your Online Cricket ID by contacting Shyaam ji Online via WhatsApp or their official support channel. The process is quick and secure.",
    open: false,
  },
  {
    question: "Is Shyaam ji Online a reliable and safe betting site?",
    answer:
      "Yes, Shyaam ji Online uses secure systems, transparent rules, and provides reliable payouts, making it a trusted platform.",
    open: false,
  },
  {
    question: "How do I create my Online Cricket ID at Shyaam ji Online?",
    answer:
      "Simply reach out to the support team, provide basic details, and your ID will be created within minutes.",
    open: false,
  },
  {
    question: "How do I create my Online Cricket ID at Shyaam ji Online?",
    answer:
      "The support team will guide you step by step to ensure a smooth and hassle-free registration.",
    open: false,
  },
  {
    question: "How do I create my Online Cricket ID at Shyaam ji Online?",
    answer:
      "Contact Shyaam ji Online support, verify your details, and start playing instantly.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 2xl:px-0 py-16 text-white">
    <!-- Heading -->
    <div class="mb-12">
      <h1
        class="font-bold text-[32px] md:text-[36px] lg:text-[40px] leading-tight text-center"
      >
        Frequently asked questions
      </h1>
    </div>

    <!-- FAQ List -->
    <div class="space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border-b border-white/10 pb-4"
      >
        <!-- Question -->
        <button
          @click="toggleFaq(index)"
          class="w-full flex items-center justify-between text-left"
        >
          <span class="text-[16px] md:text-[18px] font-medium">
            {{ faq.question }}
          </span>

          <i
            :class="faq.open ? 'pi pi-minus' : 'pi pi-plus'"
            class="text-[18px] transition-transform duration-300"
          ></i>
        </button>

        <!-- Answer with animation -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[200px] opacity-100"
          leave-from-class="max-h-[200px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div
            v-if="faq.open"
            class="overflow-hidden mt-3 text-white/60 text-[14px] leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
