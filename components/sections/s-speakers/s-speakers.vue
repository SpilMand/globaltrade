<template>
  <section class="s-speakers l-default swiper-default">
    <div class="s-speakers__top">
      <h1 class="s-speakers__title f-h2">{{ title }}</h1>
      <div class="s-speakers__navigation">
        <div ref="sliderPrev" class="s-speakers__navigation-prev s-speakers__navigation-item">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2L8 9.35L2 16"
              stroke="#1C1C1C"
              stroke-width="2.07397"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div ref="sliderNext" class="s-speakers__navigation-next s-speakers__navigation-item">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2L8 9.35L2 16"
              stroke="#1C1C1C"
              stroke-width="2.07397"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="s-speakers__content">
      <swiper class="s-speakers__slider" v-bind="swiperSpeakersConfig">
        <swiper-slide class="s-speakers__slider-slide" v-for="(item, idx) in content" :key="idx">
          <div class="s-speakers__slider-card">
            <div class="s-speakers__slider-card__content">
              <div class="s-speakers__slider-card__name f-h5">{{ item.name }}</div>
              <div class="s-speakers__slider-card__text f-l-medium">{{ item.subtext }}</div>
              <!-- <div class="s-speakers__slider-card__subtext f-l-medium">{{ item.subtext }}</div> -->
              <a-button v-if="item.items" label="Подробнее" color="gray" @click="togglePopup(item)" />
            </div>
            <div class="s-speakers__slider-card__image">
              <img :src="item.image" alt="" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="s-speakers__pagination s-swiper-pagination"></div>
    </div>
    <m-speakers-popup :content="popupContent" :is-open="isOpen" @toggle-popup="togglePopup" />
  </section>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper/modules';
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

const sliderPrev = ref(null);
const sliderNext = ref(null);

const swiperSpeakersConfig = reactive({
  slidesPerView: 'auto',
  spaceBetween: 8,
  grabCursor: true,
  loop: false,
  navigation: {
    prevEl: sliderPrev,
    nextEl: sliderNext,
  },
  pagination: {
    el: '.s-speakers__pagination',
    clickable: true,
  },
  modules: [Pagination, Navigation],
  breakpoints: {
    320: {
      spaceBetween: 8,
      allowTouchMove: true,
    },
    1200: {
      spaceBetween: 20,
    },
  },
});

const isOpen = ref(false);
const popupContent = ref({});
const togglePopup = (info) => {
  isOpen.value = !isOpen.value;
  if (info) {
    popupContent.value = info;
  }
};
</script>

<style lang="scss" scoped>
@import './s-speakers.scss';
</style>
