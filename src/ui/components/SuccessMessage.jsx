import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
    successIcon:{
        fontSize:254,
        width:'100%',
        color:'#37f056'
      }
}

const SuccessMessage = ({classes, msg}) => {
    return(
        <div>
            <CheckCircleOutlineIcon className={classes.successIcon}/>
            <Typography>{msg}</Typography>
        </div>       
    )
}

export default withStyles(styles)(SuccessMessage)