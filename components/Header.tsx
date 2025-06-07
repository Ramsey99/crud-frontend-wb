'use client';

import { Search, User, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Header({ onSearch }: { onSearch: (term: string) => void }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-800 text-white p-4 flex items-center justify-between">
      <div className="text-4xl font-bold">WhatBytes</div>
      <div className="flex-1 max-w-lg mx-4">
        <div className="flex items-center border rounded px-4 py-2">
          <Search className="text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => onSearch(e.target.value)}
            className="ml-2 flex-1 text-white bg-transparent placeholder:text-white focus:outline-none"
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
      <div className="relative">
        <Link href="/cart" className="relative">
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
        </Link>
      </div>
      <User className="w-6 h-6" />
      </div>
    </header>
  );
}
