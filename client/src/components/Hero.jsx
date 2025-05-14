import React from 'react'
import hero_bg from '../assets/hero-bg.png';
import SearchBar from './SearchBar';
const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] bg-cover bg-center"
         style={{ backgroundImage:`url(${hero_bg})` }}
         >
          {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
    
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 w-full max-w-2xl">
              <SearchBar />
            </div>
          </div>
        </section>
      );
}

export default Hero;