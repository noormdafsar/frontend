import React from 'react';
import { Search, ShoppingCart, ChevronDown, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">E-NEST</h1>
        <nav className="flex items-center space-x-6">
          <a href="#" className="flex items-center">
            <span>Program</span>
            <ChevronDown size={16} className="ml-1" />
          </a>
          <a href="#">Test Series</a>
          <a href="#">State Connect</a>
          <a href="#">Expert Connect</a>
          <a href="#" className="flex items-center">
            <span>More</span>
            <ChevronDown size={16} className="ml-1" />
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <User className="text-gray-600" size={24} />
        </div>
      </div>
      <div className="bg-purple-700 text-white">
        <div className="container mx-auto px-4 py-2 flex items-center">
          <div className="flex items-center mr-4 cursor-pointer">
            <span>Explore</span>
            <ChevronDown size={16} className="ml-1" />
          </div>
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Type text here"
              className="w-full pl-8 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-black"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="flex items-center ml-auto">
            <ShoppingCart size={20} className="mr-2" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};