import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Personal Training</title>
        <meta name="description" content="Learn more about our personal training services and our team." />
      </Head>
      <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900">About Us</h1>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Welcome to our personal training website! We are dedicated to helping you achieve your fitness goals through
            personalized training programs and expert guidance.
          </p>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide high-quality personal training services that are tailored to each individual's
              needs. Whether you are looking to lose weight, build muscle, or improve your overall health, we are here to
              support you every step of the way.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team of certified personal trainers has years of experience and a passion for fitness. We are committed
              to creating a positive and motivating environment for all our clients.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
