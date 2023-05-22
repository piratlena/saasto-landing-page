<template>
  <section class="h-auto relative lg:pl-[56px] lg:h-[500px]">
    <UIContainer>
      <div
        class="m-auto mt-[50px] lg:mt-[120px]"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="1900"
      >
        <h3 class="text-3xl font-semibold mb-[20px] text-center lg:text-5xl">
          What our client says
        </h3>
        <p class="hidden lg:block text-lg text-light-gray mb-[40px] text-center">
          Growth your business with using us
        </p>
        <swiper
          :pagination="{ clickable: true }"
          :modules="[Navigation, Pagination, Scrollbar, A11y]"
          :loop="true"
          :slidesPerView="'auto'"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="left-0"
        >
          <swiper-slide v-for="(slide, idx) in slideContent" :key="idx">
            <SlideItem
              :key="slide.id"
              :image="slide.image"
              :name="slide.name"
              :review="slide.review"
              :occupation="slide.occupation"
            />
          </swiper-slide>
        </swiper>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import UIContainer from '@/components/ui/UIContainer.vue';
import SlideItem from '@/components/reviews-section/SlideItem.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { slideContent } from '@/data/slideItem';

const swiperInstance = ref();

function onSwiper(swiper) {
  swiperInstance.value = swiper;
  console.log(swiper);
}

function onSlideChange() {
  console.log('slide change');
}
</script>

<style scoped></style>
