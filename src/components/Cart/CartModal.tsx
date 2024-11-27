import React from 'react';
import { X, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';
import { CartItem } from './CartItem';
import { CartMovie } from '../../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartMovie[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export function CartModal({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartModalProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fadeIn">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-primary text-white">
          <h2 className="text-xl font-bold">Carrito de Compras</h2>
          <Button variant="secondary" onClick={onClose} className="p-1">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Tu carrito está vacío
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemove}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold text-primary">
                ${total.toFixed(2)}
              </span>
            </div>
            <Button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2"
            >
              <CreditCard className="h-5 w-5" />
              Proceder al Pago
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}