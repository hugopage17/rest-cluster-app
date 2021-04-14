import './App.css';
import Dashboard from './ui/Dashboard/Dashboard.jsx'
import Sidebar from './ui/Dashboard/Sidebar.jsx'
import Navbar from './ui/Navbar/Navbar.jsx'
import Signup from './ui/SignupForms/Signup.jsx'
import Login from './ui/SignupForms/Login.jsx'
import Home from './ui/Home/Home.jsx'
import fire from './api/Fire.js'
import {useEffect} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import NavDash from './ui/Navbar/NavDash.jsx'
import HomeNav from './ui/Navbar/HomeNav.jsx'
import { Provider } from 'react-redux'
import {store} from './redux'
import { useDispatch, useSelector  } from 'react-redux'
import {handleUser, handleAppData, endpointHandler, setMethod, queriesHandler, headersHandler, responseHandler, bodyHandler} from './redux/actions'
import {useState} from 'react'
import DropZone from './ui/Components/DropZone.jsx'


function App({classes}) {
  const dispatch = useDispatch()
  const setUrl = url => dispatch(endpointHandler(url))
  const selectMethod = method => dispatch(setMethod(method))
  const setQueries = queries => dispatch(queriesHandler(queries))
  const setHeaders = headers => dispatch(headersHandler(headers))
  const setResponse = res => dispatch(responseHandler(res))
  const setBody = body => dispatch(bodyHandler(body))
  const setUser = (user) => dispatch(handleUser(user))
  const setUserData = (data) => dispatch(handleAppData(data))
  const user = useSelector((state) => state.user)
  const userData = useSelector((state) => state.userData)
  const [loaded, setLoading] = useState(false)
  const [droppingItem, setDrop] = useState(false)

  useEffect(()=>{ authListener() },[])

  const authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        const user = fire.auth().currentUser
        fire.firestore().collection('users').doc(user.uid).onSnapshot((doc) => {
          const userData = doc.data()
          setUserData(userData)
        });
        setUser(user)
      }else{
        setUser(null)
        setUserData(null) 
      }
      setLoading(true)
      document.getElementById('link-to-dash').click()
    })
  }

  const drop = e => {
    e.preventDefault()
    const historyItem = e.dataTransfer.getData('history_item')
    const request = JSON.parse(historyItem)
    setUrl(request.url)
    selectMethod(request.method)
    setHeaders(request.headers)
    setQueries(request.queries)
    setResponse(request.response)
    setBody(request.body)
    setDrop(false)
  }

  const dragOver = e => {
    e.preventDefault()
    setDrop(true)
  }

  const dragLeave = e => {
    e.preventDefault()
    setDrop(false)
  }

  return (
    
      <BrowserRouter>
        <div>
          <Link to={user ? `/id=${user.uid}` : '/'} id='link-to-dash'/>
          <Switch>
            {user ?
              (
                <Route path={`/id=${user.uid}`} exact>
                <div>
                  <Navbar dom={<NavDash user={user} logout={()=>{fire.auth().signOut()}}/>} />
                  <Sidebar 
                    history={(userData && userData.history) ? userData.history : null} 
                    saved={(userData && userData.savedRequests)}
                    id={user ? user.uid : ''}
                  />
                  <div  onDrop={drop} onDragOver={dragOver} onDragLeave={dragLeave}>
                    {!droppingItem ? (<Dashboard/>):(<DropZone/>)}     
                  </div>
                </div>
              </Route>):
              (<Route path='/' exact>
                <Navbar dom={<HomeNav/>}/>
                <Home/>
              </Route>)
            }
            <Route exact path='/signup'><Signup/></Route>
            <Route exact path='/login'><Login/></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

const Wrapper = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default Wrapper
