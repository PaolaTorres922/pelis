<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
    <NavBar 
      @open-cart="isCartOpen = true"
      @open-auth="isAuthOpen = true"
    />
    
    <main class="container mx-auto px-4 py-8">
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-6">Películas Destacadas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MovieCard
            v-for="movie in featuredMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-6">Estrenos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MovieCard
            v-for="movie in newReleases"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>

      <section v-for="category in categories" :key="category" class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-6">{{ category }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MovieCard
            v-for="movie in getMoviesByCategory(category)"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>
    </main>

    <CartModal v-if="isCartOpen" @close="isCartOpen = false" />
    <AuthModal v-if="isAuthOpen" @close="isAuthOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMovieStore } from './stores/movieStore';
import NavBar from './components/NavBar.vue';
import MovieCard from './components/MovieCard.vue';
import CartModal from './components/CartModal.vue';
import AuthModal from './components/AuthModal.vue';

const movieStore = useMovieStore();
const isCartOpen = ref(false);
const isAuthOpen = ref(false);

const featuredMovies = computed(() => movieStore.featuredMovies);
const newReleases = computed(() => movieStore.newReleases);
const categories = computed(() => movieStore.categories);
const getMoviesByCategory = (category) => movieStore.getMoviesByCategory(category);
</script>