import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
    root:{},
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
    button:{
        width:'90%',
        left:'0%',
        backgroundColor:'rgba(20, 212, 255, 0.7)',
        border:'2px solid #14d4ff',
        color:'white',
        height:'5vh',
        fontSize:'18px',
        marginBottom:'10px',
        boxShadow:'1px 1px 4px #074e5e',
        '&:hover': {
            backgroundColor:'rgba(20, 212, 255, 1)'
        }  
    }
}

const SavePanel = ({classes, save, name, desc, setName, setDesc}) => {
    return(
        <div>
            <TextField 
                placeholder='Name' 
                className={classes.input} 
                id="outlined-basic" 
                variant="outlined" 
                size='small'
                value={name}
                onChange={setName}
            />  
            <TextField 
                placeholder='Description' 
                className={classes.input} 
                id="outlined-basic" 
                variant="outlined" 
                size='small'
                multiline
                rows={8}
                value={desc}
                onChange={setDesc}
            />
            <Button className={classes.button} onClick={save}>Save</Button>
        </div>
        
    )
}

export default withStyles(styles)(SavePanel)