import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root:{
    height:'7vh',
    fontSize:6
  },
  input:{
    width:'40%',
    marginRight:20,
    '&:focus': {
            borderBottom:'1px solid #14d4ff'
        }
  },
}

const ResponseHeaders = ({classes, headers}) => {
  if(!headers){ return <div></div>}
  return headers.map((header) => {
    return (
      <div className={classes.root}>
        <TextField placeholder='Key' value={header.key} className={classes.input}/>
        <TextField value={header.val} placeholder='Value' className={classes.input}/>
      </div>
    )
  })
}

export default withStyles(styles)(ResponseHeaders)
