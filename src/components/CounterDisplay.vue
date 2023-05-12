<template>
  <section class="w-[85%] h-[250px] mt-[-100px] rounded-tr-[100px] bg-white relative">
    <UIContainer>
      <div class="w-[700px] pt-[94px] m-auto">
        <div class="w-[100%] flex flex-row justify-between justify-items-start">
          <div class="flex flex-col">
            <div class="text-[48px] font-bold">15k+</div>
            <div class="text-[18px] font-normal text-light-gray">Active user</div>
          </div>
          <div class="flex flex-col">
            <div class="text-[48px] font-bold">30k</div>
            <div class="text-[18px] font-normal text-light-gray">Total Download</div>
          </div>

          <div class="flex flex-col justify-start">
            <div class="text-[48px] font-bold">10k</div>
            <div class="text-[18px] font-normal text-light-gray">Customer</div>
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
</script>

<style lang="scss" scoped></style>
