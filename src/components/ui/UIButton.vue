<template>
  <a
    v-if="link"
    :href="to"
    class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer"
    :class="[
      type === 'primary' ? 'bg-primary text-white hover:bg-orange-1' : '',
      type === 'secondary'
        ? 'hover border border-dark-1 bg-transparent text-dark-1 hover:border-primary  hover:text-primary'
        : '',
      size === 'small' ? 'h-8 px-4 text-xs' : '',
      size === 'large' ? 'h-11 px-10 text-base' : '',
    ]"
    >{{ text }}</a
  >
  <button
    v-else
    class="flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer"
    :class="[
      type === 'primary' ? 'bg-primary text-white hover:bg-orange-1' : '',
      type === 'secondary'
        ? 'hover border border-dark-1 bg-transparent text-dark-1 hover:border-primary  hover:text-primary'
        : '',
      type === 'active'
        ? 'bg-white border-[1px] text-primary border-solid border-primary hover:border-primary  hover:text-orange-1 hover:bg-orange-1 hover:text-white'
        : '',
      size === 'small' ? 'h-8 px-4 text-xs' : '',
      size === 'large' ? 'h-[76px] px-10 text-base' : '',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'primary' | 'secondary' | 'active'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'small',
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
});
</script>
