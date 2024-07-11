<template>
  <section class="s-advantages s-section-padding l-default">
    <h1 class="s-advantages__title f-h1 mb-50">{{ title }}</h1>
    <div class="s-advantages__content">
      <swiper class="s-advantages__slider" v-bind="swiperIntroConfig">
        <swiper-slide class="s-advantages__slider-card" v-for="(item, idx) in content" :key="idx">
          <m-advantages-card :card="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
});

const swiperIntroConfig = reactive({
  // slidesPerView: 'auto',
  spaceBetween: 12,
  grabCursor: true,
  loop: false,
  breakpoints: {
    320: {
      spaceBetween: 12,
      slidesPerView: 'auto',
      // allowTouchMove: true,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: '2',
      // allowTouchMove: false,
    },
    1440: {
      slidesPerView: '3',
    },
  },
});
</script>

<style lang="scss" scoped>
@import './s-advantages';
</style>
