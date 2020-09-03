import { RouteConfig } from 'vue-router'
// import firebaseService from 'src/services/firebase'
import firebase from 'firebase'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: 'u/dashboard'
  },
  {
    path: '/u',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'u/dashboard',
    meta: {
      requiresAuth: true,
      requiresAuthReason: 'お手数ですが，ログインをお願い致します．'
    },
    children: [
      { path: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'tutorial', meta: { tutorial: true }, component: () => import('pages/Index.vue') },
      {
        path: 'stock/*', component: () => import('pages/StockWordDetail.vue')
      },
      { path: 'user/not_found', component: () => import('pages/Error404.vue') },
      {
        path: 'u/:userid',
        component: () => import('pages/UserFront.vue') //,
        // beforeEnter: (to, from, next) => {
        //   let FB_CONFIG = process.env.FIREBASE_CONFIG
        //   firebase.initializeApp(FB_CONFIG).firestore().collection('users').doc(to.meta.userid.substring(3))
        //   let getUserInfo = userRef.get().then(
        //     doc => {
        //       console.log(doc)
        //       if (!doc.exist()) {
        //         next('/user/not_found')
        //       } else {
        //         next()
        //       }
        //     }
        //   ).catch(err => {
        //     console.log('Error getting document', err);
        //   });
        // }
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'forgotPassword',
        name: 'ForgotPassword',
        component: () => import('pages/ForgotPassword.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/Auth.vue')
      },
      {
        path: 'logout',
        name: 'Logout',
        meta: { requiresAuth: true, requiresAuthReason: '未ログイン状態ではログアウトできません．' },
        component: () => import('pages/Logout.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/Auth.vue')
      }
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
