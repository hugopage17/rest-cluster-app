import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root:{
    width:'80%',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  }
}

const EndpointUrl = ({handleUrl, classes, url}) => {
  return(
    <TextField id="outlined-basic" variant="outlined" size='small'
      onChange={handleUrl}
      className={classes.root}
      value={url}
    />
  )
}

EndpointUrl.propTypes = {
  handleUrl:PropTypes.func.isRequired,
  classes:PropTypes.object
}

export default withStyles(styles)(EndpointUrl)
