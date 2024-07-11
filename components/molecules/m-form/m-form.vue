<template>
  <div :class="['m-form', { 'm-form-classic': isClassic }]">
    <div class="m-form__title f-h3" v-html="formTitle"></div>
    <div v-if="formTitleDescription" class="m-form__description f-h5" v-html="formTitleDescription"></div>
    <div class="m-form__stuffing">
      <slot name="inputs" />
      <a-button size="large" :color="btnTheme" :label="btnText" @click.stop.prevent="submitForm" />
    </div>
    <a-control v-model="personalData" :text="textPrivacy" />
  </div>
</template>

<script setup>
const emit = defineEmits(['onSubmit']);

defineProps({
  btnText: {
    type: String,
    default: 'Купить курс',
  },
  isClassic: {
    type: Boolean,
    default: false,
  },
  formTitle: {
    type: String,
    default: 'Заполните форму, и наш менеджер свяжется с вами',
  },
  formTitleDescription: {
    type: String,
    default: '',
  },
  btnTheme: {
    type: String,
    default: 'blue',
  },
});

const textPrivacy =
  // eslint-disable-next-line max-len
  'Я даю согласие на обработку персональных данных, и соглашаюсь c политикой конфиденциальности';

const personalData = ref(true);

const submitForm = () => {
  emit('onSubmit');
};
</script>

<style lang="scss">
@import './m-form.scss';
</style>
