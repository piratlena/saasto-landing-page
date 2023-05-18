<template>
  <section class="h-auto bg-background-1 xs:h-[500px] sm:h-[600px] lg:h-[1026px]">
    <UIContainer class="pt-[138px] pb-[85px]">
      <div class="invisible xs:visible h-[75px] w-[65px] sm:w-[135px] h-[157px]">
        <img src="../assets/hero/hero-clock.png" alt="clock " />
      </div>
      <div
        class="relative w-[250px] m-auto items-center z-10 2xl:w-[900px] mt-[-90px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
      >
        <h1
          class="text-3xl leading-6 2xl:text-7xl font-bold leading-[5rem] text-center mb-6 sm:text-4xl md:text-5xl xl:text-7xl"
        >
          A collaborative Time Tracking that you Need
        </h1>
        <p class="text-center m-auto mb-14 text-lg">
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
      <div class="lg:invisible xxs:invisible sm:visible">
        <img
          src="../assets/hero/hero-clipboard.png"
          alt="clipboard"
          class="absolute ml-[60%] mt-[-90px]"
        />
      </div>
    </UIContainer>
    <div class="hidden lg:flex justify-between mt-[-200px] relative z-0">
      <div><img src="../assets/hero/hero-mobile-1.png" alt="mobile" class="z-0" /></div>
      <div><img src="../assets/hero/hero-mobile-2.png" alt="mobile" class="z-0" /></div>
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
