import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {apiCall} from '../../api/CallToAPI.js'
import fire from '../../api/Fire.js'
import {setData} from '../../api/SetDBData.js';
import UploadPhoto from '../Components/UploadPhoto.jsx'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Loader from '../Components/Loader.jsx'

const styles = {
    root:{
        height:'80vh',
        width:'35%',
        position:'fixed',
        top:'10%',
        left:'35%'
    },
    input:{
        width:'90%',
        padding:'20px',
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
          '& label.Mui-focused': {
            color: '#121212',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#14d4ff',
          },
          '& .MuiOutlinedInput-root': {
          
            '&.Mui-focused fieldset': {
              borderColor: '#14d4ff',
            },
          }
    },
    remove:{
        color:'#14d4ff',
        cursor:'pointer'
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
    },
    photo:{
        position:'absolute',
        left:'40%'
    }
}

const Signup = ({classes}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePic, setPic] = useState('')
    const [photoSelected, hasPhoto] = useState(false)
    const [fileObject, setFile] = useState('')

    const signUp = _ => {
        if(password !== confirmPassword){
            alert('Passwords mismatched')
            return 
        }
        var form = new FormData()
        form.file = profilePic
        form.postData = {email:email, username:username, password:password}
        form.fileType = fileObject.name
        apiCall('new-user', 'POST', form, '').then((user)=>{
            return fire.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
                const user = userCredential.user
                return setData(user)
            })
        })
    }
    
    return(
        <div>
            <Paper elevation={3} className={classes.root}>
            <div className={classes.loginSec}>
                <TextField 
                    placeholder='Email' 
                    className={classes.input} 
                    id="outlined-basic" variant="outlined" size='small'
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <TextField placeholder='Username' 
                    className={classes.input} 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small'
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
            {!photoSelected ? (
                <UploadPhoto 
                    setPhoto={(e) => {
                        const file = e.target.files[0]
                        var reader = new FileReader();
                        reader.onload = function(){
                            setPic(reader.result);
                            hasPhoto(!photoSelected)
                        }
                        setFile(file)
                        reader.readAsDataURL(file)
                    }}
                />
            ):(<div className={classes.photo}>
                    <img src={profilePic} alt='' />
                    <HighlightOffIcon className={classes.remove} onClick={() => {hasPhoto(!photoSelected); setPic('');}}/>
                </div>)}
            <Button className={classes.button} onClick={signUp}>Sign Up</Button>
        </Paper><Paper elevation={3} className={classes.root}>
            <div className={classes.loginSec}>
                <TextField 
                    placeholder='Email' 
                    className={classes.input} 
                    id="outlined-basic" variant="outlined" size='small'
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <TextField placeholder='Username' 
                    className={classes.input} 
                    id="outlined-basic" 
                    variant="outlined" 
                    size='small'
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
            {!photoSelected ? (
                <UploadPhoto 
                    setPhoto={(e) => {
                        const file = e.target.files[0]
                        var reader = new FileReader();
                        reader.onload = function(){
                            setPic(reader.result);
                            hasPhoto(!photoSelected)
                        }
                        setFile(file)
                        reader.readAsDataURL(file)
                    }}
                />
            ):(<div className={classes.photo}>
                    <img src={profilePic} alt='' />
                    <HighlightOffIcon className={classes.remove} onClick={() => {hasPhoto(!photoSelected); setPic('');}}/>
                </div>)}
            <Button className={classes.button} onClick={signUp}>Sign Up</Button>
        </Paper>
        </div>
        
    )
    
}

Signup.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)