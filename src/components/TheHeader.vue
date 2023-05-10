<template>
  <header class="flex h-20 items-center justify-between bg-background-1">
    <UIContainer>
      <div class="flex h-20 items-center justify-between">
        <a href="/">
          <IconLogo />
        </a>

        <nav class="items-center space-x-6 lg:flex">
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

        <div class="flex items-center space-x-2">
          <UIButton link to="#" text="Log in" type="secondary" size="large" />
          <UIButton link to="#" text="Sign up" type="primary" size="large" />
        </div>
      </div>
    </UIContainer>
  </header>
</template>

<script setup lang="ts">
import UIContainer from './ui/UIContainer.vue';
import IconLogo from './icons/IconLogo.vue';
import UIButton from './ui/UIButton.vue';
</script>

<style lang="scss" scoped></style>
