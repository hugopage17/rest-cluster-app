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
        },
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#14d4ff',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#14d4ff',
          },
      }
  },
  button:{
    border:'1px solid #e8e8e8',
    '&:hover': {
            border:'1px solid #14d4ff'
        }
  }
}

const Query = ({query, handleKey, handleVal, deleteQuery, classes}) => {
  return(
    <div className={classes.root}>
      <TextField placeholder='Key' onChange={handleKey} value={query.key} className={classes.input} id='header-key'/>
      <TextField value={query.value} onChange={handleVal} placeholder='Value' className={classes.input}/>
      <Button onClick={deleteQuery} className={classes.button}>&times;</Button>
    </div>
  )
}

export default withStyles(style)(Query)
