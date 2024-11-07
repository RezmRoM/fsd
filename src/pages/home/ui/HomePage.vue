<template>
  <div class="home-page">
    <h1 class="title">Feature-Sliced Design</h1>
    <div class="fsd-container">
      <div class="fsd-layer">
        <div class="layer-number">1</div>
        <div class="layer-content">
          <h2>App</h2>
          <p>Инициализация приложения</p>
        </div>
      </div>
      <div class="fsd-layer">
        <div class="layer-number">2</div>
        <div class="layer-content">
          <h2><s>Processes</s></h2>
          <p>Сложные бизнес-процессы</p>
        </div>
      </div>
      <div class="fsd-layer">
        <div class="layer-number">3</div>
        <div class="layer-content">
          <h2>Pages</h2>
          <p>Композиция виджетов и фич</p>
        </div>
      </div>
      <div class="fsd-layer">
        <div class="layer-number">4</div>
        <div class="layer-content">
          <h2>Widgets</h2>
          <p>Композиция сущностей и фич</p>
        </div>
      </div>
      <div class="fsd-layer">
        <div class="layer-number">5</div>
        <div class="layer-content">
          <h2>Features</h2>
          <p>Действия пользователя</p>
        </div>
      </div>
      <div class="fsd-layer">
        <div class="layer-number">6</div>
        <div class="layer-content">
          <h2>Entities</h2>
          <p>Бизнес-сущности</p>
        </div>
      </div>
      <div class="fsd-layer">
        <div class="layer-number">7</div>
        <div class="layer-content">
          <h2>Shared</h2>
          <p>Переиспользуемый код</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Для создания компонента
import { defineComponent } from 'vue'; 

// Экспорт компонент, используя defineComponent для типизации
export default defineComponent({ 
    name: 'HomePage', 
});
</script>
