import React from 'react';
import SVG from './box.svg';


const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center text-5xl my-8 bg-pink-400 logo-font">
      <div>web</div>
      <img src={SVG} alt="Logo" />
      <div>downloder</div>
    </div>
  );
}

export default Logo;