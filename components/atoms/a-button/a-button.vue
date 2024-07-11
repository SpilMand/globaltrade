<template>
  <button class="a-button" :type="typeBtn" :class="classes" :disabled="disabled" role="button" :area-label="label">
    <span :class="textSize" class="a-button__label">{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  typeBtn: {
    type: String,
    default: 'button',
  },
  iconLink: {
    type: String,
    default: '',
    required: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator(value) {
      return ['large', 'medium', 'small'].indexOf(value) !== -1;
    },
    default: 'medium',
  },
  textSize: {
    type: String,
    default: 'f-l-medium',
  },
  type: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'tertiary', 'header'].indexOf(value) !== -1;
    },
    default: 'primary',
  },
  color: {
    type: String,
    validator(value) {
      return ['red', 'black', 'white', 'gray'].indexOf(value) !== -1;
    },
    default: '',
  },
  radius: {
    type: String,
    validator(value) {
      return ['default', 'rounded'].indexOf(value) !== -1;
    },
    default: 'default',
  },
  width: {
    type: String,
    default: '',
    required: false,
  },
});

const classes = computed(() => ({
  [`a-button--${props.size}`]: true,
  [`a-button--${props.type}`]: true,
  [`a-button--${props.color}`]: true,
  [`a-button--${props.radius}`]: true,
  'a-button--disabled': props.disabled,
  'a-button--block': props.block,
}));
</script>

<style lang="scss">
@import './a-button.scss';
</style>
