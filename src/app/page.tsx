import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <header className="w-full bg-black text-white py-4 flex justify-between items-center px-8">
        <div className="text-2xl font-bold">BOXCHAMPY</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-red-500">Home</a></li>
            <li><a href="#about" className="hover:text-red-500">About</a></li>
            <li><a href="#locations" className="hover:text-red-500">Locations</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
            <li><a href="#signup" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Sign Up</a></li>
          </ul>
        </nav>
      </header>
      <section className="relative w-full bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-6xl font-bold">FIGHT LIKE A CHAMPION</h1>
          <div className="mt-4 flex space-x-6">
            <a href="#crossfit" className="bg-white text-black px-4 py-2 rounded">Cross Fit</a>
            <a href="#weights" className="bg-white text-black px-4 py-2 rounded">Weights</a>
            <a href="#exercises" className="bg-white text-black px-4 py-2 rounded">Exercises</a>
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-16 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold">HOW WE GOT STARTED IN THIS BUSINESS</h2>
        <p className="max-w-xl mx-auto mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nisl vitae vehicula cursus, nisl velit efficitur felis, vel placerat velit lectus in felis.</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Sign Up</button>
      </section>
      <footer className="w-full py-8 bg-black text-white text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com" className="hover:text-red-500">Facebook</a>
          <a href="https://www.instagram.com" className="hover:text-red-500">Instagram</a>
          <a href="https://www.twitter.com" className="hover:text-red-500">Twitter</a>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 BOXCHAMPY</p>
          <p><a href="#privacy" className="hover:text-red-500">Privacy Policy</a> | <a href="#terms" className="hover:text-red-500">Terms & Conditions</a></p>
        </div>
      </footer>
    </main>
  );
}
