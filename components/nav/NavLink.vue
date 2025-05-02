<template>
  <NuxtLink
    :to="to"
    class="transition-colors"
    exact-active-class="underline"
  >
    <span class="text-dark hover:text-gray transition-colors duration-200 text-xl">
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<style>

</style>