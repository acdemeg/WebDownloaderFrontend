import React from 'react'
import { useContextProvider } from '../ContextProvider'

const DescriptionMenu: React.FC = () => {
  const { actionDescription } = useContextProvider()

  return (
    <div
      className='min-w-full h-52 border-solid border-4 border-black rounded p-1 break-words bg-sky-700 text-green-500'
      style={{ minWidth: '16rem' }}>
      {'> ' + actionDescription}
    </div>
  )
}

export default DescriptionMenu
