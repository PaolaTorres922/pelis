import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movies', {
  state: () => ({
    movies: [
      {
        id: '1',
        title: 'Dune: Parte Dos',
        price: 349.99,
        category: 'Ciencia Ficción',
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800',
        description: 'La épica conclusión de la saga de ciencia ficción.',
        isNew: true,
        isFeatured: true,
        stock: 15,
        rating: 4.8
      },
      {
        id: '2',
        title: 'Pobres Criaturas',
        price: 299.99,
        category: 'Drama',
        imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
        description: 'Una historia única sobre el descubrimiento personal.',
        isNew: true,
        isFeatured: true,
        stock: 10,
        rating: 4.5
      },
      // Más películas por categoría...
    ],
    categories: [
      'Acción',
      'Aventura',
      'Comedia',
      'Drama',
      'Terror',
      'Ciencia Ficción',
      'Romance'
    ]
  }),

  getters: {
    featuredMovies: (state) => state.movies.filter(movie => movie.isFeatured),
    newReleases: (state) => state.movies.filter(movie => movie.isNew),
    getMoviesByCategory: (state) => (category) => 
      state.movies.filter(movie => movie.category === category)
  },

  actions: {
    addMovie(movie) {
      this.movies.push(movie);
    },
    removeMovie(id) {
      this.movies = this.movies.filter(movie => movie.id !== id);
    },
    updateMovie(id, updates) {
      const index = this.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        this.movies[index] = { ...this.movies[index], ...updates };
      }
    }
  }
});