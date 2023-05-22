<template>
  <section class="relative items-center bg-white z-40 lg:h-[700px]">
    <UIContainer>
      <div
        class="m-auto sm:w-[600px] md:pt-[200px] lg:w-[784px]"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="1500"
      >
        <h2 class="text-3xl font-bold mb-[20px] text-center md:text-[48px] md:leading-12">
          Some Excellent Features For You
        </h2>
        <p class="text-lg fornt-normal mb-[60px] text-center">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium
          purus pretium ligula
        </p>
      </div>
      <div class="items-center flex flex-col justify-center lg:flex-row">
        <FeaturesCard
          v-for="(contentItem, index) in featuresContent"
          :key="contentItem.id"
          :title="contentItem.title"
          :description="contentItem.description"
          :image="contentItem.image"
          :color="contentItem.color"
          data-aos="flip-left"
          data-aos-duration="1000"
          :data-aos-delay="200 * index"
        />
      </div>
    </UIContainer>
  </section>
</template>

<script setup lang="ts">
import UIContainer from '../ui/UIContainer.vue';
import FeaturesCard from './FeaturesCard.vue';

import { featuresContent } from '@/data/featuresCard';
</script>
