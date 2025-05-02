<template>
  <NuxtLink
    :to="`/articles/${article.id}`"
    class="group relative block cursor-pointer transition-transform duration-300 hover:-translate-y-5"
  >
    <div class="overflow-hidden mb-6">
      <img
        :src="imageSrc"
        :alt="article.title"
        @error="onImageError"
        class="w-full h-64 object-cover transition-transform duration-300"
      />
    </div>
    <p class="text-gray-700 mb-6 line-clamp-3 text-xl">
      {{ article.description }}
    </p>
    <a
      href="#"
      class="absolute bottom-[-10px] text-xl text-purple font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      Read more
    </a>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  article: {
    id: number
    title: string
    description: string
    image: string
    createdAt: string
  }
}>()

const imageSrc = ref(props.article.image)

const onImageError = () => {
  imageSrc.value = 'https://placehold.co/640x480?text=Article+Image'
}
</script>
