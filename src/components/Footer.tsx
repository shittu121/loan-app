import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <h2 className="text-white text-2xl font-bold mb-4">
              <span className="text-purple-500">BORROW</span> LOAN-COMPANY
            </h2>
            <p className="text-sm">
              Our goal at Borrow Loan Company is to provide access to personal loans and education loans, car loans, and home loans at competitive interest rates. We are the loan provider; you can use our loan products.
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <FaMapMarkerAlt className="text-purple-500" />
              <p>3895 Sycamore Road, Arlington, 97812</p>
            </div>
            <div className="mt-2 flex items-center space-x-3">
              <FaPhoneAlt className="text-purple-500" />
              <p>800-123-456</p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">News</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Loans</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Car Loan</a></li>
                <li><a href="#" className="hover:text-white">Personal Loan</a></li>
                <li><a href="#" className="hover:text-white">Education Loan</a></li>
                <li><a href="#" className="hover:text-white">Business Loan</a></li>
                <li><a href="#" className="hover:text-white">Home Loan</a></li>
                <li><a href="#" className="hover:text-white">Debt Consolidation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-500 hover:text-white"><FaFacebookF /></a>
                <a href="#" className="text-purple-500 hover:text-white"><FaGoogle /></a>
                <a href="#" className="text-purple-500 hover:text-white"><FaTwitter /></a>
                <a href="#" className="text-purple-500 hover:text-white"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold mb-3">Signup Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Write email address"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-r-md">
                Go!
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 flex justify-between text-sm">
          <p>© Copyright 2024 | Borrow Loan Company</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
