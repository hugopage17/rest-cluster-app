import React,{Component} from 'react'
import {GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons'
import {googleLogin, githubLogin} from '../api/SocialLogin.js'
import autoBind from 'react-autobind';

class Home extends Component{
  constructor(props){
    super(props)
    autoBind(this)
  }

  googleAuth(){
    return googleLogin().catch(err => {throw err})
  }

  githubAuth(){
    return githubLogin().catch(err => {throw err})
  }

  render(){
    return(
      <div>
        <GoogleLoginButton onClick={this.googleAuth}/>
        <GithubLoginButton onClick={this.githubAuth}/>
      </div>
    )
  }
}

export default Home
