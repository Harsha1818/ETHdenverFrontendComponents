import logo from '../Assets/harsha.jpeg';


import React from 'react';

const Flip = () => {
  return (
    <div className="relative flex justify-center items-center top-[-50px]">
      <div className="w-32 h-32">
        <div className="inset-0 flex justify-center items-center rounded-full ">
          <div className="w-24 h-24 rounded-full shadow-lg transform -rotate-y-0 transition-transform duration-1000 ease-in-out hover:rotate-y-180">
            <img src={logo} alt="Coin" className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flip;


