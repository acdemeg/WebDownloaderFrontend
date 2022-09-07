import React from 'react';
import SearchBlock from './SearchBlock';
import Menu from './Menu/Menu';


const MainContainer: React.FC = () => {
  return (
    <div className="bg-stone-300 h-96 w-1/2 min-w-min max-w-4xl mx-auto my-16 rounded-xl flex flex-col justify-start items-center">
      <SearchBlock />
      <Menu/>
    </div>
  );
}

export default MainContainer;
