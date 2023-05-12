<template>
  <section class="relative h-[700px] items-center bg-white z-40">
    <UIContainer>
      <div class="w-[1171px] pt-[200px] m-auto text-center">
        <div class="w-[784px] m-auto">
          <h2 class="text-[48px] font-bold mb-[20px]">Some Excellent Features For You</h2>
          <p class="text-[18px] fornt-normal mb-[60px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at
            pretium purus pretium ligula
          </p>
        </div>
        <div class="flex flex-row justify-between">
          <div class="w-[369px] h-[258px] rounded-3xl bg-blue flex flex-col justify-start p-[28px]">
            <div class="w-[88px] h-[88px]">
              <img src="../assets/features-section/Icon_list-1.png" alt="list" />
            </div>

            <div class="text-[28px] font-Poppins text-white text-start">Preset List of Task</div>
            <p class="text-[18px] font-Poppins text-white text-start">
              Make bill payments easily using the wallet app
            </p>
          </div>

          <div
            class="w-[369px] h-[258px] rounded-3xl bg-purple flex flex-col justify-start p-[28px]"
          >
            <div class="w-[88px] h-[88px]">
              <img src="../assets/features-section/Icon-reminder-2.png" alt="list" />
            </div>

            <div class="text-[28px] font-Poppins text-white text-start">Reminder of Task</div>
            <p class="text-[18px] font-Poppins text-white text-start">
              Make bill payments easily using the wallet app
            </p>
          </div>

          <div
            class="w-[369px] h-[258px] rounded-3xl bg-orange-1 flex flex-col justify-start p-[28px]"
          >
            <div class="w-[88px] h-[88px]">
              <img src="../assets/features-section/Icon-complecation-3.png" alt="list" />
            </div>

            <div class="text-[28px] font-Poppins text-white text-start">Complecation Report</div>
            <p class="text-[18px] font-Poppins text-white text-start">
              Make bill payments easily using the wallet app
            </p>
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
</script>
