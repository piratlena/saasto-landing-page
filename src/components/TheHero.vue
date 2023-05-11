<template>
  <section class="h-[1026px] bg-background-1">
    <UIContainer class="pt-[138px]">
      <div class="">
        <img src="../assets/hero/hero-clock.png" alt="clock" />
      </div>
      <div class="m-auto xl:w-[900px] mt-[-90px] items-center z-30">
        <h1 class="text-7xl font-bold leading-[5rem] text-center mb-6">
          A collaborative Time Tracking that you Need
        </h1>
        <p class="w-[595px] text-center m-auto mb-14">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium
          purus pretium ligula
        </p>

        <UIButton
          text="Start 14 Days Trial"
          type="primary"
          class="m-auto"
          :size="breakpoints.isXs ? 'small' : 'large'"
        />
      </div>
      <div class="relative">
        <img
          src="../assets/hero/hero-clipboard.png"
          alt="clipboard"
          class="absolute ml-[70%] mt-[-90px]"
        />
      </div>
    </UIContainer>
    <div class="flex justify-between mt-[-300px]">
      <div><img src="../assets/hero/hero-mobile-1.png" alt="mobile" class="" /></div>
      <div><img src="../assets/hero/hero-mobile-2.png" alt="mobile" /></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
import UIButton from './ui/UIButton.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const breakpoints = useBreakpoints();
</script>

<style lang="scss" scoped></style>
