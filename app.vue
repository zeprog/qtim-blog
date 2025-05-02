<template>
  <div class="font-sans">
    <Header />
    <main class="px-4 sm:px-6 lg:px-[112px] pt-10 sm:pt-[80px] pb-[80px] sm:pb-[143px]">
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