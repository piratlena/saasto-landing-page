<template>
  <div
    class="rounded-3xl bg-blue flex-col justify-start w-[260px] p-[20px] mb-[20px] xs:w-[343px] h-[258px] md:w-[369px] md:p-[30px] mr-[20px]"
    :class="color"
  >
    <div class="w-[88px] h-[88px]">
      <img :src="image" alt="list" />
    </div>

    <div class="font-Poppins text-white text-start text-[20px] md:text-[28px]">
      {{ title }}
    </div>
    <p class="font-Poppins text-white text-start text-[16px] md:text-[18px]">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
