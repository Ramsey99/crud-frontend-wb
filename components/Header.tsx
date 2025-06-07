import { Search, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 flex items-center justify-between">
      <div className="text-4xl font-bold">Logo</div>
      <div className="flex-1 max-w-lg mx-4">
        <div className="flex items-center border rounded px-4 py-2">
          <Search className="text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            className="ml-2 flex-1 text-white bg-transparent placeholder:text-white focus:outline-none"
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
      <div className="flex items-center gap-4 border-0 rounded px-5 py-2 bg-blue-900 hover:bg-blue-700 transition-colors">
        <ShoppingCart className="w-6 h-6 text-white-600" />
        <span>Cart</span>
      </div>
      <User className="w-6 h-6" />
      </div>
    </header>
  );
}
