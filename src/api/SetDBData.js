import {apiCall} from './CallToAPI.js'
import fire from './Fire.js'

export const setData = (user) => {
    return fire.auth().currentUser.getIdToken().then((idToken) =>  {
      return apiCall('set-data', 'POST', {id:user.uid, accessToken:idToken})
        .then((res)=>{ return {user, idToken}})
        .catch(err => {return err})
    }).catch((error) =>  { return error})
  }