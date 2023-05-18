<template>
  <section class="relative items-center bg-white z-40 lg:h-[700px]">
    <UIContainer>
      <div class="m-auto sm:w-[600px] lg:w-[784px]">
        <h2 class="text-3xl font-bold mb-[20px] text-center md:text-[48px] leading-12">
          Some Excellent Features For You
        </h2>
        <p class="text-lg fornt-normal mb-[60px] text-center">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium
          purus pretium ligula
        </p>
      </div>
      <div class="items-center flex flex-col justify-center lg:flex-row">
        <div
          class="rounded-3xl bg-blue flex-col justify-start w-[260px] p-[20px] mb-[20px] xs:w-[343px] h-[258px] md:w-[369px] p-[28px] p-[30px] mr-[20px]"
        >
          <div class="w-[88px] h-[88px]">
            <img src="../assets/features-section/Icon_list-1.png" alt="list" />
          </div>

          <div class="font-Poppins text-white text-start text-[20px] md:text-[28px]">
            Preset List of Task
          </div>
          <p class="font-Poppins text-white text-start text-[16px] md:text-[18px]">
            Make bill payments easily using the wallet app
          </p>
        </div>

        <div
          class="rounded-3xl bg-purple flex-col justify-start w-[260px] p-[20px] mb-[20px] xs:w-[343px] h-[258px] md:w-[369px] p-[28px] p-[30px] mr-[20px]"
        >
          <div class="w-[88px] h-[88px]">
            <img src="../assets/features-section/Icon-reminder-2.png" alt="list" />
          </div>

          <div class="font-Poppins text-white text-start text-[20px] md:text-[28px]">
            Reminder of Task
          </div>
          <p class="font-Poppins text-white text-start text-[16px] md:text-[18px]">
            Make bill payments easily using the wallet app
          </p>
        </div>

        <div
          class="rounded-3xl bg-orange-1 flex-col justify-start w-[260px] p-[20px] mb-[20px] xs:w-[343px] h-[258px] md:w-[369px] p-[28px] p-[30px]"
        >
          <div class="w-[88px] h-[88px]">
            <img src="../assets/features-section/Icon-complecation-3.png" alt="list" />
          </div>

          <div class="font-Poppins text-white text-start text-[20px] md:text-[28px]">
            Complecation Report
          </div>
          <p class="font-Poppins text-white text-start text-[16px] md:text-[18px]">
            Make bill payments easily using the wallet app
          </p>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
</script>
