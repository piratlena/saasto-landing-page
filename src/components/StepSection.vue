<template>
  <section class="h-auto bg-background-1 relative lg:pt-[150px]">
    <UIContainer class="pt-[48px]">
      <div class="grid grid-cols-2 items-start lg:items-center">
        <div class="items-start mr-[15px] lg:w-[529px]">
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
        <div class="hidden lg:block">
          <img src="../assets/step-section/mobile-screen.png" alt="mobile" />
        </div>
      </div>
    </UIContainer>
    <div class="w-[100%] flex flex-row justify-between">
      <div class="invisible lg:visible translate-y-[-750px]">
        <img src="../assets/step-section/left-hand.png" alt="left-hand" />
      </div>
      <div class="translate-y-[-200px] lg:translate-y-[-300px]">
        <img src="../assets/step-section/right-hand.png" alt="right-hand" />
      </div>
    </div>
  </section>
</template>

<script setup>
import UIContainer from './ui/UIContainer.vue';
import UIButton from './ui/UIButton.vue';
import LogoAppStore from '../components/icons/LogoAppStore.vue';
import LogoGoogleStore from '../components/icons/LogoGoogleStore.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';

const breakpoints = useBreakpoints();
</script>

<style scoped></style>
