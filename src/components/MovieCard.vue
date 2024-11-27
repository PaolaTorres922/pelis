{
  <template>
    <div class="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div class="relative">
        <img :src="movie.imageUrl" :alt="movie.title" class="w-full h-64 object-cover" />
        <div v-if="movie.isNew" class="absolute top-2 right-2">
          <span class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            NUEVO
          </span>
        </div>
      </div>
      
      <div class="p-4">
        <h3 class="text-xl font-bold text-white mb-2">{{ movie.title }}</h3>
        <div class="flex items-center mb-2">
          <StarIcon v-for="n in Math.floor(movie.rating)" :key="n" class="h-5 w-5 text-yellow-400" />
        </div>
        <p class="text-gray-300 text-sm mb-4">{{ movie.description }}</p>
        <div class="flex items-center justify-between mb-4">
          <span class="text-2xl font-bold text-white">${{ movie.price.toFixed(2) }}</span>
          <span :class="['px-2 py-1 rounded-full text-xs font-medium',
            movie.stock > 0 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300']">
            {{ movie.stock > 0 ? `${movie.stock} disponibles` : 'Agotado' }}
          </span>
        </div>
        <button
          @click="addToCart"
          :disabled="movie.stock === 0"
          class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium
            hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2 group"
        >
          <ShoppingCartIcon class="h-5 w-5 group-hover:animate-bounce" />
          {{ movie.stock === 0 ? 'Agotado' : 'Agregar al Carrito' }}
        </button>
      </div>
    </div>
  </template>

  <script setup>
  import { StarIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid';
  import { useCartStore } from '../stores/cartStore';

  const props = defineProps({
    movie: {
      type: Object,
      required: true
    }
  });

  const cartStore = useCartStore();

  const addToCart = () => {
    cartStore.addItem(props.movie.id);
  };
  </script>
}