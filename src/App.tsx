// import React, { useState, useEffect } from 'react';
// import { Search, ChevronRight, Star } from 'lucide-react';
// import axios from 'axios';

// interface Course {
//   _id: string;
//   name: string;
//   price: number;
//   rating: number;
//   authorName: string;
//   isBestSeller: boolean;
//   shortDescription: string;
// }

// interface FAQ {
//   id: number;
//   question: string;
//   answer: string;
// }

// interface ApiResponse {
//   total: number;
//   page: number;
//   limit: number;
//   courses: Course[];
// }

// const App: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get<ApiResponse>('http://localhost:5000/api/courses');
//         setCourses(response.data.courses);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching courses:', err);
//         // Fallback to mock data
//         const mockData: Course[] = [
//           {
//             _id: "1",
//             name: "Advanced React with TypeScript",
//             price: 79.99,
//             rating: 4.6,
//             authorName: "John Smith",
//             isBestSeller: false,
//             shortDescription: "Master React and TypeScript to build scalable and maintainable applications.",
//           },
//           {
//             _id: "2",
//             name: "Introduction to Machine Learning",
//             price: 49.99,
//             rating: 4.8,
//             authorName: "Jane Doe",
//             isBestSeller: true,
//             shortDescription: "Learn the fundamentals of machine learning and build your first model.",
//           },
//         ];
//         setCourses(mockData);
//         setError('Failed to fetch courses from API. Displaying mock data.');
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const faqs: FAQ[] = [
//     {
//       id: 1,
//       question: 'What Can I learn on E-Nest?',
//       answer: 'E-Nest offers a wide range of courses including technology, business, arts, and more. You can learn practically anything!'
//     },
//     {
//       id: 2,
//       question: 'How to enroll in a course?',
//       answer: 'To enroll in a course, simply click on the course you are interested in and press the "Enroll" button. You will be guided through the payment process if its a paid course.'
//     },
//     {
//       id: 3,
//       question: 'What are the types of courses that you offer?',
//       answer: 'We offer various types of courses including video lectures, interactive coding exercises, quizzes, and project-based learning experiences.'
//     },
//     {
//       id: 4,
//       question: 'Where can I find my enrolled courses?',
//       answer: 'Once you are logged in, you can find your enrolled courses in the "My Courses" section of your dashboard.'
//     },
//     {
//       id: 5,
//       question: 'Can I download video sessions or study materials from the course?',
//       answer: 'This depends on the individual course. Some courses offer downloadable materials, while others are designed for online viewing only. Check the course description for details.'
//     },
//   ];

//   const toggleFAQ = (id: number): void => {
//     setExpandedFAQ(expandedFAQ === id ? null : id);
//   };

//   return (
//     <div className="font-sans">
//       {/* Header */}
//       <header className="bg-purple-700 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">E-NEST</h1>
//           <nav className="space-x-4">
//             <a href="#" className="hover:underline">Program</a>
//             <a href="#" className="hover:underline">Test Series</a>
//             <a href="#" className="hover:underline">State Connect</a>
//             <a href="#" className="hover:underline">Expert Connect</a>
//           </nav>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search here"
//               className="pl-8 pr-4 py-2 rounded-full text-black"
//               value={searchTerm}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-500" size={20} />
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {loading && <div className="text-center text-xl">Loading courses...</div>}
//         {error && <div className="text-center text-red-500 mb-4">{error}</div>}
        
//         {/* Agriculture Section */}
//         <section className="mb-12">
//           <div className="bg-green-100 p-6 rounded-lg mb-6">
//             <h2 className="text-2xl font-bold mb-2">Agriculture</h2>
//             <p className="mb-4">Discover the latest techniques and knowledge in agriculture. From sustainable farming practices to advanced crop management, our courses cover a wide range of agricultural topics.</p>
//             <button className="bg-purple-600 text-white px-4 py-2 rounded">Explore all courses of Agriculture</button>
//           </div>
//           <div className="mb-6">
//             <div className="flex space-x-4 mb-4 overflow-x-auto">
//               <button className="bg-purple-600 text-white px-4 py-2 rounded">Most Popular</button>
//               <button className="border border-gray-300 px-4 py-2 rounded">Crop Management</button>
//               <button className="border border-gray-300 px-4 py-2 rounded">Sustainable Farming</button>
//               <button className="border border-gray-300 px-4 py-2 rounded">Livestock</button>
//               <button className="border border-gray-300 px-4 py-2 rounded">Organic Farming</button>
//               <button className="border border-gray-300 px-4 py-2 rounded">AgriTech</button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {courses.map((course) => (
//               <div key={course._id} className="border rounded-lg overflow-hidden shadow-md">
//                 <img src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(course.name)}`} alt={course.name} className="w-full h-40 object-cover" />
//                 <div className="p-4">
//                   <h3 className="font-bold mb-2">{course.name}</h3>
//                   <p className="text-gray-600 mb-2">{course.shortDescription}</p>
//                   <p className="text-sm text-gray-500 mb-2">By {course.authorName}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold text-purple-600">₹{course.price}</span>
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} size={16} className={i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
//                       ))}
//                       <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
//                     </div>
//                   </div>
//                   {course.isBestSeller && (
//                     <button className="mt-4 w-full bg-yellow-400 text-black font-bold py-2 rounded">Bestseller</button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Featured Course */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-6">Featured Course</h2>
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
//             <img src="https://via.placeholder.com/400x300?text=Featured+Course" alt="Featured Course" className="w-1/3 object-cover" />
//             <div className="p-6 flex-1">
//               <h3 className="text-xl font-bold mb-2">Advanced Sustainable Farming Techniques</h3>
//               <p className="text-gray-600 mb-4">Learn cutting-edge sustainable farming practices that increase yield while preserving the environment. This course covers advanced techniques in soil management, water conservation, and organic pest control.</p>
//               <p className="font-bold text-lg mb-2">Dr. Emily Green</p>
//               <div className="flex items-center mb-4">
//                 <span className="text-2xl font-bold text-purple-600 mr-4">₹1499</span>
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} className="text-yellow-400 fill-current" />
//                   ))}
//                   <span className="ml-2">4.9</span>
//                 </div>
//               </div>
//               <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded">Bestseller</button>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section>
//           <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
//           <div className="space-y-4">
//             {faqs.map((faq) => (
//               <div key={faq.id} className="border rounded-lg">
//                 <button
//                   className="flex justify-between items-center w-full p-4 text-left font-semibold"
//                   onClick={() => toggleFAQ(faq.id)}
//                 >
//                   {faq.question}
//                   <ChevronRight className={`transform transition-transform ${expandedFAQ === faq.id ? 'rotate-90' : ''}`} />
//                 </button>
//                 {expandedFAQ === faq.id && (
//                   <div className="p-4 bg-gray-50">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-purple-700 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">E-NEST</h3>
//               <p>Empowering learners with quality education in agriculture and beyond.</p>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:underline">Programs</a></li>
//                 <li><a href="#" className="hover:underline">Test Series</a></li>
//                 <li><a href="#" className="hover:underline">State Connect</a></li>
//                 <li><a href="#" className="hover:underline">Expert Connect</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:underline">About Us</a></li>
//                 <li><a href="#" className="hover:underline">Why Choose Us</a></li>
//                 <li><a href="#" className="hover:underline">Careers</a></li>
//                 <li><a href="#" className="hover:underline">Blog</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Legal</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:underline">Terms of Service</a></li>
//                 <li><a href="#" className="hover:underline">Cookie Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 text-center">
//             <p>&copy; 2024 E-NEST Education Pvt Ltd. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
