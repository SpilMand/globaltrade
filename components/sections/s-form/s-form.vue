<template>
  <section class="s-form">
    <div class="s-form__container">
      <div class="s-form__left">
        <div class="s-form__info">
          <div class="s-form__title f-h3" v-html="content.title" />
          <div class="s-form__left-wrapper">
            <div v-if="content.descriptionTitle" class="s-form__description f-h5" v-html="content.descriptionTitle" />
            <div v-if="content.tags" class="s-form__tags">
              <div
                v-for="(tag, index) in content.tags"
                :key="index"
                class="s-form__tag f-m-medium"
                v-html="tag.title"
              />
            </div>
          </div>
        </div>
        <div v-if="content.bg" class="s-form__bg">
          <img :src="content.bg" alt="" />
        </div>
        <div v-else class="s-form__img">
          <div class="s-form__img-person">
            <img :src="content.image" alt="" />
          </div>
          <div class="s-form__img-rune">
            <img src="/images/s-form/rune.png" alt="" />
            <img src="/images/s-form/2.png" alt="" />
          </div>
        </div>
      </div>
      <m-form :theme="content.theme" :form-title="content.formTitle" :btn-text="content.btnText" @on-submit="sendForm">
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
  // image: {
  //   type: String,
  //   default: '',
  // },

  // bg: {
  //   type: String,
  //   default: '',
  // },

  // theme: {
  //   type: String,
  //   default: 'gray',
  // },

  // description: {
  //   type: String,
  //   default: '',
  // },

  // titleType: {
  //   type: String,
  //   default: 'top',
  // },

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
    //     // route.name === 'edu-platform-slug' || route.name === 'edu-platform' ? route.path : undefined,
    //   )
    //   .then(() => {
    //     emit('onSend');
    //   });
    emit('action', fieldsData);
    // await registration();
  } else {
    isValidate.value = true;
  }
};
</script>

<style lang="scss">
@import './s-form.scss';
</style>
