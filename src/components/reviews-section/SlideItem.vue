<template>
  <div class="flex flex-col mt-[30px] m-auto mb-[20px] lg:flex-row lg:w-[800px]">
    <div class="lg:mr-[20px]">
      <img :src="image" alt="photo" class="photo" />
    </div>

    <div>
      <p class="text-lg text-light-gray mb-[20px]">
        {{ review }}
      </p>
      <p class="text-base font-bold text-light-gray mb-[20px]">{{ name }}</p>
      <p class="text-base text-light-gray mb-[20px]">{{ occupation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
