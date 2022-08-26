import React from 'react';
import { Input } from 'antd';
import Menu from './Menu';


const SearchBlock: React.FC = () => {
  return (
    <div className="bg-stone-300 h-96 w-1/2 mx-auto my-16 rounded-xl flex flex-col justify-start items-center">
      <Input className='w-full h-10 mt-8 rounded-md' placeholder='http://example.com'/>
      <Menu/>
    </div>
  );
}

export default SearchBlock;
