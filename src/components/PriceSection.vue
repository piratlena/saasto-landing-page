<template>
  <section class="h-auto bg-background-1 items-center">
    <UIContainer class="pt-[30px]">
      <h3 class="text-3xl md:text-5xl font-semibold text-center mb-[25px]">
        Flexible work, Simple Price
      </h3>
      <p class="text-lg text-light-gray mb-[64px] text-center">
        Growth your business with using us
      </p>
      <div class="w-[297px] flex flex-row justify-between m-auto">
        <div class="text-2xl font-medium">Monthly</div>
        <label class="theme-switch">
          <input type="checkbox" @click="setActiveMode" />
          <div class="slider round"></div>
        </label>
        <div class="text-2xl font-medium">Yearly</div>
      </div>

      <div class="flex flex-col items-center lg:flex-row justify-between pt-[100px]">
        <UIPriceCard v-for="text in priceText" :key="text.id" :flag="activeMode" :text="text" />
      </div>
    </UIContainer>
  </section>
</template>

<script lang="ts">
import UIContainer from './ui/UIContainer.vue';
import UIButton from './ui/UIButton.vue';
import UIPriceCard from './ui/UIPriceCard.vue';
export default {
  components: {
    UIContainer,
    UIPriceCard,
  },
  data() {
    return {
      activeMode: false,
      activeModePremium: !this.activeMode,

      priceText: [
        {
          id: 0,
          title: 'Free',
          seat: '1 seat',
          project: '1 project',
          price: '0',
          duration: '/forever',
        },
        {
          id: 1,
          title: 'Premium',
          seat: 'unlimited Seat',
          project: 'Unlimited project',
          price: '30',
          duration: '/forever',
        },
      ],
    };
  },
  methods: {
    setActiveMode() {
      this.activeMode = !this.activeMode;
    },
  },
};
</script>

<style scoped>
.theme-switch {
  display: inline-block;
  height: 40px;
  position: relative;
  width: 84px;
}

.theme-switch input {
  display: none;
}
.slider {
  background: #fa865f;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider::before {
  background: #fff;
  bottom: 4px;
  content: '';
  height: 30px;
  left: 8px;
  position: absolute;
  transition: 0.4s;
  width: 30px;
}

input:checked + .slider {
  background: #ff553e;
}

input:checked + .slider::before {
  transform: translateX(38px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round::before {
  border-radius: 50%;
}
</style>
