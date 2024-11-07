declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

// Пустой экспорт для обозначения файла как модуля
export {}