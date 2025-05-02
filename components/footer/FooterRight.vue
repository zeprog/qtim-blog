<template>
  <div class="space-y-10 text-base text-dark">
    <div>
      <p class="mb-2 font-medium">{{ t('footer.for-all-questions') }}</p>
      <p>
        <a href="tel:+79202780068">+7 (920) 278—00—68</a><br />
        <a href="mailto:qtim@agency.com">qtim@agency.com</a>
      </p>
    </div>

    <div>
      <p class="mb-2 font-medium">{{ t('footer.office-russia') }}</p>
      <p class="mb-1">139 Ruben Station Lake<br />Drew, NM 52678</p>
      <a href="#">
        <TelegramIcon />
      </a>
    </div>

    <div>
      <p class="mb-2 font-medium">{{ t('footer.office-dubai') }}</p>
      <p class="mb-1">139 Ruben Station Lake<br />Drew, NM 52678</p>
      <a href="#">
        <TelegramIcon />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TelegramIcon from '~/components/icons/TelegramIcon.vue';

const { t } = useI18n()
</script>