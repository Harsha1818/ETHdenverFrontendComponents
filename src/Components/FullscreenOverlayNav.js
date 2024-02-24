import React, { useState } from 'react';

function FullscreenOverlayNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`overlay fixed w-full h-full top-0 left-0 z-50 transition-transform  duration-500 ${isOpen ? 'transform translateY-0 opacity-100' : 'transform -translate-y-full opacity-0'}`} style={{ background: 'linear-gradient(rgb(54, 40, 169) 1.1%, rgb(188, 114, 209) 130%)', opacity: '0.8', }}>
        <a href="#" className="closebtn absolute top-8 right-8 text-white text-4xl" onClick={closeNav}>&times;</a>
        <div className="overlay-content flex flex-col justify-center items-center h-full">
          <a href="#" className="text-white text-3xl py-4">About</a>
          <a href="#" className="text-white text-3xl py-4">Services</a>
          <a href="#" className="text-white text-3xl py-4">Clients</a>
          <a href="#" className="text-white text-3xl py-4">Contact</a>
        </div>
      </div>
      <span className="text-3xl cursor-pointer" onClick={openNav}>&#9776; Menu</span>
    </div>
  );
}

export default FullscreenOverlayNav;
