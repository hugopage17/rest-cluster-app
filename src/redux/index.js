import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const middleware = [thunk]

const initialState = {
  user:{},
  userData:{},
  url:'',
  method:'GET',
  queries:[],
  headers:[{key:'',value:''}, {key:'',value:''}, {key:'',value:''}],
  body:'',
  response:{}
}

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return{
        ...state,
        user:action.payload
      }
    case 'GET_APP_DATA':
      return{
        ...state,
        userData:action.payload
      }
    case 'SET_URL':
        return{
            ...state,
            url:action.payload
        }
    case 'SET_METHOD':
      return{
        ...state,
        method:action.payload
      }
    case 'SET_QUERIES':
      return{
        ...state,
        queries:action.payload
      }
    case 'SET_HEADERS':
      return{
        ...state,
        headers:action.payload
      }
    case 'SET_BODY':
      return{
        ...state,
        body:action.payload
      }
    case 'SET_RESPONSE':
      return{
        ...state,
        response:action.payload
      }
    default:
      return state;
  }
}