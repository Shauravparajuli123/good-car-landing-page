import video1 from '../assets/video1.mp4';
import video3 from '../assets/video3.mp4';
import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Choose and customize your
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {" "}favourite car
        </span>

      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Online vehicle configurator for automotive aftermarket accessories including wheels, tires, lift kits, suspension systems, running boards, front bumpers etc.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Start for free
        </a>
        <a href="#" className='py-3 px-4 mx-3 rounded-md border'>
          Learn More
        </a>

      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
          <source src={video1} type='video/mp4' />
          Unsupported brower.

        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
          <source src={video3} type='video/mp4' />
          Unsupported brower.

        </video>
      </div>
    </div>
  );

};
export default HeroSection;