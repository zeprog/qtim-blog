<template>
  <header class="flex items-center justify-between px-10 py-12 bg-white dark:bg-gray-900">
    <Logo />
    <nav class="flex items-center">
      <NavLink to="/works">{{ t('header.works') }}</NavLink>
      <NavLink to="/about" class="ml-[55px]">{{ t('header.about') }}</NavLink>
      <div class="ml-[91px] flex gap-4 items-center">
        <LangSwitcher />
        <button
          class="bg-black text-white rounded-full px-[34px] py-3 text-xl font-medium hover:bg-gray transition-colors"
        >
          {{ t('header.lets-work') }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Logo from '~/components/common/Logo.vue'
import NavLink from '~/components/nav/NavLink.vue'
import LangSwitcher from '~/components/lang/LangSwitcher.vue'

const { t } = useI18n()
</script>
