// src/app/page.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <img src="/logo.png" alt="BoxChampy Logo" className="h-10" />
          </div>
          <nav className="flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#locations" className="hover:underline">Locations</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#signup" className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">Sign Up</a>
          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center text-white py-20" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Fight Like a Champion</h1>
          <div className="mt-8 space-x-4">
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Cross Fit</button>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Weights</button>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Exercises</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <img src="/about-image.jpg" alt="About Us" className="md:w-1/2 rounded-lg shadow-lg" />
          <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold">How We Got Started In This Business</h2>
            <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="mt-6 bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">Sign Up</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Ready for your next lesson?</h2>
          <p className="mt-4">Contact us at <a href="mailto:inbox@boxchampy.com" className="text-red-500 hover:underline">inbox@boxchampy.com</a></p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="#"><img src="/linkedin-icon.png" alt="LinkedIn" className="h-6" /></a>
            <a href="#"><img src="/facebook-icon.png" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" className="h-6" /></a>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
