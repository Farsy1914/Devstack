import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast"
import technologiesData from './data/technologies.json';

const App = () => {
  // ➕ State for selected stack items
  const [selectedStack, setSelectedStack] = useState<any[]>([]);

  // ➕ Add to Stack handler
  const handleAddToStack = (tech: any) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.error(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // ➕ Remove Single Item handler
  const handleRemoveFromStack = (techId: string, techName: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
    toast.error(`${techName} removed from stack.`);
  };

  // ➕ Remove All handler
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All technologies removed from stack.");
  };

  return (
  <div className="min-h-screen bg-white">
      {/* Navbar Section */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between shadow-sm">
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12 flex flex-col md:flex-row items-center justify-between">
        
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
      {/* 3. Explore Technologies Section Header */}
      <section id="technologies" className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Pick one technology per category to build your ideal stack.
        </p>
     {/* Toast Container */}
        <Toaster position="top-right" />

        {/* Main Grid Wrapper (3 cols for cards, 1 col for Your Stack Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Technologies Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologiesData.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);

              return (
                <div 
                  key={tech.id} 
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl p-2 border border-gray-100">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-pink-50 text-pink-600 rounded-full">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Category Chip */}
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded mb-2">
                      {tech.category}
                    </span>

                    {/* Name & Description */}
                    <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Bottom Meta & Full Width Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-3">
                   <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{tech.difficulty}</span>
                    <span className="flex items-center text-amber-500 font-semibold">
                      ⭐ {tech.rating}
                    </span>
                   </div>
                   <button 
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                     isAdded 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'text-white bg-gray-900 hover:bg-gray-800'
                    }`}
                   >
                   {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                 </div>
                </div>
              );
            })}
          </div>

          {/* 🧰 Your Stack Sidebar Panel */}
          <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
           <p className="text-xs text-gray-500 mt-1">
            {selectedStack.length === 0 
             ? "No Technology Selected" 
             : `${selectedStack.length} ${selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected`}
          </p>

            <div className="mt-6 space-y-4">
              {selectedStack.length === 0 ? (
                <div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-xl">
                  <p className="text-sm text-gray-400">Your stack is empty.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                  {selectedStack.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                          <span className="text-[10px] text-gray-500">{item.category}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromStack(item.id, item.name)}
                        className="text-gray-400 hover:text-red-500 font-bold p-1 transition-colors"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selectedStack.length > 0 && (
                <button 
                  onClick={handleRemoveAll}
                  className="w-full mt-4 py-2.5 text-xs font-semibold text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 rounded-xl transition-colors"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App