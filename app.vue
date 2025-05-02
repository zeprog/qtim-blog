<template>
  <div class="font-sans">
    <Header />
    <main class="pt-[106px] pb-[143px] px-[112px]">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/tailwind.css'
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>