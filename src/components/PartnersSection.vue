<template>
  <section
    class="h-auto bg-background-2 pl-[20px] pr-[20px] pt-[50px] lg:pt-[126px] lg:pl-[76px] lg:pr-[76px]"
  >
    <div class="w-full flex flex-col lg:flex-row">
      <div class="grid grid-cols-2 mb-[30px] lg:w-[50%]">
        <img src="../assets/partners-section/icon-1.png" alt="logo" />
        <img src="../assets/partners-section/icon-4.png" alt="logo" class="lg:mb-[56px]" />
        <img src="../assets/partners-section/icon-2.png" alt="logo" class="lg:mb-[56px]" />
        <img src="../assets/partners-section/icon-5.png" alt="logo" class="lg:mb-[56px]" />
        <img
          src="../assets/partners-section/icon-3.png"
          alt="logo"
          class="hidden lg:block mb-[56px]"
        />
      </div>

      <div
        class="items-start w-full lg:w-[525px]"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="800"
      >
        <h3 class="text-3xl font-semibold md:text-5xl mb-[20px]">See Our trusted partners</h3>
        <p class="text-lg text-light-gray mb-[20px]">
          Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict altera legimu. Me vita de
          lege ndos expet end is ad. Ex mei omita aliu mi ando
        </p>
        <UIButton text="Get Started" type="active" size="large" class="mb-[30px]" />
      </div>
    </div>
  </section>
</template>

<script setup>
import UIButton from '@/components/ui/UIButton.vue';
</script>

<style lang="scss" scoped></style>
