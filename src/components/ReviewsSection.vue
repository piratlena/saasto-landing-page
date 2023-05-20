<template>
  <section class="h-auto relative lg:pl-[56px] h-[500px]">
    <UIContainer>
      <div class="m-auto lg:mt-[120px]">
        <h3 class="text-3xl font-semibold mb-[20px] text-center lg:text-5xl">
          What our client says
        </h3>
        <p class="hidden lg:block text-lg text-light-gray mb-[40px] text-center">
          Growth your business with using us
        </p>
        <div class="flex flex-col mt-[30px] w-auto lg:flex-row w-[998px]">
          <div class="lg:mr-[20px]">
            <img src="../assets/reviews-section/review_1.png" alt="photo" class="" />
          </div>

          <div>
            <p class="text-lg text-light-gray mb-[20px]">
              Leading an organization is incredibly rewarding and equally humbling. Confidence and
              humility. Every success is built on lessons from mistakes made is incredibly rewarding
            </p>
            <p class="text-base font-bold text-light-gray mb-[20px]">Mila McSabbu</p>
            <p class="text-base text-light-gray mb-[20px]">Designer</p>
          </div>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from './ui/UIContainer.vue';
</script>

<style lang="scss" scoped></style>
