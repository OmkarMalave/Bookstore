// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-dark-background text-dark-primary-text">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg text-dark-secondary-text">
          We are a dedicated team of professionals committed to delivering high-quality products and exceptional customer service.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        <div className="lg:w-1/2 bg-card-background p-6 rounded-lg shadow-md border border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-dark-secondary-text">
            Our mission is to provide innovative solutions that enhance the lives of our customers. We strive for excellence in everything we do, and our team is passionate about making a positive impact.
          </p>
        </div>
        <div className="lg:w-1/2 bg-card-background p-6 rounded-lg shadow-md border border-dark-border">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-dark-secondary-text">
            <li>Customer Satisfaction: We prioritize the needs and preferences of our customers.</li>
            <li>Integrity: We operate with honesty and transparency in all our interactions.</li>
            <li>Innovation: We embrace creativity and seek continuous improvement.</li>
            <li>Teamwork: We value collaboration and support each other to achieve common goals.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-dark-secondary-text">
          Have questions or want to learn more about us? Feel free to <a href="/contact" className="text-primary-accent hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
