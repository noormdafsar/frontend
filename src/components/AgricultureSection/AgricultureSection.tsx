import React, { useRef, useState, useEffect } from 'react';
import { CourseCard } from '../courseCard/CourseCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useCourses } from '../../hooks/useCourses';
import { Course } from '../../types';

const FilterButton: React.FC<{ children: React.ReactNode; active?: boolean; onClick?: () => void }> = ({ children, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm ${
      active 
        ? "bg-purple-600 text-white" 
        : "bg-white text-gray-700 border border-gray-300"
    }`}
  >
    {children}
  </button>
);

interface DummyCourse {
  name: string;
  authorName: string;
  rating: number;
  ratingCount: number;
  price: number;
  image: string;
}

export const AgricultureSection: React.FC = () => {
  const { courses, loading, error, page, setPage, totalPages, filter, setFilter } = useCourses();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [subFilterPage] = useState(1);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setPage(1);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowScrollButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const dummyCourses: DummyCourse[] = [
    { name: "Advanced Microscopy Techniques in Agriculture", authorName: "Dr. Emily Johnson", rating: 4.5, ratingCount: 1234, price: 799, image: "/api/placeholder/300/200?text=Microscopy" },
    { name: "Digital Marketing for Agribusiness", authorName: "Mark Thompson", rating: 4.2, ratingCount: 987, price: 699, image: "/api/placeholder/300/200?text=Digital+Marketing" },
    { name: "Sustainable Farming Practices", authorName: "Sarah Green", rating: 4.8, ratingCount: 2345, price: 899, image: "/api/placeholder/300/200?text=Sustainable+Farming" },
    { name: "Livestock Management and Care", authorName: "Dr. John Smith", rating: 4.6, ratingCount: 1567, price: 849, image: "/api/placeholder/300/200?text=Livestock" },
    { name: "Agricultural Drone Technology", authorName: "Michael Brown", rating: 4.3, ratingCount: 789, price: 999, image: "/api/placeholder/300/200?text=Drone+Tech" },
    { name: "Organic Pest Control Methods", authorName: "Lisa Davis", rating: 4.7, ratingCount: 2101, price: 749, image: "/api/placeholder/300/200?text=Pest+Control" },
    { name: "Farm Financial Management", authorName: "Robert Wilson", rating: 4.4, ratingCount: 1432, price: 799, image: "/api/placeholder/300/200?text=Financial+Management" },
    { name: "Hydroponics and Vertical Farming", authorName: "Emma White", rating: 4.9, ratingCount: 2678, price: 949, image: "/api/placeholder/300/200?text=Hydroponics" },
  ];

  const getDisplayedCourses = (): (Course | (DummyCourse & { _id: string }))[] => {
    switch (filter) {
      case '':
        return dummyCourses.map((course, index) => ({ ...course, _id: `dummy-${index}`, isBestSeller: false, shortDescription: "" }));
      case 'new':
        return courses.slice(0, 4);
      case 'trending':
        return courses.slice(0, 6);
      default:
        return courses;
    }
  };

  const displayedCourses = getDisplayedCourses();

  const subFilters = [
    'Course lecture', 'Lorem ipsum', 'Lorem ipsum dolor', 'Consectetur',
    'Course lecture', 'Lorem ipsum', 'Lorem ipsum dolor', 'Consectetur',
    'Course lecture', 'Lorem ipsum', 'Lorem ipsum dolor', 'Consectetur',
    'Course lecture', 'Lorem ipsum', 'Lorem ipsum', 'Consectetur'
  ];

  return (
    <section className="mb-12">
      <div className="bg-white p-6 rounded-tl-[20px] mb-6 shadow-md" style={{
        width: '1272px',
        height: '260px',
        gap: '0px',
        opacity: '20'
      }}>
        <h2 className="text-2xl font-bold mb-2">Agriculture</h2>
        <p className="mb-4">Discover the latest techniques and knowledge in agriculture. From sustainable farming practices to advanced crop management, our courses cover a wide range of agricultural topics.</p>
      </div>
      <div className="bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Explore all courses of Agriculture</h2>
        <div className="space-y-2">
          <div className="flex space-x-2 overflow-x-auto whitespace-nowrap pb-2">
            <FilterButton active={filter === ''} onClick={() => handleFilterChange('')}>All</FilterButton>
            <FilterButton active={filter === 'popular'} onClick={() => handleFilterChange('popular')}>Most Popular</FilterButton>
            <FilterButton active={filter === 'new'} onClick={() => handleFilterChange('new')}>New</FilterButton>
            <FilterButton active={filter === 'trending'} onClick={() => handleFilterChange('trending')}>Trending</FilterButton>
          </div>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex space-x-2 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide"
            >
              {subFilters
                .slice((subFilterPage - 1) * 4, subFilterPage * 4)
                .map((buttonText, index) => (
                  <FilterButton
                    key={index}
                    active={filter === buttonText.toLowerCase()}
                    onClick={() => handleFilterChange(buttonText.toLowerCase())}
                  >
                    {buttonText}
                  </FilterButton>
                ))}
            </div>
            {showScrollButton && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full border border-gray-300 bg-white shadow-md"
              >
                <ChevronRight size={16} className="text-gray-700 fill-current" />
              </button>
            )}
            <div className="flex justify-center mt-4 space-x-2">
              {/* <button
                onClick={() => setSubFilterPage(Math.max(1, subFilterPage - 1))}
                disabled={subFilterPage === 1}
                className="px-2 py-1 bg-purple-600 text-white rounded disabled:bg-gray-300"
              >
                <ChevronLeft size={16} />
              </button> */}
              {/* <span className="px-2 py-1">{subFilterPage} of {Math.ceil(subFilters.length / 4)}</span>
              <button
                onClick={() => setSubFilterPage(Math.min(Math.ceil(subFilters.length / 4), subFilterPage + 1))}
                disabled={subFilterPage === Math.ceil(subFilters.length / 4)}
                className="px-2 py-1 bg-purple-600 text-white rounded disabled:bg-gray-300"
              >
                <ChevronRight size={16} />
              </button> */}
            </div>
          </div>
        </div>
        {loading && <div className="text-center py-4">Loading...</div>}
        {error && <div className="text-center py-4 text-red-500">{error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {displayedCourses.map((course) => (
            <CourseCard key={course._id} course={{...course, isBestSeller: 'isBestSeller' in course ? course.isBestSeller : false, shortDescription: 'shortDescription' in course ? course.shortDescription : ''}} />
          ))}
        </div>
        {filter !== '' && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-300"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="px-4 py-2">{page} of {totalPages}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>

  );};
