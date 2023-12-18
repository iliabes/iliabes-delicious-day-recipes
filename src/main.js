import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import components from './components/UI/index'
import serch from './page/serch.vue'
import home from './page/home.vue'
import serchName from './page/serchName.vue'
import sortLetter from './page/sortLetter.vue'
import pageMeals from './page/pageMeals.vue'
import ingridient from './page/ingridient.vue'
import foodCategories from './page/foodCategories.vue'
import mealLands from './page/mealLands.vue'
import randomMeals from './page/randomMeals.vue'
import vuex from 'vuex'
import store from './store/index'






const app = createApp(App)

const router = createRouter({
  routes: [
  {
    path: '/',
    component: home,    
  },
  {
    path: '/serchName',
    component: serchName
  },
  {
    path: '/foodCategories',
    name:'foodCategories',
    component: foodCategories
  },
  {
    path: '/randomMeals',
    name:'randomMeals',
    component: randomMeals
  },
  {
    path: '/mealsLands',
    name:'mealsLands',
    component: mealLands
  },
  {
    name:'sortLetter',
    path: '/sortLetter/:letter?',
    component: sortLetter
  },
  {
    name:'search',
    path: '/serch/:ingrid?',
    component: serch,
  },
  {
    name:'ingridient',
    path: '/ingridient/:ingrid',
    component: ingridient,
  },
  {
    path: '/pageMeals/:id?',
    name:'pageMeals',
    component: pageMeals,
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
