import { defineStore } from 'pinia';
import { useMovieStore } from './movieStore';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalAmount: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  },

  actions: {
    addItem(movieId) {
      const movieStore = useMovieStore();
      const movie = movieStore.movies.find(m => m.id === movieId);
      
      if (!movie || movie.stock === 0) return;

      const existingItem = this.items.find(item => item.id === movieId);
      
      if (existingItem) {
        if (existingItem.quantity < movie.stock) {
          existingItem.quantity++;
        }
      } else {
        this.items.push({
          id: movie.id,
          title: movie.title,
          price: movie.price,
          imageUrl: movie.imageUrl,
          quantity: 1
        });
      }
    },

    removeItem(movieId) {
      this.items = this.items.filter(item => item.id !== movieId);
    },

    updateQuantity(movieId, quantity) {
      const item = this.items.find(item => item.id === movieId);
      if (item) {
        const movieStore = useMovieStore();
        const movie = movieStore.movies.find(m => m.id === movieId);
        item.quantity = Math.min(Math.max(1, quantity), movie.stock);
      }
    },

    clearCart() {
      this.items = [];
    }
  }
});