// Объявление модуля для файлов с расширением .vue
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // Объявление константы component типа DefineComponent с пустыми props, events и any для других опций
    const component: DefineComponent<{}, {}, any>
    // Экспорт компонента по умолчанию
    export default component
  }