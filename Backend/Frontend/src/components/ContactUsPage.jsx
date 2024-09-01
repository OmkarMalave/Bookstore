import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs';

export default function ContactUsPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="container items-center mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <ContactUs />
      <div className="flex justify-center mt-6">
        <button
          onClick={handleClose}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
