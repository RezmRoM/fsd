// Создание экземпляра приложения
import { createApp } from 'vue';
// Корневой компонент приложения
import App from '@app/ui/App.vue';
// Конфигурация маршрутизатора
import { router } from '@/shared/config/router';
// Глобальные стили приложения
import '@app/styles/index.css';

// Создание экземпляра приложения Vue, передача корневого компонента
const app = createApp(App);
// Подключение маршрутизатора к приложению
app.use(router);
// Монтирование приложения к DOM-элементу с id 'app'
app.mount('#app');
