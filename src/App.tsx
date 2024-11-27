import React, { useState } from 'react';
import { Header } from './components/Header';
import { MovieCard } from './components/MovieCard';
import { CartModal } from './components/Cart/CartModal';
import { AuthModal } from './components/Auth/AuthModal';
import { Movie, CartMovie } from './types';
import './styles/animations.css';

const peliculas: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    price: 299.99,
    stock: 5,
    imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800',
    description: 'Un ladrón que roba secretos corporativos a través de la tecnología de compartir sueños.',
    discount: 15
  },
  {
    id: '2',
    title: 'El Caballero de la Noche',
    price: 249.99,
    stock: 3,
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800',
    description: 'Batman se enfrenta a un criminal conocido como el Joker.',
  },
  {
    id: '3',
    title: 'Interestelar',
    price: 329.99,
    stock: 0,
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800',
    description: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio.',
    discount: 10
  }
];

function App() {
  const [cartItems, setCartItems] = useState<CartMovie[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAddToCart = (movie: Movie) => {
    if (movie.stock > 0) {
      setCartItems(current => {
        const existingItem = current.find(item => item.id === movie.id);
        if (existingItem) {
          return current.map(item =>
            item.id === movie.id
              ? { ...item, quantity: Math.min(item.quantity + 1, movie.stock) }
              : item
          );
        }
        return [...current, { ...movie, quantity: 1 }];
      });
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(current =>
      current.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(1, quantity), item.stock) }
          : item
      )
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(current => current.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Aquí iría la lógica de checkout
    console.log('Procesando pago...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light to-background">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-2 text-primary">Películas Destacadas</h1>
        <p className="text-gray-600 mb-8">Descubre nuestra selección de películas premium</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {peliculas.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}

export default App;