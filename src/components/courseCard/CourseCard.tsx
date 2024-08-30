import React from 'react';
import { Star } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            alt={course.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-2 h-10 overflow-hidden">{course.name}</h3>
            <p className="text-gray-500 text-xs mb-2">{course.authorName}</p>
            <div className="flex items-center mb-2">
              <span className="text-sm font-bold mr-1">{course.rating.toFixed(1)}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={`${i < Math.floor(course.rating) ? 'text-purple-600 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm">₹{course.price}</span>
              <button className="bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      );
    };