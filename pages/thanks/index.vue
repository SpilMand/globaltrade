<template>
  <section class="thanks l-default">
    <a-logo-full color="white" subcolor="#0d2ec8" />
    <h1 class="f-h1-banner">Спасибо!</h1>
    <h3 class="thanks__subtitle f-h3">Логин и пароль к личному кабинету мы отправили вам на указанную почту</h3>
    <NuxtLink to="/" class="thanks__btn">
      <a-button label="На главную" text-size="f-xl-medium" color="black" />
    </NuxtLink>
    <img src="/images/thanks/thanks-bg.svg" class="thanks__bg" />
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'thanks-layout',
});
</script>

<style>
@import './style.scss';
</style>
