<template>
  <footer class="py-[126px]">
    <UIContainer>
      <div class="flex flex-row justify-between">
        <IconLogoVue />
        <div
          class="justify-items-between inline-grid w-[70%] grid-cols-[repeat(2,auto)] gap-y-14 text-xs sm:grid-cols-[repeat(3,auto)] lg:grid-cols-[[repeat(5,auto)]]"
        >
          <div v-for="linksGroup in footerLinks" :key="linksGroup.title">
            <h3 class="upercase text-lg font-semibold">{{ linksGroup.title }}</h3>
            <ul class="mt-9 flex flex-col items-start space-y-4">
              <li v-for="link in linksGroup.links" :key="link.title">
                <a :href="link.href" class="flex items-center space-x-2">
                  <img v-if="link.image" :src="link.image" :alt="link.title" />
                  <template v-if="link.icon">
                    <component :is="link.icon" />
                    <span>{{ link.title }}</span>
                  </template>
                  <span v-else>{{ link.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-dark-2 mt-[20px]"></div>
      <div class="w-full flex flex-row justify-between mt-[20px]">
        <div>
          <span class="mr-[30px] text-dark-2">Terms & condition</span>
          <span class="text-dark-2">Privacy policy</span>
        </div>
        <div class="text-dark-2">All Right Reserved @ plowv.com</div>
      </div>
    </UIContainer>
  </footer>
</template>

<script setup lang="ts">
import UIContainer from '../ui/UIContainer.vue';
import IconLogoVue from '../icons/IconLogo.vue';
import { footerLinks } from '../../data/footerLinks';
</script>

<style lang="scss" scoped></style>
