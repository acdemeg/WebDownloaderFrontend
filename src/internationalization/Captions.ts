import { type Internationalization } from '../app/Types'
import { ENG, RUS } from '../app/Constants'

export const common: Internationalization = {
  [ENG]: {
    placeholder: 'To Enter site link otherwise task ID',
    oneTimeInfoTaskHeader: 'Task ID',
    oneTimeInfoSizeHeader: 'The resource size is approximately equal to',
    oneTimeInfoStatusHeader: 'The task have status',
    oneTimeInfoErrorHeader: 'Error occurred!',
    oneTimeInfoDownloadHeader: 'Download start...',
    oneTimeInfoBodyMock: 'Loading...',
    inputErrorMessage: 'Field is a required'
  },
  [RUS]: {
    placeholder: 'Введите адрес сайта либо ID задачи',
    oneTimeInfoTaskHeader: 'ID Задачи',
    oneTimeInfoSizeHeader: 'Размер ресурса приблизительно равен',
    oneTimeInfoStatusHeader: 'Задача находится в статусе',
    oneTimeInfoErrorHeader: 'Произошла ошибка!',
    oneTimeInfoDownloadHeader: 'Загрузка началась...',
    oneTimeInfoBodyMock: 'Загрузка...',
    inputErrorMessage: 'Поле не может быть пустым'
  }
}
