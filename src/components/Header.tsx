import React from 'react';
import { Film, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  onCartClick: () => void;
  onAuthClick: () => void;
  cartItemsCount: number;
}

export function Header({ onCartClick, onAuthClick, cartItemsCount }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-slideIn">
            <Film className="h-8 w-8 text-white animate-pulse-slow" />
            <span className="text-2xl font-bold text-white">CineMax</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={onCartClick}
              className="relative hover:scale-105 transition-transform duration-300"
            >
              <ShoppingCart className="h-5 w-5 fill-primary stroke-white" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button
              variant="secondary"
              onClick={onAuthClick}
              className="hover:scale-105 transition-transform duration-300"
            >
              <User className="h-5 w-5 fill-primary stroke-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}