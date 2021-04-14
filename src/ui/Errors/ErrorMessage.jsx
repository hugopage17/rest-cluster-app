import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
    failIcon:{
        fontSize:254,
        width:'100%',
        color:'#fa255e'
    },
    msg:{
        fontSize:'28px',
        color:'#4d4d4d'
    },
    button:{
        width:'100%',
        border:'1px solid #14d4ff',
        borderRadius:'0px',
        textTransform: 'none',
    }
}

const ErrorMessage = ({classes, msg, next}) => {
    return(
        <div>
            <ErrorOutlineIcon className={classes.failIcon}/>
            <Typography className={classes.msg}>{msg}</Typography>
            <Button className={classes.button} onClick={next}>Continue</Button>
        </div>      
    )
}

export default withStyles(styles)(ErrorMessage)