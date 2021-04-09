import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import SocialLogins from './SocialLogins.jsx'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import fire from '../../api/Fire.js'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const styles = {
    root:{
        height:'70vh',
        width:'35%',
        position:'fixed',
        top:'10%',
        left:'35%'
    },
    socialLogins:{
        position:'absolute',
        bottom:'10%',
        width:'100%'
    },
    input:{
        width:'90%',
        padding:'20px',
        '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#14d4ff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#14d4ff',
            },
        }
    },
    button:{
        width:'90%',
        left:'5%',
        bottom:'50%',
        backgroundColor:'rgba(20, 212, 255, 0.7)',
        border:'2px solid #14d4ff',
        color:'white',
        height:'10vh',
        fontSize:'18px',
        boxShadow:'1px 1px 4px #074e5e',
        '&:hover': {
            backgroundColor:'rgba(20, 212, 255, 1)'
        }  
    },
    loginSec:{
        position:'relative',
        top:'30%',
        width:'100%'
    },
    bottomTag:{
        color:'#14d4ff',
        textAlign:'center',
        position:'absolute',
        bottom:'2%',
        left:'35%'
    }
}

const Login = ({classes}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async() => {
        let user = await fire.auth().signInWithEmailAndPassword(email, password)
        return user
    }

    return(
        <Paper elevation={3} className={classes.root}>
            <div className={classes.loginSec}>
                <TextField placeholder='Email' className={classes.input} onChange={(e) => {setEmail(e.target.value)}}/>
                <TextField placeholder='Password' type='password' className={classes.input} onChange={(e) => {setPassword(e.target.value)}}/>
                <Button className={classes.button} onClick={login}>Login</Button>
            </div>
            <span className={classes.socialLogins}><SocialLogins/></span>
            <Link to='/signup' style={{textDecoration:'none'}}><Typography className={classes.bottomTag}>dont have an account</Typography></Link>
        </Paper>
    )
    
}

Login.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Login)