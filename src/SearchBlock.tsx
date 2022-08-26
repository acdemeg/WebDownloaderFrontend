import React from 'react';
import { Input, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



const SearchBlock: React.FC = () => {
  return (
    <div className="h-96 w-1/2 bg-teal-800 mx-auto my-16 rounded-xl flex flex-col justify-start items-center">
      <Input className='w-full h-10 my-8 rounded-md' placeholder='http://example.com'/>
      <Button  className='bg-red-500 rounded-md h-11 w-40 text-xl' icon={<DownloadOutlined />}>
        Download
      </Button>
    </div>
  );
}

export default SearchBlock;
