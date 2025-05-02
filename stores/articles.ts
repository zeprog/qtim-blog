import { defineStore } from 'pinia'
import axios from 'axios'

interface Article {
  id: number
  title: string
  description: string
  image: string
  createdAt: string
}

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [] as Article[],
    article: null as Article | null,
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async fetchArticles() {
      this.isLoading = true
      this.error = null

      try {
        const { data } = await axios.get<Article[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
        this.articles = data
      } catch (err: any) {
        this.error = err.message || 'Failed to load articles'
      } finally {
        this.isLoading = false
      }
    },
    async fetchArticleById(id: string | number) {
      this.isLoading = true
      this.error = null
      this.article = null

      try {
        const { data } = await axios.get<Article>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
        this.article = data
      } catch (err: any) {
        this.error = err.message || 'Failed to load article'
      } finally {
        this.isLoading = false
      }
    }
  }
})