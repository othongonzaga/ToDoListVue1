import { createApp } from 'vue'
import App from './App.vue'
import TodoList from './components/TodoList.vue'

createApp(App)
  .component('TodoList', TodoList)
  .mount('#app')
