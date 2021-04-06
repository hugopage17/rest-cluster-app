import React,{Component} from 'react'
import {GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons'
import {googleLogin, githubLogin} from '../api/SocialLogin.js'


class Home extends Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <GoogleLoginButton onClick={googleLogin}/>
        <GithubLoginButton onClick={githubLogin}/>
      </div>
    )
  }
}

export default Home
