<template>
  <div
    class="w-[327px] h-auto pt-[30px] flex flex-col items-center border-solid border-[1px] border-primary rounded-[70px] mb-[30px] transition-all duration-1000 lg:w-[470px] lg:h-[608px] lg:pt-[64px] lg:border-2"
    :class="{ 'bg-primary transition-transform': text.id == flag }"
  >
    <div
      class="text-3xl font-semibold mb-[20px] lg:mb-[40px] text-5xl"
      :class="{ 'text-white': text.id == flag }"
    >
      {{ text.title }}
    </div>
    <div
      class="text-xl font-semibold text-primary mb-[20px] lg:mb-[40px]"
      :class="{ 'text-white': text.id == flag }"
    >
      {{ text.seat }}
    </div>
    <div
      class="text-xl font-semibold text-primary mb-[20px] lg:mb-[40px]"
      :class="{ 'text-white': text.id == flag }"
    >
      {{ text.project }}
    </div>
    <div
      class="text-lg font-medium text-light-gray mb-[30px] lg:mb-[60px]"
      :class="{ 'text-white': text.id == flag }"
    >
      <span
        class="text-5xl font-bold text-light-gray lg:text-[64px]"
        :class="{ 'text-white': text.id == flag }"
        >{{ text.price }}</span
      >{{ text.duration }}
    </div>
    <UIButton
      text="Start 14 Days Trial"
      type="active"
      size="large"
      class="mb-[30px] lg:h-[76px]"
      :class="{ 'bg-white': text.id == flag, 'text-[#FF553E]': text.id == flag }"
    />
  </div>
</template>

<script lang="ts">
import UIButton from './UIButton.vue';

export default {
  components: {
    UIButton,
  },
  props: {
    flag: {
      type: Boolean,
      required: true,
    },

    text: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
