<template>
  <div class="flex gap-2">
    <button
      v-for="p in visiblePages"
      :key="p"
      @click="$emit('update:page', p)"
      :class="[
        'w-11 h-11 rounded-xl flex items-center justify-center text-base font-medium',
        p === page ? 'bg-dark text-white' : 'bg-gray-light text-dark hover:bg-gray-dark-light transition-colors'
      ]"
    >
      <span class="relative top-[1px]">
        {{ p }}
      </span>
    </button>
    <button
      v-if="page < totalPages"
      @click="$emit('update:page', page + 1)"
      class="w-11 h-11 rounded-xl border border-gray-light hover:bg-gray-light flex items-center justify-center transition-colors"
    >
      <img class="w-6 h-6" src="~/assets/img/arrow-right.svg" alt="">
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  page: number
  totalPages: number
}>()

defineEmits<{
  (e: 'update:page', value: number): void
}>()

const visiblePages = computed(() => {
  const pages: number[] = []
  const maxVisible = 5
  const start = Math.max(1, Math.min(props.page - 2, props.totalPages - maxVisible + 1))
  const end = Math.min(start + maxVisible - 1, props.totalPages)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
</script>
