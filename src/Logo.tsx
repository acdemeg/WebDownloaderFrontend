import React from 'react';
import SVG from './box.svg';


function Logo() {
  return (
    <div className="flex flex-none justify-center items-center text-5xl bg-pink-400 logo-font">
      <div>web</div>
      <img src={SVG} alt="Logo" />
      <div>downloder</div>
    </div>
  );
}

export default Logo;