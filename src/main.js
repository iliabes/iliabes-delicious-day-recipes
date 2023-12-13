import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import components from './components/UI/index'
import serch from './page/serch.vue'
import home from './page/home.vue'
import sortIngridiebt from './page/sortIngridient.vue'
import sortLetter from './page/sortLetter.vue'
import pageMeals from './page/pageMeals.vue'
import vuex from 'vuex'
import store from './store/index'



const app = createApp(App)

const router = createRouter({
  routes: [
  {
    path: '/',
    component: home,
    children:[
      {
        path: 'sortIngridiebt',
        component: sortIngridiebt
      },
      {
        path: '/sortLetter',
        component: sortLetter
      },
      {
        name:'sortLetter',
        path: '/sortLetter/:letter?',
        component: sortLetter
      },
      {
        path: '/serch',
        component: serch,
      },
      {
        path: '/pageMeals/:id?',
        name:'pageMeals',
        component: pageMeals,
      },
    ]
  },

],
  history: createWebHistory()
})

components.forEach(component => {
    app.component(component.name,component)
});

app.use(vuex)
app.use(router)
app.use(store)
app.mount('#app')
