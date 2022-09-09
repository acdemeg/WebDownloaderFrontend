import React from 'react';
import SearchBlock from './SearchBlock';
import Menu from '../menu/Menu';
import DownloadFileIframe from '../components/DownloadFileIframe';


const MainContainer: React.FC = () => {
  return (
    <div className="bg-stone-300 h-96 w-1/2 min-w-[48rem] max-w-4xl 
        mx-auto rounded-xl flex flex-col justify-start items-center">
      <SearchBlock />
      <Menu/>
      <DownloadFileIframe />
    </div>
  );
}

export default MainContainer;
