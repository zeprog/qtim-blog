<template>
  <footer class="bg-purple text-black px-[112px] py-[140px] relative overflow-hidden">
    <div class="grid grid-cols-[4fr_2fr] gap-20 mb-[140px]">
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