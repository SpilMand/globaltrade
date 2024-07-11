<template>
  <div class="m-advantages-card">
    <div class="m-advantages-card__content">
      <h4 class="m-advantages-card__title f-h4" v-html="card.title" />
      <p class="m-advantages-card__text f-m-medium" v-html="card.subtitle" />
    </div>
    <img class="m-advantages-card__image" :src="card.icon" />
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import './m-advantages-card';
</style>
