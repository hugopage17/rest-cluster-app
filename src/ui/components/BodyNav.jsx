import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root:{
    position:'absolute',
    left:'3%'
  },
  label:{
    float: 'left',
    marginRight:40,
    cursor:'pointer',
    fontSize:18,
    color:'#14d4ff'
  }
}

const BodyNav = ({classes, set}) => {
  return (
    <div className={classes.root}>
      {['Body', 'Headers', 'Stats'].map((txt) => {
        return <Typography className={classes.label} onClick={set}>{txt.toUpperCase() }</Typography>
      })}
    </div>
  )
}

export default withStyles(styles)(BodyNav)
