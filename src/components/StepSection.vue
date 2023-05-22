<template>
  <section class="h-auto bg-background-1 pb-[20px] relative lg:pt-[150px] lg:pb-[0px]">
    <UIContainer class="pt-[48px]">
      <div class="grid grid-cols-2 items-start lg:items-center">
        <div
          class="items-start mr-[15px] lg:w-[529px]"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="1900"
        >
          <h3 class="text-2xl font-semibold lg:text-5xl mb-[25px]">Get it now for free</h3>
          <p class="text-lg text-light-gray mb-[30px] lg:mb-[64px]">
            We are offering free debit cards once you sing up and order a card. we wont chargeyou
            for our debit card.
          </p>
          <div class="flex flex-col justify-start items-start lg:flex-row">
            <button
              class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer text-base bg-primary text-white hover:bg-orange-1 mb-[10px] mr-[10px]"
              :class="breakpoints.isXs ? 'h-[40px] w-[100px]' : 'w-[180px] h-[76px]'"
            >
              <LogoAppStore :class="breakpoints.isXs ? 'w-[80px]' : ''" />
            </button>

            <button
              class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer text-base bg-transparent text-white border-[1px] border-solid border-primary hover:bg-orange-1"
              :class="breakpoints.isXs ? 'h-[40px] w-[100px]' : 'w-[180px] h-[76px]'"
            >
              <LogoGoogleStore :class="breakpoints.isXs ? 'w-[80px]' : ''" />
            </button>
          </div>
        </div>
        <div
          class="hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="1000"
        >
          <img src="../assets/step-section/mobile-screen.png" alt="mobile" />
        </div>
      </div>
    </UIContainer>
    <div class="absolute w-[100%] flex flex-row justify-between translate-y-[-750px]">
      <div class="invisible lg:visible">
        <img src="../assets/step-section/left-hand.png" alt="left-hand" />
      </div>
      <div class="translate-y-[450px] md:translate-y-[450px]">
        <img src="../assets/step-section/right-hand.png" alt="right-hand" />
      </div>
    </div>
  </section>
</template>

<script setup>
import UIContainer from '@/components/ui/UIContainer.vue';
import LogoAppStore from '@/components/icons/LogoAppStore.vue';
import LogoGoogleStore from '@/components/icons/LogoGoogleStore.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const breakpoints = useBreakpoints();
</script>

<style scoped></style>
