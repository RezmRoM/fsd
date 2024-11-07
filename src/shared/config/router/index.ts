import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { HomePage } from '@pages/home'

// Определение массив маршрутов с типом RouteRecordRaw
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]

// Создаение и экспорт экземпляра маршрутизатора
export const router = createRouter({
  history: createWebHistory(), // HTML5 History API для навигации
  routes // Передаем массив маршрутов в конфигурацию
}) 