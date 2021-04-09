import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types'

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

const NavDash = ({classes, user, logout}) => {
  return(
    <div className={classes.div} onClick={logout}>
      <img src={user.photoURL} width={32} style={{borderRadius:'100%',verticalAlign:'middle',border:'1px solid #14d4ff'}} alt='User'/>
      <Typography className={classes.root}>{user.displayName}</Typography>
      <ArrowDropDownIcon style={{color:'white',verticalAlign:'middle'}}/>
    </div>
  )
}

NavDash.propTypes = {
  classes:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  logout:PropTypes.func.isRequired
}

export default withStyles(styles)(NavDash)
