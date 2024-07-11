<template>
  <footer class="s-footer">
    <div class="l-default">
      <div class="s-footer__box">
        <div v-if="width <= 767" class="s-footer__logo">
          <a-logo-short />
        </div>
        <div v-else class="s-footer__logo">
          <a-logo-full />
        </div>
        <a href="mailto:info@sglobaltrade.com" class="s-footer__text s-footer__mail f-s-regular">
          info@sglobaltrade.com
        </a>
        <p class="s-footer__text f-s-regular">© {{ date.getFullYear() }} Synergy. Все права защищены</p>
        <p class="s-footer__text f-s-regular">Политика конфиденциальности</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
const { width } = useWindowSize();

const date = new Date();
</script>

<style lang="scss">
@import './s-footer.scss';
</style>
