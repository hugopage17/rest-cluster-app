const forLoop = (array, cb) => {
  for(var i = 0; i < array.length; i++){
    cb(i)
  }
}

export const fetchCall = async(url, queries, method, headersData, body) => {
  if(queries.length !== 0){
    url = url.concat('?')
    forLoop(queries, (i)=>{
      const q = queries[i]
      url = url.concat(`${q.key}=${q.value}&`)
    })
  }
  var headers = new Headers()
  forLoop(headersData, (i) => { headers.append(headersData[i].key, headersData[i].value) })
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
