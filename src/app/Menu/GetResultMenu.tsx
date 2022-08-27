import React from 'react';
import Btn from '../components/Btn';
import { FileZipOutlined, ApartmentOutlined, SaveOutlined } from '@ant-design/icons';

const GetResultMenu: React.FC = () =>   {
  return (
    <div className='flex flex-col justify-evenly'>
      <Btn title=' Get Zip' Icon={FileZipOutlined}/>
      <Btn title=' Get Size' Icon={SaveOutlined}/>
      <Btn title=' Get Site Map' Icon={ApartmentOutlined}/>
    </div>
  );
}

export default GetResultMenu;
