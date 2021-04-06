import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  root:{
    width:'100%'
  },
  label:{
    color: '#14d4ff'
  }
}

const BodyTextArea = ({classes, val, setBody}) => {
  return(
    <div>
      <Typography className={classes.label}>Body</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="{}"
        multiline
        rows={8}
        className={classes.root}
        value={val}
        onChange={setBody}
      />
    </div>
  )
}

export default withStyles(styles)(BodyTextArea)
