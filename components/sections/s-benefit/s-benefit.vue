<template>
  <section class="s-benefit s-section-padding l-default">
    <h1 class="s-benefit__title f-h1 mb-50">{{ title }}</h1>
    <div class="s-benefit__top">
      <div class="s-benefit__line s-benefit__line--one">
        <div class="s-benefit__line-title f-h4">{{ benefit_one_title }}</div>
        <div class="s-benefit__line-text f-xl-medium">{{ benefit_one_text }}</div>
      </div>
      <div class="s-benefit__line s-benefit__line--two">
        <p class="s-benefit__line-text f-xl-medium">{{ benefit_two }}</p>
      </div>
      <div class="s-benefit__line s-benefit__line--three">
        <p class="s-benefit__line-text f-xl-medium">{{ benefit_three }}</p>
      </div>
      <img class="s-benefit__image" :src="benefit_icon.icon" alt="" />
      <div class="s-benefit__line s-benefit__line--four">
        <p class="s-benefit__line-text f-xl-medium">{{ benefit_four }}</p>
      </div>
      <a-button class="s-benefit__btn" size="large" :color="btnTheme" :label="btnText" />
    </div>
    <div class="s-benefit__bottom">
      <div class="s-benefit__item" v-for="(card, index) in content" :key="index">
        <div class="s-benefit__item-title f-h5">{{ card.title }}</div>
        <div class="s-benefit__item-text f-l-regular">{{ card.text }}</div>
        <div class="s-benefit__item-icon"><img :src="card.icon" alt="icon" /></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
  btnText: {
    type: String,
    default: 'Начать обучение',
  },
  btnTheme: {
    type: String,
    default: 'black',
  },
});

const benefit_one_title = ref('Почему стоит выбрать нас?');
const benefit_one_text = ref(
  // eslint-disable-next-line max-len
  'Вход на рынок США – наша главная экспертиза мы оказали услуги более чем 250 компаниям, входящим на рынок США, включая поиск поставщиков, получение разрешений на ввоз продукции, складирование и логистика товаров, открытие представительств на территории США',
);
const benefit_two = ref(
  // eslint-disable-next-line max-len
  'Предоставляем доступ к лучшим экспертам в США. За годы работы в Америке мы сформировали базу опытных специалистов в различных отраслях деятельности в Америке',
);
const benefit_three = ref(
  // eslint-disable-next-line max-len
  'Имеем большой опыт в бизнес-образовании и организации мероприятий. Среди наших спикеров были такие известные личности, как Стив Форбс, Ричард Бренсон, Джек Уэлч, Малкольм Гладуэлл, Нассим Талеб и другие',
);
const benefit_four = ref(
  // eslint-disable-next-line max-len
  'Все это позволило нам сделать этот курс максимально насыщенным важной информацией, которая необходима предпринимателям, совершающим свои первые бизнес-шаги на рынке США',
);

const benefit_icon = ref({
  icon: '/images/s-benefits/vector.png',
});
</script>

<style lang="scss" scoped>
@import './s-benefit';
</style>
