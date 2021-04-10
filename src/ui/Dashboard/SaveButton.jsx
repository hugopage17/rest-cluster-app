import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save';

const styles = {
  root:{
    width:'5%',
    backgroundColor:'#14d4ff',
    border:'1px solid #14d4ff',
    color:'white',
    height:40,
    marginLeft:'10px',
    borderRadius:'5px',
    '&:hover': {
            backgroundColor:'rgba(20, 212, 255, 0.7)'
        }
  },
  icon:{
    width: 36,
    height: 36,
    marginLeft:5
  }
}

const SaveButton = ({open, classes}) => {
    return(
      <Button onClick={open} classes={{root:classes.root}}>
        <SaveIcon classes={{root:classes.icon}}/>
      </Button>
    )
}

SaveButton.propTypes = {
  submitCall:PropTypes.func.isRequired,
  classes:PropTypes.object
}

export default withStyles(styles)(SaveButton)
