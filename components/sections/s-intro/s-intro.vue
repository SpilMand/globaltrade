<template>
  <section class="s-intro l-default">
    <div class="s-intro__wrapper">
      <div class="s-intro__content">
        <h1 class="s-intro__title f-h1-banner">{{ title }}</h1>
        <div class="s-intro__subtitle f-h4">{{ subtitle }}</div>
        <div class="s-intro__text f-h5">{{ text }}</div>
        <div class="s-intro__textMobile">{{ text_mobile }}</div>
        <a-button class="s-intro__btn" size="large" :color="btnTheme" :label="btnText" @click="moveTo('#form')" />
      </div>
      <div class="s-intro__vertical">
        <div class="s-intro__item" v-for="item in items" :key="item.id">
          <img class="s-intro__item-icon" :src="item.icon" alt="" />
          <div class="s-intro__item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '/composables/moveTo';

defineProps({
  title: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    default: 'Купить курс',
  },
  btnTheme: {
    type: String,
    default: 'blue',
  },
  content: {
    type: Array,
    required: true,
  },
});

const subtitle = ref('Инструкция по предпринимательству и адаптации в стране');
const text = ref(
  // eslint-disable-next-line max-len
  'Наш курс — это путеводитель по созданию и развитию бизнеса в США: от регистрации компании до привлечения инвестиций и масштабирования',
);

const text_mobile = ref(
  // eslint-disable-next-line max-len
  'Курс по предпринимательству и адаптации в стране — это путеводитель по созданию и развитию бизнеса в США: от регистрации компании до привлечения инвестиций и масштабирования. Старт 1 июля',
);

const items = ref([
  {
    text: '6 модулей',
    icon: '/images/s-intro/01.png',
  },
  {
    text: '19 лекций',
    icon: '/images/s-intro/02.png',
  },
  {
    text: '2 вебинара',
    icon: '/images/s-intro/03.png',
  },
  {
    text: 'Старт 1 июля',
    icon: '/images/s-intro/04.png',
  },
]);
</script>

<style lang="scss" scoped>
@import './s-intro.scss';
</style>
