<template>
  <section class="bg-background-1 lg:h-auto">
    <UIContainer>
      <div class="flex flex-col lg:flex-row justify-between">
        <div
          class="lg:w-[720px] h-auto"
          data-aos="fade-down-right"
          data-aos-duration="700"
          data-aos-delay="1700"
        >
          <img class="w-full" src="../assets/analystics-section/mobile-group.png" alt="" />
        </div>
        <div
          class="p-[20px] flex flex-col sm:w-[600px] md:w-[700px] lg:pt-[188px]"
          data-aos="fade-down-left"
          data-aos-duration="700"
          data-aos-delay="1200"
        >
          <div class="text-xl font-semibold sm:text-5xl mb-[20px]">
            Analytics & Reporting Brackdown
          </div>
          <p class="text-lg text-light-gray mb-[20px]">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at
            pretium purus pretium ligula
          </p>
          <div class="flex flex-row">
            <IconClock class="mr-[24px] mb-[48px]" />
            <div class="w-[200px] h-auto sm:w-[365px]">
              <div class="text-base font-semibold sm:text-lg">Automatic event tracking</div>
              <p class="text-base text-light-gray sm:text-lg">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>

          <div class="flex flex-row">
            <IconContent class="mr-[24px] mb-[48px]" />
            <div class="w-[200px] h-auto sm:w-[365px]">
              <div class="text-base font-semibold sm:text-lg">Customizable dashboard</div>
              <p class="text-base text-light-gray sm:text-lg">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>

          <div class="flex flex-row">
            <IconDone class="mr-[24px] mb-[48px]" />
            <div class="w-[200px] h-auto sm:w-[365px]">
              <div class="ttext-base font-semibold sm:text-lg">Statistics retroactively</div>
              <p class="text-base text-light-gray sm:text-lg">
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
