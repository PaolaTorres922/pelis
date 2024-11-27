{
  <template>
    <nav class="bg-black/30 backdrop-blur-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <FilmIcon class="h-8 w-8 text-pink-500 animate-spin-slow" />
            <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              CinematicVault
            </span>
          </div>

          <div class="flex items-center space-x-6">
            <button
              @click="openCart"
              class="relative group"
            >
              <ShoppingCartIcon class="h-6 w-6 text-white group-hover:text-pink-500 transition-colors" />
              <span
                v-if="cartItemsCount > 0"
                class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5
                  flex items-center justify-center animate-bounce"
              >
                {{ cartItemsCount }}
              </span>
            </button>

            <button
              @click="openAuth"
              class="group"
            >
              <UserIcon class="h-6 w-6 text-white group-hover:text-pink-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>

  <script setup>
  import { computed } from 'vue';
  import { FilmIcon, ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/solid';
  import { useCartStore } from '../stores/cartStore';

  const cartStore = useCartStore();
  const cartItemsCount = computed(() => cartStore.totalItems);

  const emit = defineEmits(['openCart', 'openAuth']);

  const openCart = () => emit('openCart');
  const openAuth = () => emit('openAuth');
  </script>
}