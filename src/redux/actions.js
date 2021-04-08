export const handleUser = user => ({
    type:'SET_USER',
    payload:user
  })
  
  export const handleAppData = data => ({
    type:'GET_APP_DATA',
    payload:data
  })

  export const endpointHandler = url => ({
      type:'SET_URL',
      payload:url
  })

  export const setMethod = method => ({
    type:'SET_METHOD',
    payload:method
  })

  export const queriesHandler = queries => ({
    type:'SET_QUERIES',
    payload:queries
  })

export const headersHandler = queries => ({
  type:'SET_HEADERS',
  payload:queries
})

export const bodyHandler = body => ({
  type:'SET_BODY',
  payload:body
})

export const responseHandler = res => ({
  type:'SET_RESPONSE',
  payload:res
})