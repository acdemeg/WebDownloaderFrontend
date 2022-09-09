import React from 'react';
import { useContextProvider } from '../ContextProvider';

const DownloadFileIframe: React.FC = () =>   {

  const {fileURL} = useContextProvider();

  return (
      <iframe title='Trick for download file' style={{display: 'none'}} src={fileURL} />
  );
}

export default DownloadFileIframe;