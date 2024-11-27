import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '../ui/Button';
import { CartMovie } from '../../types';

interface CartItemProps {
  item: CartMovie;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm animate-fadeIn">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        <p className="text-primary-dark font-bold">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="p-1"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="secondary"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          disabled={item.quantity >= item.stock}
          className="p-1"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="danger"
        onClick={() => onRemove(item.id)}
        className="p-2"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}