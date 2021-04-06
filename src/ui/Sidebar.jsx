import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import autoBind from 'react-autobind';
import PropTypes from 'prop-types'
import NoDataMessage from './components/NoDataMessage.jsx'
import TextField from '@material-ui/core/TextField'

const styles = {
  root:{
    backgroundColor:'#121212',
    position:'fixed',
    width:'20%',
    height:'100vh',
    borderRight:'1px solid #14d4ff'
  },
  msgBoard:{
    position:'absolute',
    top:'15%',
    left:'2%',
    width:'95%'
  },
  searchBar:{
    backgroundColor:'black',
    color:'white',
    width:'95%',
    left:'2%',
    borderRadius:'25px',
    border:'1px solid rgba(20, 212, 255, 0.5)'
  },
  content:{
    position:'absolute',
    top:'10%',
    width:'100%'
  }
}

class Sidebar extends Component{
  constructor(props){
    super(props)
    autoBind(this)
  }

  renderHistory(){
    const {classes, history} = this.props
    if(!history || history.length === 0){
      return(
        <div className={classes.msgBoard}><NoDataMessage msg={'History Record Empty'}/></div>
      )
    }
    return (
      <div className={classes.content}>
        <TextField id="outlined-basic" variant="outlined" size='small'
          placeholder='Search...'
          className={classes.searchBar}
        />
        {history}
      </div>
    )
  }

  render(){
    const {classes} = this.props
    return(
      <div className={classes.root}>
        {this.renderHistory()}
      </div>
    )
  }
}

Sidebar.propTypes = {
  history:PropTypes.array
}

export default withStyles(styles)(Sidebar)
