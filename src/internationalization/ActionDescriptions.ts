import { ENG, RUS } from '../app/Constants'
import { type Internationalization } from '../app/Types'


export const actionsDescList: Internationalization = {
  [ENG]: {
    DEFAULT: 'The application is designed to create copies (mirrors) of websites and download them as a zip-archive. After unpacking the archive, open the index.html file in your browser to browse the site locally.',
    GET_STATUS_TASK: 'Find out the status of a running task by its ID.',
    START_DOWNLOAD: 'Start downloading the static content of the specified site.',
    ESTIMATE_SIZE: 'Perform a rough estimate of the size of the data that will be downloaded from the specified site.',
    BUILD_SITE_MAP: 'Build a sitemap in the form of a tree.',
    GET_ZIP: 'Get an archive with a site mirror (if the download is completed successfully).',
    GET_SIZE: 'Find out the approximate size of the site data that will be downloaded (if the evaluation was successful).',
    GET_SITE_MAP: 'Get a sitemap (if the build was successful).'
  },
  [RUS]: {
    DEFAULT: 'Приложение предназначено для создания копий(зеркал) web-сайтов и их скачивания в виде zip-архива. После распаковки архива откройте файл index.html в вашем браузере для локального простомтра сайта.',
    GET_STATUS_TASK: 'Узнать статус выполняемой задачи по её ID.',
    START_DOWNLOAD: 'Начать загрузку статического содержимого указанного сайта.',
    ESTIMATE_SIZE: 'Выполнить приблизительную оценку размера данных которые будут загружены с указанного сайта.',
    BUILD_SITE_MAP: 'Построить карту сайта в виде дерева.',
    GET_ZIP: 'Получить архив с зеркалом сайта(если загрузка завершена успешно).',
    GET_SIZE: 'Узнать приблизительный размер данных сайта которые будут скачаны(если оценка прошла успешно).',
    GET_SITE_MAP: 'Получить карту сайта(если построение прошло успешно).'
  }
}
