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
import {handleUser, handleAppData} from './redux/actions'
import {useState} from 'react'


function App({classes}) {
  const dispatch = useDispatch()
  const setUser = (user) => dispatch(handleUser(user))
  const setUserData = (data) => dispatch(handleAppData(data))
  const user = useSelector((state) => state.user)
  const userData = useSelector((state) => state.userData)
  const [loaded, setLoading] = useState(false)

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
                  <Sidebar history={(userData && userData.history) ? userData.history : null}/>
                  <Dashboard/>
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
