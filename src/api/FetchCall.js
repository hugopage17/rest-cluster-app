export const fetchCall = async(url, queries, method, headersData, body) => {
  if(queries.length !== 0){
    url = url.concat('?')
    for(var i = 0; i < queries.length; i++){
      const q = queries[i]
      console.log(q);
      url = url.concat(`${q.key}=${q.value}&`)
    }
  }
  var headers = new Headers()
  for(var i = 0; i < headersData.length; i++){
    headers.append(headersData[i].key, headersData[i].value)
  }
  let config = {method:method, headers:headers}
  if(method === 'POST'){
    config['body'] = body
  }
  try{
    const call = await fetch(url, config)
    let arr = []
    call.headers.forEach((val, key) => { arr.push({val, key}) })
    const data = await call.json()
    return {res:call, data: JSON.stringify(data, null, 2), headers:arr}
  }catch(err){ return err }

}
