import './App.css';
import Dashboard from './ui/Dashboard.jsx'
import Sidebar from './ui/Sidebar.jsx'
import Navbar from './ui/Navbar.jsx'
import Home from './ui/Home.jsx'
import { withStyles } from '@material-ui/core/styles'
import fire from './api/Fire.js'
import {useState, useEffect} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import NavDash from './ui/components/NavDash.jsx'

const styles = {
  sbItem:{
    borderTop:'1px solid rgba(20, 212, 255, 0.5)',
    marginTop:'5px',
    color:'white'
  }
}

function App({classes}) {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(()=>{ authListener() })

  const authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        const user = fire.auth().currentUser
        fire.firestore().collection('users').doc(user.uid).onSnapshot((doc) => {
          const userData = doc.data()
          setUserData(userData)
        });
        setUser(user)
        document.getElementById('link-to-dash').click()
      }
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
                <Navbar dom={<NavDash user={user}/>}/>
                <Sidebar history={userData ? userData.history.map((hist) => { return ( <div className={classes.sbItem}><h1>{hist}</h1></div> )}) : []}/>
                <Dashboard/>
              </div>
            </Route>):
            (<Route path='/' exact><Home/></Route>)
          }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default withStyles(styles)(App);
