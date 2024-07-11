<template>
  <section class="s-program s-section-padding l-default">
    <div class="s-program__inner">
      <h1 class="s-program__title f-h1 mb-50">{{ title }}</h1>
      <div class="s-program__list">
        <m-program-card
          v-for="(item, index) in contentFiltered"
          :key="index"
          :item="item"
          :index="index"
          @open="open"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
});

const contentFiltered = computed(() => {
  return props.content;
});

const open = (index) => {
  contentFiltered.value.forEach((item) => {
    item.id === index ? (item.isOpen = true) : (item.isOpen = false);
  });
};
</script>

<style lang="scss" scoped>
@import './s-program.scss';
</style>
