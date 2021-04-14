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
        width:'10%',
        left:'30%',
        backgroundColor:'none',
        color:'#37f056',
        height:'5vh',
        fontSize:'14px',
        marginBottom:'10px',
        '&:hover': {
            backgroundColor:'rgba(55, 240, 86, 0.5)',
            border:'1px solid #37f056',
        }  
    },
    delButton:{
      width:'10%',
      left:'30%',
      backgroundColor:'none',
      color:'#fa255e',
      height:'5vh',
      fontSize:'14px',
      marginBottom:'10px',
      marginLeft:'10px',
      '&:hover': {
          backgroundColor:'rgba(250, 37, 94, 0.5)',
          border:'1px solid #fa255e',
      }  
  },
}

const SavePanel = ({classes, save, close, name, desc, setName, setDesc}) => {
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
            <Button className={classes.delButton} onClick={close}>Cancel</Button>
        </div>
        
    )
}

export default withStyles(styles)(SavePanel)