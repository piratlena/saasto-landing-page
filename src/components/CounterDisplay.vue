<template>
  <section
    class="relative w-full bg-white items-center h-auto pt-[94px] mt-[0] lg:w-[85%] lg:mt-[-100px] rounded-tr-[100px]"
  >
    <UIContainer>
      <div
        class="flex flex-col justify-center md:flex-row"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="1500"
      >
        <div class="flex flex-col w-full h-[174px] md:w-[109px] mr-[180px]">
          <div class="text-[48px] font-bold text-center">15k+</div>
          <div class="text-[18px] font-normal text-light-gray text-center">Active user</div>
        </div>
        <div class="flex flex-col w-full h-[174px] md:w-[109px] mr-[180px]">
          <div class="text-[48px] font-bold text-center">30k</div>
          <div class="text-[18px] font-normal text-light-gray text-center">Total Download</div>
        </div>

        <div class="flex flex-col w-full h-[174px] md:w-[109px]">
          <div class="text-[48px] font-bold text-center">10k</div>
          <div class="text-[18px] font-normal text-light-gray text-center">Customer</div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
</script>

<style lang="scss" scoped></style>
