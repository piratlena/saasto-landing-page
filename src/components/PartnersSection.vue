<template>
  <section class="h-[851px] bg-background-2 pl-[76px] pt-[126px]">
    <div class="w-[799px] h-[651px] grid grid-cols-2">
      <img src="../assets/partners-section/icon-1.png" alt="logo" />
      <img src="../assets/partners-section/icon-4.png" alt="logo" class="mb-[56px]" />
      <img src="../assets/partners-section/icon-2.png" alt="logo" class="mb-[56px]" />
      <img src="../assets/partners-section/icon-5.png" alt="logo" class="mb-[56px]" />
      <img src="../assets/partners-section/icon-3.png" alt="logo" class="mb-[56px]" />
    </div>
    <UIContainer>
      <div class="absolute w-[525px] items-start ml-[30%] translate-y-[-500px]">
        <h3 class="text-5xl font-semibold mb-[20px]">See Our trusted partners</h3>
        <p class="text-lg text-light-gray mb-[20px]">
          Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict altera legimu. Me vita de
          lege ndos expet end is ad. Ex mei omita aliu mi ando
        </p>
        <UIButton text="Get Started" type="active" size="large" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from './ui/UIContainer.vue';
import UIButton from './ui/UIButton.vue';
</script>

<style lang="scss" scoped></style>
