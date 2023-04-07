import React from 'react'
import { Input } from 'antd'
import { useContextProvider } from '../ContextProvider'
import { common } from '../internationalization/Common'

const SearchBlock: React.FC = () => {
  const { lang, input, setInput } = useContextProvider()

  return (
      <Input
        className='w-11/12 h-10 mt-8 rounded-md pl-1'
        placeholder={common[lang].placeholder}
        value={input}
        onChange={event => { setInput(event.target.value) }}
       />
  )
}

export default SearchBlock
