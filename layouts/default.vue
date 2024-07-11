<template>
  <div class="s-layout">
    <s-header :menu="headerMenu" />
    <main class="s-main">
      <NuxtPage @setMenuItems="setMenuItems" />
    </main>
    <s-footer />
  </div>
</template>

<script setup>
const headerMenu = ref([]);
const setMenuItems = (array) => {
  console.log(array);
  headerMenu.value = array;
};
</script>
