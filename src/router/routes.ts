import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/times',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'words', component: () => import('pages/TimesWord.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/landing/index.vue') },
      { path: 'login', component: () => import('pages/landing/login.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
