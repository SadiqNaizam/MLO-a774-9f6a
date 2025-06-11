import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">TSB Bank</h3>
            <p className="text-gray-600">
              Committed to helping our customers and communities thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/help" className="text-gray-600 hover:text-blue-600">Help & Support</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-blue-600">Security Centre</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-blue-600">Legal Information</Link></li>
            </ul>
          </div>

          {/* Social Media & App Links (placeholder) */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Connect With Us</h3>
            {/* Placeholder for social media icons or app store links */}
            <p className="text-gray-600">Follow us on social media or download our app.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} TSB Bank plc. All rights reserved.</p>
          <p className="mt-1">TSB Bank plc is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 191240.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;