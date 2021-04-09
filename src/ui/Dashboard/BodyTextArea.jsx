import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import {bodyHandler} from '../../redux/actions.js'
import {useSelector, useDispatch} from 'react-redux'

const styles = {
  root:{
    width:'100%'
  },
  label:{
    color: '#14d4ff'
  }
}

const BodyTextArea = ({classes}) => {
  const dispatch = useDispatch()
  const setBody = body => dispatch(bodyHandler(body))
  const body = useSelector(state => state.body)
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
        value={body}
        onChange={(e) => {setBody(e.target.value)}}
      />
    </div>
  )
}

export default withStyles(styles)(BodyTextArea)
