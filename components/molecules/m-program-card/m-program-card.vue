<template>
  <div class="m-program-card" :class="{ open: item.isOpen }">
    <div class="m-program-card__top" @click="openContent">
      <p class="m-program-card-title f-h3">{{ item.title }}</p>
      <div class="m-program-card-close">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.23336 12.1925H0.026123V8.65908H8.23336V0.451843H11.7668V8.65908H19.974V12.1925H11.7668V20.3997H8.23336V12.1925Z"
            fill="#1C1C1C"
          />
        </svg>
      </div>
    </div>
    <div v-if="item.isOpen" class="m-program-card__container">
      <swiper v-if="swiperConfigCard" v-bind="swiperConfigCard">
        <swiper-slide v-for="(card, idx) in item.container" :key="idx" class="m-program-card__item">
          <div class="m-program-card__item-top">
            <div class="m-program-card__item-number f-l-medium">{{ card.number }}</div>
            <div class="m-program-card__item-title f-l-medium">{{ card.title }}</div>
          </div>
          <ul v-if="Array.isArray(card.list)" class="m-program-card__item-list">
            <li v-for="(point, nmb) in card.list" :key="nmb" class="m-program-card__item-point" v-html="point.text" />
          </ul>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['open']);
const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {};
    },
  },
  index: {
    type: Number,
    required: true,
  },
});

const swiperConfigCard = reactive({
  slidesPerView: 'auto',
  spaceBetween: 8,
  resistance: true,
  resistanceRation: 0,
  grabCursor: true,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    1200: {
      spaceBetween: 0,
      allowTouchMove: false,
    },
  },
});

const openContent = () => {
  emit('open', props.index);
};
</script>

<style lang="scss">
@import './m-program-card.scss';
</style>
