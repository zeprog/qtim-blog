<template>
  <div class="space-y-6">
    <p class="text-base text-dark">{{ t('footer.there-project') }}</p>
    <h2 class="text-[48px] md:text-[112px] leading-tight text-dark">
      <span class="underline underline-offset-[6px] md:underline-offset-[10px] decoration-[1px]">Let’s work</span><br />
      <span>
        <span class="custom-underline">to</span>g<span class="custom-underline">ether</span>
      </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.custom-underline {
  position: relative;
  display: inline-block;
}

.custom-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: #101010;
  left: 0;
  bottom: 0.15em;
}

@media (min-width: 768px) {
  .custom-underline::after {
    bottom: 0.25em;
  }
}

.custom-underline:first-child::after {
  width: calc(100% - 10px);
}

.custom-underline:last-child::after {
  left: 10px;
  width: calc(100% - 10px);
}

@media (max-width: 768px) {
  .custom-underline:first-child::after {
    width: calc(100% - 5px);
  }

  .custom-underline:last-child::after {
    left: 5px;
    width: calc(100% - 5px);
  }
}
</style>