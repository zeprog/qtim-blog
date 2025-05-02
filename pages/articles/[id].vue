<template>
  <section class="px-4 sm:px-6 lg:px-0">
    <div v-if="store.isLoading" class="max-w-4xl mx-auto animate-pulse space-y-8">
      <div class="h-12 sm:h-[84px] w-2/3 bg-gray-light rounded"></div>
      <div class="h-64 sm:h-[480px] w-full bg-gray-light rounded-xl"></div>
      <div class="h-3 sm:h-4 w-20 bg-gray-light rounded"></div>
      <div class="h-4 sm:h-6 w-full bg-gray-light rounded"></div>
      <div class="h-4 sm:h-6 w-5/6 bg-gray-light rounded"></div>
      <div class="h-4 sm:h-6 w-4/6 bg-gray-light rounded"></div>
    </div>
    <div v-else-if="store.error" class="text-red-500 text-center text-lg">
      {{ store.error }}
    </div>
    <div v-else-if="store.article" class="max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-[84px] text-dark mb-12 sm:mb-[92px] leading-tight">
        {{ store.article.title }}
      </h1>
      <img
        :src="imageSrc"
        @error="onImageError"
        :alt="store.article.title"
        class="mb-12 sm:mb-20 w-full max-h-[320px] sm:max-h-[480px] object-cover"
      />
      <p class="text-base text-dark mb-6 sm:mb-8">About</p>
      <p class="text-xl sm:text-4xl text-dark leading-relaxed whitespace-pre-line">
        {{ store.article.description }}
      </p>
    </div>
  </section>
</template>


<script setup lang="ts">
import { useArticlesStore } from '~/stores/articles'
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const store = useArticlesStore()
const route = useRoute()
const imageSrc = ref('')

onMounted(() => {
  fetch()
})

watch(() => route.params.id, fetch)

function fetch() {
  const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  if (id) {
    store.fetchArticleById(id)
  }
}

watch(
  () => store.article,
  (article) => {
    if (article) imageSrc.value = article.image
  }
)

function onImageError() {
  imageSrc.value = 'https://placehold.co/640x480?text=Article+Image'
}
</script>