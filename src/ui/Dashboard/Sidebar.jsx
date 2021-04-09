import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import autoBind from 'react-autobind';
import PropTypes from 'prop-types'
import NoDataMessage from '../Components/NoDataMessage.jsx'
import TextField from '@material-ui/core/TextField'
import History from '../History/History.jsx'
import WithLoading from '../Components/WithLoading.jsx'

const FullHistory = ({classes, data}) => {
  if(!data || data.length === 0){
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
      <History history={data}/>
    </div>
  )
}

const WithLoadingHistory = WithLoading(FullHistory)

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
        <History history={history}/>
      </div>
    )
  }

  render(){
    const {classes, history} = this.props
    return(
      <div className={classes.root}>
        <WithLoadingHistory data={history} classes={classes} isLoading={history}/>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes:PropTypes.object.isRequired,
  history:PropTypes.array
}

export default withStyles(styles)(Sidebar)
