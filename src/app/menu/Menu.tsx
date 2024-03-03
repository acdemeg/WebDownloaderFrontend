import React from 'react'
import MenuButton from './MenuButton'
import { SearchOutlined } from '@ant-design/icons'
import RunTaskMenu from './RunTasksMenu'
import GetResultMenu from './GetResultMenu'
import DescriptionMenu from './DescriptionMenu'
import { GET_STATUS_TASK, ONE_TIME_INFO_BODY_MOCK, ONE_TIME_INFO_STATUS_HEADER, RECENTLY_VALUES, RECENTLY_VALUES_LENGTH } from '../Constants'
import { useContextProvider } from '../ContextProvider'
import { titleButtonList } from '../../internationalization/ButtonTitles'
import ApiServiceData from '../api/ApiServiceData'
import { type ApiMethod } from '../Types'
import { common } from '../../internationalization/Captions'

const Menu: React.FC = () => {
  const { lang, input, oneTimeInfoData, setOneTimeInfoData, setInputError } = useContextProvider()

  const showOneTimeInfo = (headerType: string, apiMethod: ApiMethod): void => {
    if (input !== '') {
      setOneTimeInfoData({
        ...oneTimeInfoData,
        visible: true,
        headerType,
        apiMethod,
        value: common[lang][ONE_TIME_INFO_BODY_MOCK],
        textColor: 'blue',
        click: Math.random()
      })

      // save input in localStorage
      const recentlyValues: string[] = JSON.parse(localStorage.getItem(RECENTLY_VALUES) ?? '[]');
      if (recentlyValues.length > RECENTLY_VALUES_LENGTH) {
        recentlyValues.shift();
      }
      localStorage.setItem(
        RECENTLY_VALUES,
        JSON.stringify(recentlyValues.includes(input) ? recentlyValues : [...recentlyValues, input])
      );
    }
    else {
      setInputError(true)
    }
  }

  return (
    <div className='w-full h-72 flex justify-evenly mb-5'>
      <RunTaskMenu showOneTimeInfo={showOneTimeInfo} />
      <div className='flex flex-col justify-around items-center w-1/3'>
        <MenuButton
          action={GET_STATUS_TASK}
          title={titleButtonList[lang][GET_STATUS_TASK]}
          Icon={SearchOutlined}
          hanlder={() => {
            showOneTimeInfo(
              ONE_TIME_INFO_STATUS_HEADER,
              ApiServiceData.statusTask.bind(ApiServiceData)
            )
          }} />
        <DescriptionMenu />
      </div>
      <GetResultMenu showOneTimeInfo={showOneTimeInfo} />
    </div>
  )
}

export default Menu
