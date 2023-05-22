<template>
  <header class="flex h-20 items-center justify-between bg-background-1">
    <UIContainer class="pt-[40px]">
      <div class="flex h-20 items-center justify-between">
        <a href="/">
          <IconLogo />
        </a>

        <nav class="hidden items-center space-x-6 lg:flex">
          <ul class="flex space-x-6">
            <li class="flex cursor-pointer space-x-2 items-center">
              <span class="text-xl hover:text-primary">Demos</span>
            </li>
          </ul>
          <ul class="flex flex-column space-x-6">
            <li class="flex cursor-pointer space-x-2 items-center">
              <span class="text-xl hover:text-primary">Features</span>
            </li>
          </ul>
          <ul class="flex flex-column space-x-6">
            <li class="flex cursor-pointer space-x-2 items-center">
              <span class="text-xl hover:text-primary">Pricing</span>
            </li>
          </ul>
          <ul class="flex flex-column space-x-6">
            <li class="flex cursor-pointer space-x-2 items-center">
              <span class="text-xl hover:text-primary">Contacts</span>
            </li>
          </ul>
        </nav>
        <div class="hidden lg:flex items-center space-x-2">
          <UIButton link to="#" text="Log in" type="secondary" size="large" />
          <UIButton link to="#" text="Sign up" type="primary" size="large" />
        </div>
        <div
          ref="mobileNavBtn"
          class="relative h-4 w-8 flex flex-col justify-between cursor-pointer bg-transparent lg:hidden"
          @click="open = !open"
        >
          <span
            class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%+4px)] bg-primary transition-transform"
            :class="open ? '-translate-y-0 rotate-45' : ''"
          ></span>
          <span
            class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-primary transition-transform"
            :class="open ? 'scale-x-0' : ''"
          ></span>
          <span
            class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%-4px)] bg-primary transition-transform"
            :class="open ? '-translate-y-0 -rotate-45' : ''"
          ></span>
        </div>

        <Transition
          enter-from-class="translate-x-full"
          enter-active-class="transition ease-out duration-300"
          enter-to-class="translate-x-0"
          leave-from-class="translate-x-0"
          leave-active-class="transition ease-in duration-300"
          leave-to-class="translate-x-full"
        >
          <nav
            v-if="open"
            ref="mobileNav"
            class="fixed top-4 right-2 z-20 rounded bg-white shadow-lg lg:hidden p-[25px]"
          >
            <div class="flex justify-between">
              <ul class="flex w-[150px] flex-col items-start space-y-4">
                <li class="flex cursor pointer space-x-2"><a href="#">Demos</a></li>
                <li class="flex cursor pointer space-x-2"><a href="#">Features</a></li>
                <li class="flex cursor pointer space-x-2"><a href="#">Pricing</a></li>
                <li class="flex cursor pointer space-x-2"><a href="#">Contacts</a></li>
              </ul>

              <div
                class="relative h-4 w-8 flex flex-col justify-between cursor-pointer bg-transparent lg:hidden"
                @click="open = !open"
              >
                <span
                  class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%+4px)] bg-dark-1 transition-transform"
                  :class="open ? 'translate-y-0 rotate-45' : ''"
                ></span>
                <span
                  class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-dark-1 transition-transform"
                  :class="open ? 'scale-x-0' : ''"
                ></span>
                <span
                  class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%-4px)] bg-dark-1 transition-transform"
                  :class="open ? 'translate-y-0 -rotate-45' : ''"
                ></span>
              </div>
            </div>
          </nav>
        </Transition>
      </div>
    </UIContainer>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useBreakpoints } from '@/composables/useBreakpoints';
import UIContainer from '@/components/ui/UIContainer.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import UIButton from '@/components/ui/UIButton.vue';

const open = ref(false);
const mobileNavBtn = ref<HTMLElement | null>(null);
const mobileNav = ref<HTMLElement | null>(null);

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    if (!mobileNav.value || !mobileNavBtn.value) return;

    const includesMobileNav = event.composedPath().includes(mobileNav.value);
    const includesMobileNavBtn = event.composedPath().includes(mobileNav.value);

    if (open.value && !includesMobileNav && includesMobileNavBtn) {
      open.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
});

const breakpoints = useBreakpoints();

watch([open, breakpoints], ([open, breakpoints]) => {
  if (open && !breakpoints.isLg) {
    return (document.body.style.overflow = 'hidden');
  }
  document.body.style.overflow = 'auto';
});
</script>

<style lang="scss" scoped></style>
