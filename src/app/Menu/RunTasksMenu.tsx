import React from 'react';
import Btn from '../components/Btn';
import {  CloudDownloadOutlined, HddOutlined, ForkOutlined } from '@ant-design/icons';

const RunTaskMenu: React.FC = () =>   {
  return (
    <div className='h-72 flex flex-col justify-evenly'>
      <Btn bgColor='amber' title=' Start Download' Icon={CloudDownloadOutlined}/>
      <Btn bgColor='cyan' title=' Estimate Size' Icon={HddOutlined}/>
      <Btn bgColor='emerald' title=' Build Site Map' Icon={ForkOutlined}/>        
    </div>
  );
}

export default RunTaskMenu;
