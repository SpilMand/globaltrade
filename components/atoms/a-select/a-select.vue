<template>
  <div v-click-outside="close" class="a-select" :class="{ 'a-select--open': isOpen }">
    <div class="a-select__result" @click="isOpen = !isOpen">
      <div class="a-select__result-text f-xl-medium">{{ selected }}</div>
      <div class="a-select__result-arrow">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.2911 7.79194L12.8389 18.2441L2.38672 7.79194L4.61392 5.56474L12.8389 13.7897L21.0639 5.56474L23.2911 7.79194Z"
            fill="#1C1C1C"
          />
        </svg>
      </div>
    </div>
    <div v-if="isOpen" class="a-select__options">
      <div v-for="(option, id) in options" :key="id" class="a-select__option f-m-medium" @click="choose(option)">
        {{ option?.attributes?.name || option }}
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['choose']);

defineProps({
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },

  selected: {
    type: String,
    default: '',
  },
});

const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};

const choose = (option) => {
  emit('choose', option);

  close();
};
</script>

<style lang="scss">
@import './a-select.scss';
</style>
