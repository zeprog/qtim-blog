<template>
  <header class="flex items-center justify-between px-6 py-6 md:px-10 md:py-12 bg-white dark:bg-gray-900 relative">
    <Logo />
    <nav class="hidden md:flex items-center">
      <NavLink to="/works">{{ t('header.works') }}</NavLink>
      <NavLink to="/about" class="ml-[55px]">{{ t('header.about') }}</NavLink>
      <div class="ml-[91px] flex gap-4 items-center">
        <LangSwitcher />
        <button class="bg-black text-white rounded-full px-[34px] py-3 text-xl font-medium hover:bg-gray transition-colors">
          {{ t('header.lets-work') }}
        </button>
      </div>
    </nav>
    <button class="md:hidden z-50" @click="menuOpen = !menuOpen">
      <span class="block w-6 h-0.5 bg-black mb-1"></span>
      <span class="block w-6 h-0.5 bg-black mb-1"></span>
      <span class="block w-6 h-0.5 bg-black"></span>
    </button>
    <Transition name="slide">
      <div v-if="menuOpen" class="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl">
        <NavLink to="/works" @click="menuOpen = false">{{ t('header.works') }}</NavLink>
        <NavLink to="/about" @click="menuOpen = false">{{ t('header.about') }}</NavLink>
        <LangSwitcher />
        <button
          class="bg-black text-white rounded-full px-6 py-3 hover:bg-gray transition-colors"
          @click="menuOpen = false"
        >
          {{ t('header.lets-work') }}
        </button>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Logo from '~/components/common/Logo.vue'
import NavLink from '~/components/nav/NavLink.vue'
import LangSwitcher from '~/components/lang/LangSwitcher.vue'

const { t } = useI18n()
const menuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
}
</style>
