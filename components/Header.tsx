'use client';
import { ShoppingCart, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="text-xl font-bold">WhatBytes</div>
      <div className="flex-1 max-w-md mx-4">
        <div className="flex items-center border rounded px-3 py-1">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="ml-2 w-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </div>
        <User className="w-6 h-6" />
      </div>
    </header>
  );
}
