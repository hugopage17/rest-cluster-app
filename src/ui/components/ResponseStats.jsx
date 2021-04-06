import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import {setColor} from '../../api/SetColor.js'

const styles = {
  root:{
    position:'absolute',
    left:'72%',
    top:'2%'
  }
}

const ResponseStats = ({classes, res}) => {
  const color = setColor(res.status)
  return(
    <div className={classes.root}>
      <Typography style={{color:color}}>{res.status} {res.ok ? ('OK'):(null)}</Typography>
    </div>
  )
}

export default withStyles(styles)(ResponseStats)
