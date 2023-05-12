<template>
  <section
    class="h-[950px] bg-no-repeat bg-no-repeat lg:bg-[url(@/assets/analystics-section/background.png)]"
  >
    <UIContainer>
      <div class="flex flex-row justify-between">
        <div class="w-[720px]">
          <img src="../assets/analystics-section/mobile-group.png" alt="" />
        </div>
        <div class="w-[568px] flex flex-col pt-[188px]">
          <div class="text-5xl font-semibold mb-[20px]">Analytics & Reporting Brackdown</div>
          <p class="text-lg text-light-gray mb-[20px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at
            pretium purus pretium ligula
          </p>
          <div class="flex flex-row">
            <IconClock class="mr-[24px] mb-[48px]" />
            <div class="w-[365px]">
              <div class="text-lg font-semibold">Automatic event tracking</div>
              <p class="text-lg text-light-gray">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>

          <div class="flex flex-row">
            <IconContent class="mr-[24px] mb-[48px]" />
            <div class="w-[365px]">
              <div class="text-lg font-semibold">Customizable dashboard</div>
              <p class="text-lg text-light-gray">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>

          <div class="flex flex-row">
            <IconDone class="mr-[24px] mb-[48px]" />
            <div class="w-[365px]">
              <div class="text-lg font-semibold">Statistics retroactively</div>
              <p class="text-lg text-light-gray">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
import IconClock from './icons/analytics-section/IconClock.vue';
import IconContent from './icons/analytics-section/IconContent.vue';
import IconDone from './icons/analytics-section/IconDone.vue';
</script>

<style lang="scss" scoped></style>
