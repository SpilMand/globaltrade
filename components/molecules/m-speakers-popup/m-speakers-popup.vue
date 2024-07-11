<template>
  <div v-if="isOpen" class="m-speakers-popup">
    <div class="m-speakers-popup__backdrop">
      <div class="m-speakers-popup__content">
        <div class="m-speakers-popup__info">
          <img :src="content.image" :alt="name" />
          <div class="m-speakers-popup__info-text">
            <h4 class="m-speakers-popup__name f-h4">{{ content.name }}</h4>
            <span class="m-speakers-popup__subtext f-l-medium">{{ content.subtext }}</span>
          </div>
        </div>
        <p class="m-speakers-popup__text f-l-medium">{{ content.text }}</p>
        <ul class="m-speakers-popup__list f-xl-medium">
          <li v-for="item in content.items" :key="item" class="m-speakers-popup__item">{{ item }}</li>
        </ul>
        <img src="/icons/cross.svg" class="m-speakers-popup__close" @click="emit('togglePopup')" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  subtext: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['togglePopup']);
</script>

<style>
@import './m-speakers-popup.scss';
</style>
