// src/pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faWeightHanging, faRunning } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Head>
        <title>Boxchampy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-red-600">BOXCHAMPY</div>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-red-600">Home</a>
            <a href="#" className="hover:text-red-600">About</a>
            <a href="#" className="hover:text-red-600">Lesson</a>
            <a href="#" className="hover:text-red-600">Contact</a>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Sign Up</a>
          </nav>
        </div>
      </header>
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold">FIGHT LIKE A <span className="text-red-600">CHAMPION</span></h1>
          </div>
        </div>
      </section>
      <section className="bg-white shadow-lg p-8 mt-8 -mb-16 z-10 relative container mx-auto">
        <div className="flex justify-around">
          <div className="text-center">
            <FontAwesomeIcon icon={faDumbbell} className="text-4xl mb-2" />
            <div className="text-red-600 font-bold">CROSS FIT</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faWeightHanging} className="text-4xl mb-2" />
            <div className="text-red-600 font-bold">WEIGHTS</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faRunning} className="text-4xl mb-2" />
            <div className="text-red-600 font-bold">EXERCISES</div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto flex">
          <div className="w-1/2 pr-8">
            <Image src="https://placehold.co/600x400" alt="Boxing training" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-4">HOW WE GOT STARTED IN THIS BUSINESS</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet. Sed sunt voluptatem non veniam sint ut dolor sint aut eveniet beatae id vitae nemo et modi cupiditate qui corporis voluptate. Ut amet neque ad ipsum consequatur est recusandae itaque et rerum minima aut officiis esse quo aperiam eligendi.</p>
            <p className="mb-4">Ut obcaecati accusamus quo autem molestiae est atque dignissimos qui rerum voluptates eum molestiae nulla rem placeat impedit et magnam magnam.</p>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Sign Up</a>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">READY FOR YOUR <span className="text-red-600">NEXT LESSON?</span></h2>
          <a href="mailto:inbox@boxchampy" className="block mb-4">inbox@boxchampy</a>
          <div className="flex justify-center space-x-4">
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className="text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto flex justify-between">
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
        </div>
      </footer>
    </div>
  );
}
