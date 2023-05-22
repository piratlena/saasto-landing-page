<template>
  <main>
    <TheHeader />
    <TheHero />
    <CounterDisplay />
    <FeaturesSection />
    <AnalyticsSection />
    <TrackerWorkSection />
    <PriceSection />
    <PartnersSection />
    <ReviewsSection />
    <StepSection />
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import TheHeader from '@/components/TheHeader.vue';
import TheHero from '@/components/TheHero.vue';
import CounterDisplay from '@/components/CounterDisplay.vue';
import FeaturesSection from '@/components/features-section/FeaturesSection.vue';
import AnalyticsSection from '@/components/AnalyticsSection.vue';
import TrackerWorkSection from '@/components/TrackerWorkSection.vue';
import PriceSection from '@/components/PriceSection.vue';
import PartnersSection from '@/components/PartnersSection.vue';
import ReviewsSection from '@/components/reviews-section/ReviewsSection.vue';
import StepSection from '@/components/StepSection.vue';
import TheFooter from '@/components/the-footer/TheFooter.vue';

onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100,
  });
});
</script>

<style scoped></style>
