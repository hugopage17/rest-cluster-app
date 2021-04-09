import React,{Component} from 'react'
import {GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons'
import {googleLogin, githubLogin} from '../../api/SocialLogin.js'
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles'
import fire from '../../api/Fire.js'
import PropTypes from 'prop-types'
import {setData} from '../../api/SetDBData.js'

const styles = {
  root:{
    display:'flex'
  }
}

class SocialLogins extends Component{
  constructor(props){
    super(props)
    autoBind(this)
  }

  googleAuth(){
    return googleLogin().then(async(user) => { 
      let dbCollection = await fire.firestore().collection('users').doc(user.uid).get()
      if(!dbCollection.data()){
        setData(user) 
      }
      return user
    }).catch(err => {throw err});
  }

  githubAuth(){
    return githubLogin().then(async(user) => { 
      let dbCollection = await fire.firestore().collection('users').doc(user.uid).get()
      if(!dbCollection.data()){
        setData(user) 
      }
      return user
     }).catch(err => {throw err});
  }

  render(){
    const {classes} = this.props
    return(
      <div className={classes.root}>
        <GoogleLoginButton onClick={this.googleAuth}/>
        <GithubLoginButton onClick={this.githubAuth}/>
      </div>
    )
  }
}

SocialLogins.propTypes = {
  classes:PropTypes.object.isRequired
}

export default withStyles(styles)(SocialLogins)
