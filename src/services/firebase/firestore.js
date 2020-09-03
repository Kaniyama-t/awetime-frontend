import firebase from 'firebase/app'

/**
 * https: //firebase.google.com/docs/reference/js/firebase.auth.Auth.html#create-user-with-email-and-password
 *
 * @return {Object} firestore
 */
export const firestore = () => {
  return firebase.firestore()
}

export const firestoreCollection = (path) => {
  return firebase.firestore().collection(path)
}
