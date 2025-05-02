<template>
  <div class="relative inline-block">
    <button
      @click="show = !show"
      class="flex items-center justify-center rounded-full w-[54px] h-[54px] overflow-hidden border border-black-100 hover:scale-105 transition-transform"
    >
      <img :src="flags[locale]" alt="lang" class="w-6 h-6 object-cover" />
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        v-if="show"
        class="absolute top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 z-50 flex gap-2"
      >
        <button
          v-for="loc in otherLocales"
          :key="loc.code"
          @click="() => changeLocale(loc.code)"
          class="flex items-center justify-center rounded-full w-[52px] h-[52px] overflow-hidden border border-black-100 hover:scale-110 transition-transform"
        >
          <img :src="flags[loc.code]" :alt="loc.name" class="w-6 h-6 object-cover" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
import { useI18n } from 'vue-i18n'
// import { useLocale } from '#i18n' // ✅ Nuxt-specific хелпер
import { ref, computed } from 'vue'

import enFlag from '~/assets/img/gb.svg'
import ruFlag from '~/assets/img/ru.svg'

const show = ref(false)

const { locale, availableLocales } = useI18n()
// const { setLocale } = useLocale()

const changeLocale = (lang: 'en' | 'ru') => {
  $i18n.setLocale(lang)
}

const otherLocales = computed(() =>
  availableLocales
    .filter((code) => code !== locale.value)
    .map((code) => ({
      code,
      name: code === 'en' ? 'English' : 'Русский'
    }))
)

const flags: Record<string, string> = {
  en: enFlag,
  ru: ruFlag
}
</script>