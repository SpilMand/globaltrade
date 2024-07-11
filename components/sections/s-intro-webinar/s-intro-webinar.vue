<template>
  <section class="s-intro-webinar l-default">
    <div class="s-intro-webinar__wrapper">
      <div class="s-intro-webinar__content">
        <h1 class="s-intro-webinar__title f-h1-banner" v-html="title"></h1>
        <p class="s-intro-webinar__online">{{ online }}</p>
        <div class="s-intro-webinar__subtitle f-h4">{{ subtitle }}</div>
        <a-button
          class="s-intro-webinar__btn"
          size="large"
          :color="btnTheme"
          :label="btnText"
          @click="moveTo('#form')"
        />
      </div>
    </div>
    <a-button
      class="s-intro-webinar__mobile"
      size="large"
      :color="btnTheme"
      :label="btnText"
      @click="moveTo('#form')"
    />
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
    default: 'Записаться на вебинар',
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

const subtitle = ref(
  'Первые шаги предпринимателя, подводные камни, рекомендации по комфортной жизни в стране для вас и вашей семьи',
);

const online = ref('Онлайн вебинар');
</script>

<style lang="scss" scoped>
@import './s-intro-webinar.scss';
</style>
