import React from 'react';
import Btn from '../components/Btn';
import {  CloudDownloadOutlined, HddOutlined, ForkOutlined } from '@ant-design/icons';

const RunTaskMenu: React.FC = () =>   {
  return (
    <div className='flex flex-col justify-evenly'>
      <Btn title=' Start Download' Icon={CloudDownloadOutlined}/>
      <Btn title=' Estimate Size' Icon={HddOutlined}/>
      <Btn title=' Build Site Map' Icon={ForkOutlined}/>        
    </div>
  );
}

export default RunTaskMenu;
