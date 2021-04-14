import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import autoBind from 'react-autobind';
import PropTypes from 'prop-types'
import NoDataMessage from '../Components/NoDataMessage.jsx'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import History from '../History/History.jsx'
import Saved from '../SavedRequests/Saved.jsx'
import WithLoading from '../Components/WithLoading.jsx'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {apiCall} from '../../api/CallToAPI.js'

const HistoryPanel = ({classes, data}) => {
  if(!data || data.length === 0){
    return(
      <div className={classes.msgBoard}><NoDataMessage msg={'History Record Empty'}/></div>
    )
  }
  return (
    <div>    
      <div className={classes.content}>
        <div style={{borderBottom:'1px solid rgba(20, 212, 255, 0.5)', paddingBottom:'5px'}}>
          <TextField id="outlined-basic" variant="outlined" size='small'
            placeholder='Search...'
            className={classes.searchBar}
          />
        </div>       
        <History history={data}/>
      </div> 
    </div>  
  )
}

const SavedPanel = ({classes, data}) => {
  if(!data || data.length === 0){
    return(
      <div className={classes.msgBoard}><NoDataMessage msg={'No Saved Requests'}/></div>
    )
  }
  return (
    <div>    
      <div className={classes.content}>
        <div style={{borderBottom:'1px solid rgba(20, 212, 255, 0.5)', paddingBottom:'5px'}}>
          <TextField id="outlined-basic" variant="outlined" size='small'
            placeholder='Search...'
            className={classes.searchBar}
          />
        </div>       
        <Saved savedItems={data}/>
      </div> 
    </div>  
  )
}

const WithLoadingHistory = WithLoading(HistoryPanel)
const WithLoadingSaved = WithLoading(SavedPanel)

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
    top:'15%',
    width:'100%',
    paddingTop:'5px'
  },
  leftfalse:{
    float:'left',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    textAlign:'center',
    transition:'0.5s'
  },
  lefttrue:{
    float:'left',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    borderBottom:'1px solid rgba(20, 212, 255, 1)',
    textAlign:'center',
    transition:'0.5s'
  },
  rightfalse:{
    float:'right',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    textAlign:'center',
    transition:'0.5s'
  },
  righttrue:{
    float:'right',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    borderBottom:'1px solid rgba(20, 212, 255, 1)',
    textAlign:'center',
    transition:'0.5s'
  },
  bottom:{
    position:'absolute',
    bottom:'0%',
    display:'grid',
    gridTemplateColumns:'1fr',
    borderTop:'1px solid #14d4ff',
    width:'100%',
    backgroundColor:'#4d4d4d',
    height:'5vh'
  },
  bottomButtons:{
    color:'white',
    textTransform: 'none',
    borderRight:'1px solid rgba(20, 212, 255, 0.5)'
  }
}

class Sidebar extends Component{
  constructor(props){
    super(props)
    autoBind(this)
    this.state = {
      option:true
    }
  }

  async deleteHistory(id){
    const call = await apiCall('delete-history', 'DELETE', {id:id})
    return call
  }

  async deleteSavedRequests(id){
    const call = await apiCall('delete-saved', 'DELETE', {id:id})
    return call
  }

  render(){
    const {classes, history, saved, id} = this.props
    const {option} = this.state
    return(
        <div className={classes.root}>
          <div style={{width:'100%',margin:'auto', position:'absolute', left:'0%',top:'10%',display:'grid', gridTemplateColumns:'1fr 1fr'}}>
          <Typography onClick={()=>{this.setState({option:true})}} className={classes[`left${option}`]}>History</Typography>
          <Typography onClick={()=>{this.setState({option:false})}} className={classes[`right${!option}`]}>Saved</Typography>
        </div>
        {option ? (
          <WithLoadingHistory 
            data={history} 
            classes={classes} 
            isLoading={history}/>) : (
          <WithLoadingSaved 
            data={saved}
            classes={classes}
            isLoading={saved}
          />
        )}
        <div className={classes.bottom}>
          <Button 
            className={classes.bottomButtons} 
            onClick={option ? ()=>{this.deleteHistory(id)}: (() => {this.deleteSavedRequests(id)}) }
            disabled={option ? history && history.length === 0 ? true : false : saved && saved.length === 0 ? true : false}
          >Delete All 
          <DeleteIcon/></Button>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes:PropTypes.object.isRequired,
  history:PropTypes.array
}

export default withStyles(styles)(Sidebar)
