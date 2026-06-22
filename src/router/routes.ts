import Homepage from '@/pages/Homepage.vue'
import MoviePage from '@/pages/MoviePage.vue'
import Notfound from '@/pages/404.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
  },
  {
    path: '/movie',
    name: 'movie',
    component: MoviePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Notfound,
  },
]