<template>
  <footer class="bg-purple text-black px-6 py-[80px] md:px-[112px] md:py-[140px] relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-20 mb-[100px] md:mb-[140px]">
      <FooterLeft />
      <FooterRight />
    </div>
    <FooterBottom />
  </footer>
</template>

<script setup lang="ts">
import FooterLeft from '~/components/footer/FooterLeft.vue'
import FooterRight from '~/components/footer/FooterRight.vue'
import FooterBottom from '~/components/footer/FooterBottom.vue'
</script>