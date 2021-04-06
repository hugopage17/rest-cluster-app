export const apiCall = (path, method, body) => {
  let headers = {
    "Accept":"application/json",
    "Content-Type":"application/json",
  }
  return fetch(`http://localhost:5000/${path}`, {method:method, body:JSON.stringify(body), headers:headers, mode:'cors'}).then(res => res.json()).then(data => {return data}).catch(err => {return err})
}
