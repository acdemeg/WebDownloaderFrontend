import React from 'react';
import { Input } from 'antd';

const SearchBlock: React.FC = () =>   {
  return (
      <Input className='w-11/12 h-10 mt-8 rounded-md' placeholder='http://example.com'/>
  );
}

export default SearchBlock;
