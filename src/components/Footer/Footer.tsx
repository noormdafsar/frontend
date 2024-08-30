import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">E-NEST</h3>
            <p className="text-sm">Empowering learners with quality education in agriculture and beyond.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-800">Programs</a></li>
              <li><a href="#" className="hover:text-gray-800">Test Series</a></li>
              <li><a href="#" className="hover:text-gray-800">State Connect</a></li>
              <li><a href="#" className="hover:text-gray-800">Expert Connect</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="hover:text-gray-800">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="hover:text-gray-800">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-800">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2024 E-NEST Education Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;