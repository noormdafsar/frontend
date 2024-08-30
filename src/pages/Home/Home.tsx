import React from 'react';
import { CourseCard } from '../../components/courseCard/CourseCard';
import { FAQ } from '../../components/FAQ/FAQ';
import { AgricultureSection } from '../../components/AgricultureSection/AgricultureSection';
import { FeaturedCourse } from '../../components/FeaturedCourse/FeaturedCourse';
import { useCourses } from '../../hooks/useCourses';
import { FAQS } from '../../constants';

export const Home: React.FC = () => {
  const { courses, loading, error } = useCourses();

  const recommendedCourses = [
    ...courses,
    {
      _id: 'course-3',
      name: "Advanced Crop Rotation Strategies",
      authorName: "Dr. Laura Martinez",
      rating: 4.7,
      ratingCount: 1890,
      price: 899,
      image: "/api/placeholder/300/200?text=Crop+Rotation",
      isBestSeller: false,
      shortDescription: "Learn advanced techniques for optimizing crop rotation."
    },
    {
      _id: 'course-4',
      name: "Agricultural Economics and Policy",
      authorName: "Prof. James Anderson",
      rating: 4.6,
      ratingCount: 2105,
      price: 949,
      image: "/api/placeholder/300/200?text=Agri+Economics",
      isBestSeller: true,
      shortDescription: "Understand the economic principles and policies shaping modern agriculture."
    }
  ];

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <AgricultureSection />

      <FeaturedCourse />
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedCourses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </section>


      <section>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map(faq => (
            <FAQ key={faq.id} faq={faq} />
          ))}
        </div>
      </section>
    </div>
  );
};
