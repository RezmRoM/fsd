// Подключение типов клиентского API Vite для поддержки HMR и других функций разработки
/// <reference types="vite/client" />

// Объявление типов для Vue компонентов (.vue файлов)
declare module '*.vue' {
  // Для типизации компонентов
  import type { DefineComponent } from 'vue'
  // Объявление компонента с пустыми входными и выходными props, и any для остальных опций
  const component: DefineComponent<{}, {}, any>
  // Экспорт компонента как модуля по умолчанию
  export default component
}

declare module '*.svg' {
  // Определение content как строки, содержащей путь или данные SVG
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

// Интерфейс для переменных окружения Vite
interface ImportMetaEnv {
  // Заголовок приложения
  readonly VITE_APP_TITLE: string
  // URL API
  readonly VITE_API_URL: string
  // Другие переменные окружения
}

// Расширение интерфейса ImportMeta для доступа к переменным окружения
interface ImportMeta {
  // Свойство env, содержащее все переменные окружения
  readonly env: ImportMetaEnv
}
