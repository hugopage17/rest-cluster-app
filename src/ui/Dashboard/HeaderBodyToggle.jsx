import {Button, ButtonGroup} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  root:{
    backgroundColor:'white',
    textTransform: 'none',
    '&:hover': {
            border:'1px solid #14d4ff'
        }
  },
  group:{
    '&$selected': {
      backgroundColor:'yellow'
    },
    float:'right'
  }
}

const HeaderBodyButton = ({classes, change}) => {
  return(
    <ButtonGroup className={classes.group} onClick={change}>
      <Button className={classes.root}>Headers</Button>
      <Button className={classes.root}>Body</Button>
    </ButtonGroup>
  )
}

export default withStyles(styles)(HeaderBodyButton)
