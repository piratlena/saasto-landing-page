<template>
  <section class="h-[676px] bg-background-1 pt-[100px] relative">
    <UIContainer>
      <div class="grid grid-cols-2 items-center">
        <div class="w-[529px] items-start">
          <h3 class="text-5xl font-semibold pt-[140px] mb-[25px]">Get it now for free</h3>
          <p class="text-lg text-light-gray mb-[64px]">
            We are offering free debit cards once you sing up and order a card. we wont chargeyou
            for our debit card.
          </p>
          <div class="flex items-center space-x-2">
            <button
              class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer h-[76px] px-10 text-base bg-primary text-white hover:bg-orange-1"
            >
              <LogoAppStore />
            </button>

            <button
              class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer h-[76px] px-10 text-base bg-transparent text-white border-2 border-solid border-primary hover:bg-orange-1"
            >
              <LogoGoogleStore />
            </button>
          </div>
        </div>
        <div>
          <img src="../assets/step-section/mobile-screen.png" alt="mobile" />
        </div>
      </div>
    </UIContainer>
    <div class="w-[100%] flex flex-row justify-between">
      <div class="translate-y-[-600px]">
        <img src="../assets/step-section/left-hand.png" alt="left-hand" />
      </div>
      <div class="translate-y-[-300px]">
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
</script>

<style scoped></style>
