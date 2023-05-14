<template>
  <div
    class="w-[470px] h-[608px] border-solid border-2 border-primary rounded-[70px] flex flex-col justify-between pt-[64px] pb-[48px] pl-[115px] pr-[115px] items-center"
    :class="{ 'bg-primary transition-transform': text.id == flag }"
  >
    <div class="text-5xl font-semibold" :class="{ 'text-white': text.id == flag }">
      {{ text.title }}
    </div>
    <div class="text-xl font-semibold text-primary" :class="{ 'text-white': text.id == flag }">
      {{ text.seat }}
    </div>
    <div class="text-xl font-semibold text-primary" :class="{ 'text-white': text.id == flag }">
      {{ text.project }}
    </div>
    <div class="text-lg font-medium text-light-gray" :class="{ 'text-white': text.id == flag }">
      <span
        class="text-[64px] font-bold text-light-gray"
        :class="{ 'text-white': text.id == flag }"
        >{{ text.price }}</span
      >{{ text.duration }}
    </div>
    <UIButton
      text="Start 14 Days Trial"
      type="active"
      size="large"
      class="lg:h-[76px]"
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
