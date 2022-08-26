import React from 'react';
import Btn from './components/Buttons';
import { FileZipOutlined, CloudDownloadOutlined, HddOutlined, ApartmentOutlined, SearchOutlined, ForkOutlined, SaveOutlined } from '@ant-design/icons';


const Menu: React.FC = () =>   {
  return (
    <div className='w-full flex justify-evenly'>
      <div className='h-72 flex flex-col justify-evenly'>
        <Btn bgColor='amber' title=' Start Download' Icon={CloudDownloadOutlined}/>
        <Btn bgColor='cyan' title=' Estimate Size' Icon={HddOutlined}/>
        <Btn bgColor='emerald' title=' Build Site Map' Icon={ForkOutlined}/>        
      </div>
      <div className='h-72 flex flex-col justify-end items-center w-1/3'>
        <Btn bgColor='rose' title=' Status Task' Icon={SearchOutlined}/>
        <div className='h-52 border-double border-8 border-black bg-sky-700'>
          <span className='text-green-500'>
            &gt; This method allow get approximately size web-resource
          </span>
        </div>
      </div>
      <div className='h-72 flex flex-col justify-evenly'>
        <Btn bgColor='yellow' title=' Get Zip' Icon={FileZipOutlined}/>
        <Btn bgColor='sky' title=' Get Size' Icon={SaveOutlined}/>
        <Btn bgColor='green' title=' Get Site Map' Icon={ApartmentOutlined}/>
      </div>
    </div>
  );
}

export default Menu;
