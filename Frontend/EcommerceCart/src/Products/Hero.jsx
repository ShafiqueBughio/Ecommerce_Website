import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start  justify-between p-8 bg-custom-gradient h-full">
      {/* Left section */}
      <div className="md:w-1/2 flex flex-col space-y-4 ml-[60px] lg:pt-20 ">
        <h2 className="md:text-4xl  text-xl font-medium  sm:text-xl ">NEW ARRIVALS ONLY</h2>
        <div className="space-y-2 ">
          <div className="flex items-center space-x-2">
            <p className="text-3xl lg:text-6xl md:text-4xl font-semibold ">new</p>
            <img src="src/assets/Ecommerce_Frontend_Assets/hand_icon.png" alt="Hand Icon" className="h-12 w-12 md:h-12 md:w-12 lg:h-14 lg:w-14" />
          </div>
          <p className="lg:text-6xl md:text-4xl font-semibold text-3xl">collections</p>
          <p className="lg:text-6xl md:text-4xl font-semibold text-3xl">for everyone</p>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-red-500 rounded-3xl text-white lg:w-60 md:w-[200px] h-8 cursor-pointer w-[190px]">
          <div className="text-sm font-medium md:text-sm lg:text-lg">Latest Collection</div>
          <img src="src/assets/Ecommerce_Frontend_Assets/arrow.png" alt="Arrow Icon" className="md:h-3 md:w-5 h-2 :w-3" />
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 mt-8 md:-mt-4 sm:w-1/3 max-sm:hidden">
        <img src="src/assets/Ecommerce_Frontend_Assets/hero_image.png" alt="Hero" className="w-2/3 h-auto mx-auto" />
      </div>
    </div>
  );
}

export default Hero;
