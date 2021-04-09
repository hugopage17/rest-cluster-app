import React,{Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import autoBind from 'react-autobind';
import PropTypes from 'prop-types'
import NoDataMessage from '../Components/NoDataMessage.jsx'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import History from '../History/History.jsx'
import WithLoading from '../Components/WithLoading.jsx'
import {useState} from 'react'

const FullHistory = ({classes, data}) => {
  const [option, setOption] = useState(true)

  if(!data || data.length === 0){
    return(
      <div className={classes.msgBoard}><NoDataMessage msg={'History Record Empty'}/></div>
    )
  }
  return (
    <div>
      <div style={{width:'80%',margin:'auto', position:'absolute', left:'10%',top:'10%'}}>
        <Typography onClick={()=>{setOption(true)}} className={classes[`left${option}`]}>History</Typography>
        <Typography onClick={()=>{setOption(false)}} className={classes[`right${!option}`]}>Saved</Typography>
      </div>
      
      {option ? (
              <div className={classes.content}>
              <div style={{borderBottom:'1px solid rgba(20, 212, 255, 0.5)', paddingBottom:'5px'}}>
              <TextField id="outlined-basic" variant="outlined" size='small'
                placeholder='Search...'
                className={classes.searchBar}
              />
              </div>
              
              <History history={data}/>
            </div> 
            ) : (null)}
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
    top:'15%',
    width:'100%',
    borderBottom:'1px solid rgba(20, 212, 255, 0.5)',
    paddingTop:'5px'
  },
  leftfalse:{
    float:'left',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
  },
  lefttrue:{
    float:'left',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    borderBottom:'1px solid rgba(20, 212, 255, 1)'
  },
  rightfalse:{
    float:'right',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
  },
  righttrue:{
    float:'right',
    color:'white',
    cursor:'pointer',
    fontSize:'20px',
    borderBottom:'1px solid rgba(20, 212, 255, 1)'
  },
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
