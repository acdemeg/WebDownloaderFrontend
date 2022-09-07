import React from 'react';
import MenuButton from './MenuButton';
import {  CloudDownloadOutlined, HddOutlined, ForkOutlined } from '@ant-design/icons';
import { START_DOWNLOAD, ESTIMATE_SIZE, BUILD_SITE_MAP } from '../Constants';

const RunTaskMenu: React.FC = () =>   {
  return (
    <div className='flex flex-col justify-evenly'>
      <MenuButton action={START_DOWNLOAD} title=' Start Download' Icon={CloudDownloadOutlined}/>
      <MenuButton action={ESTIMATE_SIZE} title=' Estimate Size' Icon={HddOutlined}/>
      <MenuButton action={BUILD_SITE_MAP} title=' Build Site Map' Icon={ForkOutlined}/>        
    </div>
  );
}

export default RunTaskMenu;
