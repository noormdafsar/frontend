import React from 'react';
import { Star } from 'lucide-react';

export const FeaturedCourse: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Course</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        <img src="/api/placeholder/400/300" alt="Featured Course" className="w-1/3 object-cover" />
        <div className="p-6 flex-1">
          <h3 className="text-xl font-bold mb-2">Advanced Sustainable Farming Techniques</h3>
          <p className="text-gray-600 mb-4">Learn cutting-edge sustainable farming practices that increase yield while preserving the environment. This course covers advanced techniques in soil management, water conservation, and organic pest control.</p>
          <p className="font-bold text-lg mb-2">Dr. Emily Green</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-purple-600 mr-4">₹1499</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
              <span className="ml-2">4.9</span>
            </div>
          </div>
          <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded">Bestseller</button>
        </div>
      </div>
    </section>
  );
};
