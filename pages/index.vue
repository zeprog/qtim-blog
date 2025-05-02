<template>
  <section>
    <h1 class="text-[84px] text-dark mb-12">Articles</h1>
    <div
      v-if="articlesStore.isLoading"
      class="grid gap-16 md:grid-cols-2 xl:grid-cols-4 mb-[60px]"
    >
      <div
        v-for="n in articlesPerPage"
        :key="n"
        class="animate-pulse space-y-3"
      >
        <div class="bg-gray-light h-64 w-full rounded-xl"></div>
        <div class="h-4 bg-gray-light w-1/2 rounded"></div>
        <div class="h-6 bg-gray-light w-3/4 rounded"></div>
        <div class="h-4 bg-gray-light w-full rounded"></div>
      </div>
    </div>
    <div v-else-if="articlesStore.error" class="text-red-500">
      {{ articlesStore.error }}
    </div>
    <TransitionGroup
      v-else
      name="lazy-fade"
      tag="div"
      class="grid gap-16 md:grid-cols-2 xl:grid-cols-4 mb-[60px]"
    >
      <ArticleCard
        v-for="article in paginatedArticles"
        :key="article.id"
        :article="article"
      />
    </TransitionGroup>
    <Pagination
      v-model:page="currentPage"
      :total-pages="totalPages"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArticleCard from '~/components/articles/ArticleCard.vue'
import Pagination from '~/components/common/Pagination.vue'
import { useArticlesStore } from '~/stores/articles'

const articlesStore = useArticlesStore()
const currentPage = ref(1)
const articlesPerPage = 8

const totalPages = computed(() =>
  Math.ceil(articlesStore.articles.length / articlesPerPage)
)

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage
  return articlesStore.articles.slice(start, start + articlesPerPage)
})

onMounted(() => {
  articlesStore.fetchArticles()
})
</script>

<style scoped>
.lazy-fade-enter-active {
  transition: opacity 0.6s ease;
}
.lazy-fade-enter-from {
  opacity: 0;
}
.lazy-fade-enter-to {
  opacity: 1;
}
</style>