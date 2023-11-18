import React, { useEffect, useRef, useState } from 'react'
import { useContextProvider } from '../ContextProvider'
import { common } from '../../internationalization/Captions'
import { WarningOutlined } from '@ant-design/icons'
import { RECENTLY_VALUES } from '../Constants'
import { useOutsideClick } from '../../custormHooks'

const SearchBlock: React.FC = () => {
  const { lang, input, setInput, inputError, setInputError } = useContextProvider()
  const inputReference = useRef<HTMLInputElement>(null);
  const [dropdown, setDropdown] = useState(false);
  const recently: string[] = JSON.parse(localStorage.getItem(RECENTLY_VALUES) ?? '[]');

  useOutsideClick(inputReference, () => { setDropdown(false) }, dropdown);

  useEffect(() => {
    inputReference.current?.focus();
  }, [inputError])

  return (
    <div className='w-11/12 relative'>
      <WarningOutlined
        className='absolute text-red-500 mt-9 pl-1'
        style={{ fontSize: '32px', display: inputError ? 'initial' : 'none' }}
      />
      <input
        ref={inputReference}
        placeholder={common[lang].placeholder}
        value={input}
        className={`w-11/12 h-10 mt-8 rounded${dropdown ? '-t' : ''}-md ${inputError ? 'pl-11' : 'pl-1'}`}
        style={{ width: '-webkit-fill-available' }}
        onClick={() => { setDropdown(recently.length > 0) }}
        onChange={event => {
          setInput(event.target.value)
          if (inputError) {
            setInputError(false)
          }
        }}
      />
      <div className={`text-red-500 text-xs pl-1 ${inputError ? 'inline-block' : 'hidden'}`}>
        {common[lang].inputErrorMessage}
      </div>
      {dropdown &&
        <ul className='list-none absolute left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
          {recently.filter(value => value.includes(input)).map(value => (
            <li
              key={value}
              onClick={() => {
                setInput(value)
                if (inputError) {
                  setInputError(false)
                }
              }}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >{value}</li>
          ))}
        </ul>}
    </div>


  )
}

export default SearchBlock
