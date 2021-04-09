import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';

const styles = {
  root:{
    width:'10%',
    backgroundColor:'#14d4ff',
    border:'1px solid #14d4ff',
    color:'white',
    height:40,
    borderRadius:'0px 5px 5px 0px',
    '&:hover': {
            backgroundColor:'rgba(20, 212, 255, 0.7)'
        }
  },
  icon:{
    width: 24,
    height: 24,
    marginLeft:5
  }
}

const CallButton = ({submitCall, classes}) => {
    return(
      <Button onClick={submitCall} classes={{root:classes.root}}>
        Send
        <SendIcon classes={{root:classes.icon}}/>
      </Button>
    )
}

CallButton.propTypes = {
  submitCall:PropTypes.func.isRequired,
  classes:PropTypes.object
}

export default withStyles(styles)(CallButton)
