import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>BoxChampy</title>
      </Head>
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded">
              <i className="fas fa-box-open"></i>
            </div>
            <h1 className="text-xl font-bold">BOXCHAMPY</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-red-500">HOME</a>
            <a href="#" className="hover:text-red-500">ABOUT</a>
            <a href="#" className="hover:text-red-500">LESSON</a>
            <a href="#" className="hover:text-red-500">CONTACT</a>
            <a href="#" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">SIGN UP</a>
          </nav>
        </div>
      </header>
      <section className="relative bg-black text-white text-center py-20">
        <img src="https://placehold.co/800x400" alt="Boxer with red gloves" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">FIGHT LIKE A <span className="text-red-600">CHAMPION</span></h2>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex justify-center space-x-8">
          <div className="text-center">
            <i className="fas fa-dumbbell text-4xl text-gray-700"></i>
            <h3 className="text-xl font-bold mt-2">CROSS FIT</h3>
          </div>
          <div className="text-center">
            <i className="fas fa-weight text-4xl text-gray-700"></i>
            <h3 className="text-xl font-bold mt-2">WEIGHTS</h3>
          </div>
          <div className="text-center">
            <i className="fas fa-user text-4xl text-gray-700"></i>
            <h3 className="text-xl font-bold mt-2">EXERCISES</h3>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16 px-4 flex space-x-8">
        <div className="w-1/2">
          <img src="https://placehold.co/400x300" alt="Woman training with boxing pads" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">HOW WE GOT STARTED IN THIS BUSINESS</h2>
          <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet. Sed sunt voluptatem non veniam sint ut dolor sint aut eveniet beatae id vitae nemo et modi cupiditate qui corporis voluptate. Ut amet neque ad ipsum consequatur est recusandae itaque et rerum minima aut officiis esse quo aperiam eligendi.</p>
          <p className="mt-4 text-gray-700">Ut obcaecati accusamus quo autem molestiae est atque dignissimos qui rerum voluptas eum molestiae nulla rem placeat impedit et magnam magnam.</p>
          <a href="#" className="bg-red-600 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-red-700">SIGN UP</a>
        </div>
      </section>
      <section className="bg-black text-white text-center py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold">READY FOR YOUR <span className="text-red-600">NEXT LESSON?</span></h2>
          <p className="mt-4"><i className="fas fa-envelope"></i> inbox@boxchampy</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-500"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <div className="container mx-auto">
          <a href="#" className="hover:text-white">PRIVACY POLICY</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">TERMS & CONDITIONS</a>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
