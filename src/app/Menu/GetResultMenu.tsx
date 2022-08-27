import React from 'react';
import Btn from '../components/Btn';
import { FileZipOutlined, ApartmentOutlined, SaveOutlined } from '@ant-design/icons';

const GetResultMenu: React.FC = () =>   {
  return (
    <div className='h-72 flex flex-col justify-evenly'>
      <Btn bgColor='yellow' title=' Get Zip' Icon={FileZipOutlined}/>
      <Btn bgColor='sky' title=' Get Size' Icon={SaveOutlined}/>
      <Btn bgColor='green' title=' Get Site Map' Icon={ApartmentOutlined}/>
    </div>
  );
}

export default GetResultMenu;
