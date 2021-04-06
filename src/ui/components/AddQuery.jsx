import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const styles = {
  root:{
    backgroundColor:'#e8e8e8',
    borderRadius:25,
    textTransform: 'none',

    '&:hover': {
            border:'1px solid #14d4ff'
        }
  }
}

const AddQuery = ({classes, addQuery, type}) => {
  return(
    <Button className={classes.root} onClick={addQuery}>
      <Typography variant='body1'>Add {type}</Typography>
    </Button>
  )
}

AddQuery.propTypes = {
  addQuery:PropTypes.func.isRequired,
  classes:PropTypes.object
}

export default withStyles(styles)(AddQuery)
