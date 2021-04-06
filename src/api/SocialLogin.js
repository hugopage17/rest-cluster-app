import fire from './Fire.js'
import firebase from 'firebase'
import {apiCall} from './CallToAPI.js'

const setData = (user) => {
  return fire.auth().currentUser.getIdToken().then((idToken) =>  {
    return apiCall('new-user', 'POST', {id:user.uid, accessToken:idToken}).then((res)=>{
      return {user, idToken}
    }).catch(err => {return err})
  }).catch((error) =>  { return error})
}

export const googleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return fire.auth().signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    setData(user).then((res) => {return res})
  }).catch((error) => {
    return error
  })
}

export const githubLogin = () => {
  var provider = new firebase.auth.GithubAuthProvider();
  return fire.auth().signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    setData(user).then((res) => {return res})
  }).catch((error) => {
    return error
  })
}
