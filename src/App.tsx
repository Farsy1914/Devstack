import toast from "react-hot-toast"

const App = () => {
  return (
  <div className="min-h-screen bg-white">
      {/* Navbar Section */}
      <header className="w-full border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
        {/* Logo Image */}
        <div className="flex items-center">
          <img src="src/assets/logo-text.png" alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600 hover:text-pink-600 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <a href="#signin" className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:block">
            Sign In
          </a>
          <a 
            href="#signup" 
            className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-md hover:opacity-90 transition-opacity"
          >
            Sign Up
          </a>
        </div>
      </header>
    {/* 2. Hero Section (Build Your Ideal Development Stack) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text and Buttons */}
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#explore" 
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a 
              href="#learnmore" 
              className="px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: 3D Illustration Image from Assets */}
        <div className="mt-12 md:mt-0 flex justify-center">
          <img 
            src="src/assets/banner-stack.png"
            alt="Development Stack Illustration" 
            className="w-full max-w-sm md:max-w-md object-contain" 
          />
        </div>

      </section>

    </div>
  );
}

export default App