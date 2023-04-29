import React, { useEffect, useRef } from 'react'
import { useContextProvider } from '../ContextProvider'
import { common } from '../../internationalization/Captions'
import { WarningOutlined } from '@ant-design/icons'

const SearchBlock: React.FC = () => {
  const { lang, input, setInput, inputError, setInputError } = useContextProvider()
  const inputReference = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputReference.current?.focus();
  }, [inputError])

  return (
    <div className='w-11/12 relative'>
      <WarningOutlined
        className='absolute text-red-500 mt-9 pl-1'
        style={{ fontSize: '32px', display: inputError ? 'initial' : 'none' }} />
      <input
        ref={inputReference}
        placeholder={common[lang].placeholder}
        value={input}
        className={`w-11/12 h-10 mt-8 rounded-md ${inputError ? 'pl-11' : 'pl-1'}`}
        style={{ width: '-webkit-fill-available' }}
        onChange={event => {
          setInput(event.target.value)
          if (inputError)
            setInputError(false)
        }} />
      <div className={`text-red-500 text-xs pl-1 ${inputError ? 'inline-block' : 'hidden'}`}>
        {common[lang].inputErrorMessage}
      </div>
    </div>


  )
}

export default SearchBlock
