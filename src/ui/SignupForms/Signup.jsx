import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {apiCall} from '../../api/CallToAPI.js'
import fire from '../../api/Fire.js'
import {setData} from '../../api/SetDBData.js';

const styles = {
    root:{
        height:'70vh',
        width:'35%',
        position:'fixed',
        top:'10%',
        left:'35%'
    },
    input:{
        width:'90%',
        padding:'20px',
    },
    button:{
        width:'90%',
        left:'5%',
        bottom:'5%',
        position:'absolute',
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
        width:'100%',
        marginBottom:'20px'
    }
}

const Signup = ({classes}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUp = _ => {
        if(password !== confirmPassword){
            alert('Passwords mismatched')
            return 
        }
        apiCall('new-user', 'POST', {email:email, username:username, password:password}).then((user)=>{
            console.log(user)
            return fire.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                return setData(user)
            })
        })
    }
    
    return(
        <Paper elevation={3} className={classes.root}>
            <div className={classes.loginSec}>
                <TextField 
                    placeholder='Email' 
                    className={classes.input} 
                    id="outlined-basic" variant="outlined" size='small'
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <TextField placeholder='Username' className={classes.input} id="outlined-basic" variant="outlined" size='small'
                    onChange={(e) => {setUsername(e.target.value)}}
                />       
            </div>
            <div className={classes.loginSec}>
                <TextField placeholder='Password' className={classes.input} type='password' id="outlined-basic" 
                    variant="outlined" size='small'
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <TextField placeholder='Confirm Password' className={classes.input} type='password' id="outlined-basic" 
                    variant="outlined" size='small'
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
            </div>
            <Button className={classes.button} onClick={signUp}>Sign Up</Button>
        </Paper>
    )
    
}

Signup.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)