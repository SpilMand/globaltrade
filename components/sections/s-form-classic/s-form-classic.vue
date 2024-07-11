<template>
  <section class="s-form-classic">
    <div class="s-form-classic__container">
      <m-form
        :form-title="content.formTitle"
        :form-title-description="content.formTitleDescription"
        :btn-text="content.btnText"
        :btn-theme="content.btnColor"
        :is-classic="true"
        @on-submit="sendForm"
      >
        <template #inputs>
          <div class="s-form__inputs">
            <a-input
              v-model="fieldsData.name"
              type="text"
              class="s-form__input"
              :error="errors.name"
              :is-validate="isValidate"
              placeholder="Имя"
              @input="checkedValidateError"
            />
            <a-input
              v-model="fieldsData.phone"
              :error="errors.phone"
              :is-validate="isValidate"
              placeholder="Телефон"
              type="phone"
              @input="checkedValidateError"
            />
            <a-input
              v-model="fieldsData.email"
              type="text"
              :error="errors.email"
              :is-validate="isValidate"
              placeholder="Email"
              @input="checkedValidateError"
            />
            <!-- <a-input v-model="fieldsData.comment" type="text" placeholder="Промокод" /> -->
          </div>
        </template>
      </m-form>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    default() {
      return {};
    },
  },
});

const { $lander } = useNuxtApp();

const route = useRoute();
const emit = defineEmits(['onSend', 'action']);

const isValidate = ref(false);

let fieldsData = reactive({
  name: '',
  email: '',
  phone: '',
  comment: '',
});

let errors = reactive({
  name: true,
  email: true,
  phone: true,
  comment: false,
});

let validFlag = ref(false);

const checkedValidateError = () => {
  errors.name = /^([A-ZА-ЯЁ][-,a-z, a-яё. ']+[ ]*)+$/i.test(fieldsData.name) && fieldsData.name !== '';
  errors.email = $lander.valid([{ value: fieldsData.email, type: 'email' }]);
  errors.phone = /^(\+1|1)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/i.test(
    fieldsData.phone,
  );
  validFlag.value = errors.name && errors.email && errors.phone;

  return validFlag.value;
};

onMounted(() => {
  checkedValidateError();
});

const sendForm = async () => {
  if (validFlag.value) {
    // $lander.storage.save('popupform', fieldsData);

    // if (props.ym) {
    //   $lander.storage.save('yMetrika', props.ym);
    // }

    // $lander
    //   .send(
    //     fieldsData,
    //     {},
    //     route.name === 'edu-platform-slug' || route.name === 'edu-platform' ? route.path : undefined,
    //   )
    //   .then(() => {
    //     emit('onSend');
    //   });
    emit('action', fieldsData);
  } else {
    isValidate.value = true;
  }
};
</script>

<style lang="scss">
@import './s-form-classic.scss';
</style>
