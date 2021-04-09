import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root:{
    color:'white',
    fontWeight:100,
    border:'1px solid white',
    borderRadius:25,
    padding:10,
    textAlign:'center',
    fontSize:22
  }
}

const NoDataMessage = ({classes, msg}) => {
  return(
    <Typography className={classes.root}>{msg}</Typography>
  )
}

export default withStyles(styles)(NoDataMessage)
