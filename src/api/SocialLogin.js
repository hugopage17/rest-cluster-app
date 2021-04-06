import fire from './Fire.js'
import firebase from 'firebase'
import {apiCall} from './CallToAPI.js'

export const googleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return fire.auth().signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    return apiCall('new-user', 'POST', {id:user.uid}).then((res)=>{
      return {user, token}
    }).catch(err => {return err})

  }).catch((error) => {
    return error
  })
}

export const githubLogin = () => {
  var provider = new firebase.auth.GithubAuthProvider();
  return fire.auth().signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    return apiCall('new-user', 'POST', {id:user.uid}).then((res)=>{
      return {user, token}
    }).catch(err => {return err})
  }).catch((error) => {
    return error
  })
}
