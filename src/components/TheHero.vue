<template>
  <section class="h-auto bg-background-1 xs:h-[500px] sm:h-[600px] lg:h-[1026px]">
    <UIContainer class="pt-[50px] pb-[85px] lg:pt-[138px]">
      <div
        class="invisible xs:visible h-[75px] w-[65px] sm:w-[135px] sm:h-[157px]"
        data-aos="fade-down-right"
        data-aos-duration="500"
      >
        <img src="../assets/hero/hero-clock.png" alt="clock " />
      </div>
      <div
        class="relative w-[250px] m-auto items-center z-10 2xl:w-[900px] mt-[-90px] sm:w-[300px] md:w-[400px] lg:w-[500px] lg:pt-[200px] xl:w-[600px]"
      >
        <h1
          class="text-3xl leading-8 font-bold text-center mb-6 sm:text-4xl md:text-5xl md:leading-[3.5rem] lg:leading-[5.5rem] lg:text-6xl xl:text-7xl 2xl:text-7xl"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="700"
        >
          A collaborative Time Tracking that you Need
        </h1>
        <p
          class="text-center m-auto mb-14 text-lg lg:text-3xl"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="1000"
        >
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium
          purus pretium ligula
        </p>

        <UIButton
          text="Start 14 Days Trial"
          type="primary"
          class="m-auto"
          :size="breakpoints.isXs ? 'small' : 'large'"
          data-aos="zoom-in-up"
          data-aos-duration="700"
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
      <div data-aos="fade-down-right" data-aos-duration="700">
        <img src="../assets/hero/hero-mobile-1.png" alt="mobile" class="z-0" />
      </div>
      <div data-aos="fade-down-left" data-aos-duration="700">
        <img src="../assets/hero/hero-mobile-2.png" alt="mobile" class="z-0" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '@/components/ui/UIContainer.vue';
import UIButton from '@/components/ui/UIButton.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const breakpoints = useBreakpoints();
</script>

<style lang="scss" scoped></style>
