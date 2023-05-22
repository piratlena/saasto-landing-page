<template>
  <section
    class="h-auto bg-background-2 pb-[30px] lg:bg-repeat-roundbg-[url(@/assets/tracker-work-section/bg.png)]"
  >
    <UIContainer>
      <div class="flex flex-col pt-[80px] pl-[0px] lg:flex-row lg:pt-[140px]">
        <div class="lg:w-[708px] flex flex-col">
          <div
            class="text-3xl font-semibold mb-[20px] md:text-5xl"
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="200"
          >
            How our Tracker work for you
          </div>
          <p
            class="text-lg text-light-gray mb-[64px]"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at
            pretium purus pretium ligula
          </p>

          <div
            class="flex flex-row"
            data-aos="zoom-in-up"
            data-aos-duration="700"
            data-aos-delay="1400"
          >
            <IconClock class="mr-[24px] mb-[48px]" />
            <div class="w-[365px]">
              <div class="text-lg font-semibold">Time Tracking</div>
              <p class="text-lg text-light-gray">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>

          <div
            class="flex flex-row lg:ml-[60px]"
            data-aos="zoom-in-up"
            data-aos-duration="700"
            data-aos-delay="1200"
          >
            <IconSandClock class="mr-[24px] mb-[48px]" />
            <div class="w-[365px]">
              <div class="text-lg font-semibold">Expenses</div>
              <p class="text-lg text-light-gray">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>

          <div
            class="flex flex-row"
            data-aos="zoom-in-up"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <IconWallet class="mr-[24px] mb-[48px]" />
            <div class="w-[365px]">
              <div class="text-lg font-semibold">Budget controlling</div>
              <p class="text-lg text-light-gray">
                Time Tracking is never been easier. Just let the stopwatch run
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col pt-[30px] items-center md:grid grid-cols-2 pt-[80px]">
          <div
            class="flex flex-col"
            data-aos="zoom-out-down"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <div
              class="w-[266px] h-[270px] bg-white rounded-xl shadow-lg flex flex-col justify-start p-[20px] mb-[40px]"
            >
              <p p class="text-lg text-light-gray">Total earning</p>
              <span class="text-xl font-semibold mb-[15px]">$12.855</span>

              <div class="mb-1 text-base font-medium dark:text-white">January</div>
              <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div class="bg-purple h-1.5 rounded-full" style="width: 45%"></div>
              </div>
              <div class="mb-1 text-base font-medium dark:text-white">February</div>
              <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div class="bg-pink h-1.5 rounded-full" style="width: 65%"></div>
              </div>
              <div class="mb-1 text-lg font-medium dark:text-white">March</div>
              <div class="w-full h-1.5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="h-1.5 bg-orange-1 rounded-full" style="width: 45%"></div>
              </div>
            </div>

            <div class="hidden md:block w-[230px] h-[320px] shadow-lg ml-[40px]">
              <UILineChart />
            </div>
          </div>

          <div
            class="shadow-lg p-[20px] bg-white rounded-xl w-[300px] h-auto md:w-[388px] md:h-[444px]"
          >
            <p class="text-dark-blue text-xl font-bold">Global Statistics</p>
            <UIRadialChartVue />
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
import IconClock from '@/components/icons/tracker-section/IconClock.vue';
import IconSandClock from '@/components/icons/tracker-section/IconSandClock.vue';
import IconWallet from '@/components/icons/tracker-section/IconWallet.vue';
import UIRadialChartVue from '@/components/ui/UIRadialChart.vue';
import UILineChart from '@/components/ui/UILineChart.vue';
</script>

<style lang="scss" scoped></style>
