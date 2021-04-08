import React,{Component} from 'react'
import SocialLogins from './components/SocialLogins.jsx'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import {googleLogin, githubLogin} from '../api/SocialLogin.js'
import {setData} from '../api/SetDBData.js';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom'

const styles = {
    root:{
      
    },
    topSec:{
        backgroundColor:'white',
        borderBottom: '1px solid #14d4ff',
        height:'60vh',
    },
    loginSec:{
        width:'30%',
        position:'absolute',
        top:'10%',
        left:'60%',
        height:'30vh',
        padding:'20px'
    },
    button:{
        width:'100%',
        backgroundColor:'rgba(20, 212, 255, 0.7)',
        border:'2px solid #14d4ff',
        color:'white',
        height:'10vh',
        fontSize:'28px',
        boxShadow:'1px 1px 4px #074e5e',
        '&:hover': {
            backgroundColor:'rgba(20, 212, 255, 1)'
        }  
    },
    socials:{
        bottom:'10%',
        position:'absolute',
        left:'0%',
        width:'100%'
    },
    middleText:{
        textAlign:'center',
        fontSize:'18px',
        position:'absolute',
        top:'50%',
        left:'40%',
        color:'#14d4ff'
    }
}

class Home extends Component{
    constructor(props){
        super(props)
        autoBind(this)
      }
    
      googleAuth(){
        return googleLogin().then((user) => { setData(user) }).catch(err => {throw err});
      }
    
      githubAuth(){
        return githubLogin().then((user) => { setData(user) }).catch(err => {throw err});
      }


    render(){
        const {classes} = this.props
        return(
            <div className={classes.topSec}>
                <Paper className={classes.loginSec} elevation={3}>
                    <Link to='/signup' style={{textDecoration:'none'}}><Button className={classes.button}>Get Started</Button></Link>
                    <Typography className={classes.middleText}>or sign up with</Typography>
                    <span className={classes.socials}><SocialLogins/></span>
                </Paper>
            </div>
            
        )
    }
}

Home.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Home);