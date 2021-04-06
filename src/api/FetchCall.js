export const fetchCall = async(url) => {
  try{
    const call = await fetch(url)
    let arr = []
    call.headers.forEach((val, key) => { arr.push({val, key}) })
    const data = await call.json()
    return {res:call, data: JSON.stringify(data, null, 2), headers:arr}
  }catch(err){ return err }

}
