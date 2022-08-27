import React from 'react';
import { useContextProvider } from '../ContextProvider';

const DescriptionMenu: React.FC = () => {
  
  const { description } = useContextProvider();

  return (
    <div className='w-full h-52 border-solid border-4 border-black rounded p-1 break-words bg-sky-700 text-green-500'>
      {'> ' + description}
    </div>
  );
}

export default DescriptionMenu;

