import firebaseServices from '../services/firebase'
import { Notify } from 'quasar'
import { store } from '../store'
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function () {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  Router.beforeEach(async (to, from, next) => {
    const { ensureAuthIsInitialized, isAuthenticated } = firebaseServices
    try {
      // Force the app to wait until Firebase has
      // finished its initialization, and handle the
      // authentication state of the user properly
      await ensureAuthIsInitialized(store)

      // 認証が必要なページへの処理
      if (to.matched.some(record => record.meta.requiresAuth)) {

        // 認証済み
        if (isAuthenticated(store)) {
          next() // Routerの設定準拠

        // 未認証
        } else {
          next('/auth/login') // ログイン画面に上書き
          Notify.create({
            message: to.meta.requiresAuthReason,
            color: 'negative'
          })
        }

      // ログイン済みセッションでの新規登録・ログインページ
      } else if ((to.path === '/auth/register' && isAuthenticated(store)) ||
        (to.path === '/auth/login' && isAuthenticated(store))) {
        next('/u/dashboard') // アクセス禁止(/dashboardへ強制転送)

      // 未ログインかつ認証が不必要なページへの処理
      } else {
        next() // Routerの設定準拠
      }

    // エラーハンドリング
    } catch (err) {
      Notify.create({
        message: `${err}`,
        color: 'negative'
      })
    }
  })

  return Router
}
