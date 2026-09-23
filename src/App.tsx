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
    

    </div>
  );
}

export default App