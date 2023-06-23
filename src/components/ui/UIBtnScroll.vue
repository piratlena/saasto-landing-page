<template>
  <button
    ref="upButton"
    class="fixed invisible text-center bottom-8 right-4 bg-primary border-4 border-orange-1 text-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] md:right-8 md:bottom-8 transition-all duration-300 z-100"
    @click="scrollToTop"
  >
    <span class="material-symbols-outlined"> keyboard_arrow_up </span>
  </button>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const upButton = ref();

const handleScroll = () => {
  if (
    window.scrollY + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight / 4
  ) {
    upButton.value.classList.remove('invisible');
    console.log('scrolled');
  } else {
    upButton.value.classList.add('invisible');
    console.log('not scrolled');
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>
