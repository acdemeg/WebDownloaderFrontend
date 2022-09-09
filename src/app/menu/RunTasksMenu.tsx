import React from 'react';
import MenuButton from './MenuButton';
import {  CloudDownloadOutlined, HddOutlined, ForkOutlined } from '@ant-design/icons';
import { START_DOWNLOAD, ESTIMATE_SIZE, BUILD_SITE_MAP } from '../Constants';
import { titleButtonList } from '../internationalization/ButtonTitles';
import { useContextProvider } from '../ContextProvider';

const RunTaskMenu: React.FC = () =>   {

  const {lang} = useContextProvider();

  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton action={START_DOWNLOAD} title={titleButtonList[lang][START_DOWNLOAD]} Icon={CloudDownloadOutlined} 
        hanlder={() => {}}/>
      <MenuButton action={ESTIMATE_SIZE} title={titleButtonList[lang][ESTIMATE_SIZE]} Icon={HddOutlined} 
        hanlder={() => {}}/>
      <MenuButton action={BUILD_SITE_MAP} title={titleButtonList[lang][BUILD_SITE_MAP]} Icon={ForkOutlined} 
        hanlder={() => {}}/>        
    </div>
  );
}

export default RunTaskMenu;
