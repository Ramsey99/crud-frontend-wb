'use client';

import { Search, ShoppingCart, User, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ onSearch }: { onSearch: (term: string) => void }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="text-2xl sm:text-3xl font-bold">WhatBytes</div>

        <div className="hidden sm:flex flex-1 max-w-lg items-center border border-white rounded px-3 py-2 mx-6">
          <Search className="text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => onSearch(e.target.value)}
            className="ml-2 flex-1 text-white bg-transparent placeholder:text-white focus:outline-none text-sm sm:text-base"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="sm:hidden"
            aria-label="Toggle search"
          >
            {mobileSearchOpen ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
          </button>

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <User className="w-6 h-6" />
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="sm:hidden mt-3 flex items-center border border-white rounded px-3 py-2">
          <Search className="text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => onSearch(e.target.value)}
            className="ml-2 flex-1 text-white bg-transparent placeholder:text-white focus:outline-none text-sm"
          />
        </div>
      )}
    </header>
  );
}
