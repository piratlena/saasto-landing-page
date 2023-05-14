<template>
  <section class="h-[768px] relative pl-[56px]">
    <UIContainer>
      <div class="w-[998px] m-auto mt-[120px]">
        <h3 class="text-5xl font-semibold mb-[20px] text-center">What our client says</h3>
        <p class="text-lg text-light-gray mb-[20px] text-center">
          Growth your business with using us
        </p>
        <div class="flex flex-row mt-[60px]">
          <div class="w-[298px] h-[379px] mr-[20px]">
            <img src="../assets/reviews-section/photo-client.png" alt="photo" />
          </div>

          <div>
            <p class="text-lg text-light-gray mb-[20px] mt-[70px]">
              Leading an organization is incredibly rewarding and equally humbling. Confidence and
              humility. Every success is built on lessons from mistakes made is incredibly rewarding
            </p>
            <p class="text-base font-bold text-light-gray mb-[20px]">Mila McSabbu</p>
            <p class="text-base text-light-gray mb-[20px]">Designer</p>
          </div>
        </div>
      </div>
    </UIContainer>
    <div class="translate-y-[-600px]">
      <img src="../assets/reviews-section/icon-like.png" alt="like" />
    </div>
    <div class="translate-y-[-380px] translate-x-1/4">
      <img src="../assets/reviews-section/icon-chat.png" alt="chat" />
    </div>
    <div class="translate-x-3/4 translate-y-[-500px]">
      <img src="../assets/reviews-section/icon-emoji.png" alt="emoji" />
    </div>
  </section>
</template>

<script setup>
import UIContainer from './ui/UIContainer.vue';
</script>

<style lang="scss" scoped></style>
