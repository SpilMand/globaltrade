<template>
  <div class="a-input" :class="classes">
    <label v-if="label" :for="attrs.id">{{ label }}</label>
    <div class="a-input__container">
      <textarea v-if="type == 'textarea'" />
      <input
        v-else-if="type == 'search'"
        ref="a-input"
        v-model="valueThis"
        class="a-input__textfield"
        :class="classesField"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        @keyup="checkError"
      />
      <!-- <vue-tel-input
        v-else-if="type === 'phone'"
        mode="international"
        :class="classesField"
        @validate="phoneValidate"
      /> -->
      <input
        v-else-if="type === 'phone'"
        ref="a-input"
        v-model="valueThis"
        v-maska
        class="a-input__textfield"
        :class="classesField"
        :type="type"
        placeholder="Телефон"
        :disabled="disabled"
        data-maska="+1 ### ###-##-##"
        @keyup="checkError"
      />
      <input
        v-else-if="type === 'contract'"
        ref="a-input"
        v-model="valueThis"
        v-maska
        type="text"
        class="a-input__textfield"
        :class="classesField"
        :placeholder="placeholder"
        :disabled="disabled"
        data-maska="#######/##"
        @keyup="checkError"
      />
      <input
        v-else
        ref="a-input"
        v-model="valueThis"
        class="a-input__textfield"
        :class="classesField"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @keyup="checkError"
      />
    </div>
  </div>
</template>

<script setup>
import { VueTelInput } from 'vue-tel-input';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  error: {
    type: Boolean,
    required: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    validator(value) {
      return ['large', 'medium', 'small'].indexOf(value) !== -1;
    },
    default: 'medium',
  },
  isValidate: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const errorValue = ref(true);

const classes = computed(() => ({
  'a-input': true,
  [`a-input--${props.size}`]: true,
  [`a-input--search`]: props.type === 'search',
}));

const classesField = computed(() => ({
  [`a-input__textfield--${props.size}`]: true,
  [`a-input__textfield--error`]: !errorValue.value,
  [`a-input__textfield--search`]: props.type === 'search',
}));

const valueThis = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

const checkError = () => {
  errorValue.value = props.error;
};

watch(
  () => props.isValidate,
  () => {
    checkError();
  },
);
</script>

<style lang="scss">
@import './a-input.scss';
</style>
