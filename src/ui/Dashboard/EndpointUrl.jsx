import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import {endpointHandler, queriesHandler} from '../../redux/actions.js'
import { useDispatch, useSelector} from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {mapQueries} from '../../api/MapQueries.js'
import {editUrl} from '../../api/URLValueEdit.js'

const styles = {
  root:{
    width:'70%',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    '& label.Mui-focused': {
      color: '#121212',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#14d4ff',
    },
    '& .MuiOutlinedInput-root': {
    
      '&.Mui-focused fieldset': {
        borderColor: '#14d4ff',
      },
    }
  }
}

const EndpointUrl = ({classes, queries}) => {
  const dispatch = useDispatch()
  const url = useSelector(state => state.url)
  const setUrl = url => dispatch(endpointHandler(url))
  const setQueries = queries => dispatch(queriesHandler(queries))
  return(
    <TextField 
      id="outlined-basic" 
      variant="outlined" 
      size='small'
      onChange={(e) => {editUrl(e.target.value, (data) => {
        setUrl(data.url)
        setQueries(data.queries)
      })}}
      className={classes.root}
      value={`${url.concat(mapQueries(queries))}`}
          />
  )
}

EndpointUrl.propTypes = {
  classes:PropTypes.object
}

export default withStyles(styles)(EndpointUrl)
