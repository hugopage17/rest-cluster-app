import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const styles = {
  root:{
    color:'white',
    display:'inline',
    verticalAlign:'middle',
    marginLeft:10
  },
  div:{
    position:'absolute',
    left:'90%',
    top:'20%'
  }
}

const NavDash = ({classes, user}) => {
  return(
    <div className={classes.div}>
      <img src={user.photoURL} width={32} style={{borderRadius:'100%',verticalAlign:'middle',border:'1px solid #14d4ff'}}/>
      <Typography className={classes.root}>{user.displayName}</Typography>
      <ArrowDropDownIcon style={{color:'white',verticalAlign:'middle'}}/>
    </div>
  )
}

export default withStyles(styles)(NavDash)
