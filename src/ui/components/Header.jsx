import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const style = {
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
  button:{
    border:'1px solid #e8e8e8',
    '&:hover': {
            border:'1px solid #14d4ff'
        }
  }
}

const Header = ({header, handleKey, handleVal, deleteHeader, classes}) => {
  return(
    <div className={classes.root}>
      <TextField placeholder='Query' onChange={handleKey} value={query.key} className={classes.input}/>
      <TextField value={query.value} onChange={handleVal} placeholder='Value' className={classes.input}/>
      <Button onClick={deleteQuery} className={classes.button}>&times;</Button>
    </div>
  )
}

export default withStyles(style)(Header)
