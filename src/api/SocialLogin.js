import fire from './Fire.js'
import firebase from 'firebase'

export const googleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return fire.auth().signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    return user
  }).catch((error) => {
    return error
  })
}

export const githubLogin = () => {
  var provider = new firebase.auth.GithubAuthProvider();
  return fire.auth().signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    return user
  }).catch((error) => {
    return error
  })
}
