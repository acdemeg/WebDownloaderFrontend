import React from 'react';
import { Input } from 'antd';
import { useContextProvider } from './ContextProvider';

const SearchBlock: React.FC = () => {

  const {setInput} = useContextProvider();

  return (
      <Input 
        className='w-11/12 h-10 mt-8 rounded-md pl-1'
        placeholder='http://example.com'
        onChange={event => setInput(event.target.value)}
       />
  );
}

export default SearchBlock;
