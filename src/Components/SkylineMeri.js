import React from 'react';
// import finger from '../Components/assets/finger.png';
// import graph from '../Components/assets/graph.png';
// import timer from '../Components/assets/timer.png';
// import yoga from '../Components/assets/yoga.png';

const SkylineMeri = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="relative w-full">
        {/* Doors */}
        <div className="flex justify-between">
          {/* Left door */}
          <div className="w-1/2 h-screen rounded-l-lg border-4 border-[#6cd0ce] flex justify-around items-center">
            {/* Logo and icons on the left door */}
            <div className="flex flex-col">
              {/* First image and text */}
              <div className="flex items-center">
                <div className="relative">
                  <img alt="Yoga Icon" className="w-10 h-10 mt-20 border-2 border-[#6cd0ce] p-[60px] " />
                  <p className='text-white text-4xl font-bold absolute top-[-20px] left-[35px]'>Java</p>
                  {/* <p className='text-white absolute top-[-20px] '><span className='text-gray'>This course is provisioned by</span><span>Nexxt Labs</span> </p> */}
                </div>
                <p className='text-white mr-[24rem] ml-3 mt-12'>EXERCISES</p>
              </div>
              {/* Second image and text */}
              <div className="flex items-center">
                <img alt="Graph Icon" className="w-12 h-12 mt-20 border-2 border-[#6cd0ce] p-[60px] " />
                <p className='text-white mr-[24rem] ml-3 mt-12'>PROJECTS</p>
              </div>
              {/* Third image and text */}
              <div className="flex items-center">
                <img alt="Timer Icon" className="w-10 h-10 mt-20 border-2 border-[#6cd0ce] p-[60px] " />
                <p className='text-white mr-[24rem] ml-3 mt-12'>TIME SPENT</p>
              </div>
            </div>
          </div>
          {/* Right door */}
          <div className="w-1/2 h-screen rounded-r-lg border-4 border-[#6cd0ce]"></div>
        </div>
        {/* Circle */}
        <div className="absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[27rem] h-[27rem] rounded-full flex flex-col items-center justify-center border-4 border-[#6cd0ce] shadow-white">
          {/* Input field */}
          <input
            type="password"
            className="w-4/5 h-10 px-2 py-2 mt-12 border bg-black border-[#6cd0ce] mb-3"
            placeholder="Password"
          />
          {/* Enter Lab button */}
          <button className="text-white bg-[#6cd0ce] px-4 py-2 mt-5 border border-[#6cd0ce] hover:bg-[#4db6ac]">
            Enter Lab
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkylineMeri;
