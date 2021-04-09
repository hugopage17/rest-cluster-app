import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  root:{
    width:'75%',
    top:'10%',
    left:'3%'
  },
  resize:8
}

const BodyArea = ({classes, val}) => {
  return(
    <TextField
      id="outlined-basic"
      variant="outlined"
      inputProps={{style: {fontSize: 14}}}
      multiline
      rows={16}
      className={classes.root}
      value={val}
    />
  )
}

export default withStyles(styles)(BodyArea)
