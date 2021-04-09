import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root:{
    position:'fixed',
    width:'100%',
    height:'7vh',
    backgroundColor:'#121212',
    zIndex:5,
    borderBottom:'1px solid #14d4ff'
  }
}

class Navbar extends Component{

  render(){
    const {classes, dom} = this.props
    return(
      <div className={classes.root}>
        {dom}
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
