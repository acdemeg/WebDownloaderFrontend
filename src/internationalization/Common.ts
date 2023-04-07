import { type Internationalization } from '../app/Types'

export const common: Internationalization = {
  Eng: {
    placeholder: 'To Enter site link otherwise task ID',
    oneTimeInfoTaskHeader: 'Task ID',
    oneTimeInfoSizeHeader: 'The resource size is approximately equal to',
    oneTimeInfoStatusHeader: 'The task have status',
    oneTimeInfoErrorHeader: 'Error occurred!',
    oneTimeInfoDownloadHeader: 'Download start...',
    oneTimeInfoBodyMock: 'Loading...'
  },
  Rus: {
    placeholder: 'Введите адрес сайта либо ID задачи',
    oneTimeInfoTaskHeader: 'ID Задачи',
    oneTimeInfoSizeHeader: 'Размер ресурса приблизительно равен',
    oneTimeInfoStatusHeader: 'Задача находится в статусе',
    oneTimeInfoErrorHeader: 'Произошла ошибка!',
    oneTimeInfoDownloadHeader: 'Загрузка началась...',
    oneTimeInfoBodyMock: 'Загрузка...'
  }
}