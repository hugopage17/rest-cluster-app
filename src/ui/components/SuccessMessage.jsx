import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
    successIcon:{
        fontSize:254,
        width:'100%',
        color:'#37f056'
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

const SuccessMessage = ({classes, msg, next}) => {
    return(
        <div>
            <CheckCircleOutlineIcon className={classes.successIcon}/>
            <Typography className={classes.msg}>{msg}</Typography>
            <Button className={classes.button} onClick={next}>Continue</Button>
        </div>       
    )
}

export default withStyles(styles)(SuccessMessage)