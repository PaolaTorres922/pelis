import React from 'react';
import { Movie } from '../types';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ShoppingCart, Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onAddToCart: (movie: Movie) => void;
}

export function MovieCard({ movie, onAddToCart }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
      <div className="relative">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-56 object-cover"
        />
        {movie.discount && (
          <div className="absolute top-2 right-2 animate-bounce-slow">
            <Badge variant="success">
              {movie.discount}% DESCUENTO
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-primary-dark">{movie.title}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-gray-300 fill-current" />
        </div>
        <p className="text-gray-600 text-sm mb-4">{movie.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${movie.price.toFixed(2)}
            </span>
          </div>
          <Badge variant={movie.stock > 0 ? 'success' : 'error'}>
            {movie.stock > 0 ? `${movie.stock} disponibles` : 'Agotado'}
          </Badge>
        </div>
        <Button
          onClick={() => onAddToCart(movie)}
          disabled={movie.stock === 0}
          className="w-full group transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <ShoppingCart className="h-5 w-5 mr-2 group-hover:animate-bounce" />
          {movie.stock === 0 ? 'Agotado' : 'Agregar al Carrito'}
        </Button>
      </div>
    </div>
  );
}