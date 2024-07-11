<template>
  <section class="s-what l-default">
    <h1 class="s-what__title f-h1">Что вы узнаете на вебинаре</h1>
    <div class="s-what__inner">
      <div v-for="card in cards" :key="card" class="s-what__card">
        <h3 class="s-what__card-title f-h3">{{ card.title }}</h3>
        <ul class="s-what__card-list f-xl-medium">
          <li v-for="item in card.list" :key="item" class="s-what__card-item">{{ item }}</li>
        </ul>
      </div>
      <div class="s-what__main s-what__card">
        <h3 class="f-h3">
          Зарегистрируйтесь на вебинар и получите гайд «3 трендовые ниши для открытия бизнеса в США»!
        </h3>
        <div class="s-what__main-content">
          <div class="s-what__main-content-left">
            <h5 class="f-h5">Только простой и понятный бизнес! Без блокчейн и AI!</h5>
            <a-button label="Скачать файл" color="blue" @click="moveTo('#form')" />
          </div>
          <img src="/images/s-what/what-bg.png" alt="" class="s-what__main-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '/composables/moveTo';

const cards = ref([
  {
    title: 'Открытие бизнеса в США',
    list: [
      'LLC или корпорация. Как и где регистрировать компанию?',
      'Что нужно для открытия счета в банке?',
      'Как вести бухгалтерию компании и платить налоги?',
      'Как найти специалиста и на что обращать внимание в резюме?',
      'Где искать клиентов и как вести переговоры с американцами?',
      'Где искать инвестиции?',
    ],
  },
  {
    title: 'Адаптация в США',
    list: [
      'В каком банке лучше открыть персональный счет?',
      'Как получить credit score даже без SSN?',
      'Как получить налоговый номер и подавать персональные налоги?',
      'Как устроить ребенка в детский сад и школу?',
      'Как выбрать медстраховку?',
      'Где искать врачей?',
    ],
  },
]);
</script>

<style>
@import './s-what.scss';
</style>
