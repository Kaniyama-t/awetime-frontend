/* eslint-disable */
import firebaseService from '../services/firebase'

export default ({ router, store, Vue }) => {
  const config = process.env.FIREBASE_CONFIG
  firebaseService.fBInit(config)

  // Validation that our service structure is working
  // with a firebase app instance. Does not validate a
  // valid API key.
  // console.log(firebaseService.auth())

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged((user) => {
    return firebaseService.handleOnAuthStateChanged(store, user)
  }, (error) => {
    console.error(error)
  })

  Vue.prototype.$fb = firebaseService
  store.$fb = firebaseService
}
