import React,{useState} from 'react';
import EndpointUrl from './EndpointUrl.jsx'
import CallButton from './CallButton.jsx'
import AddQuery from './AddQuery.jsx'
import Query from './Query.jsx'
import SelectMethod from './SelectMethod.jsx'
import { withStyles } from '@material-ui/core/styles'
import HeaderBodyButton from './HeaderBodyToggle.jsx'
import BodyTextArea from './BodyTextArea.jsx'
import BodyArea from './BodyArea.jsx'
import ResponseStats from './ResponseStats.jsx'
import BodyNav from './BodyNav.jsx'
import ResponseHeaders from './ResponseHeaders.jsx'
import {fetchCall} from '../../api/FetchCall.js'
import {apiCall} from '../../api/CallToAPI.js'
import { useDispatch, useSelector  } from 'react-redux'
import { queriesHandler, headersHandler, responseHandler } from '../../redux/actions.js'
import Paper from '@material-ui/core/Paper'

const styles = {
  root:{
    position:'absolute',
    left:'22%',
    top:'7%',
    width:'100%'
  },
  queries:{
    overflow:'auto',
    width:'80%',
    marginTop:10
  },
  topSec:{
    backgroundColor:'white',
    padding:'20px',
    boxShadow:'2px 2px 8px #d4d4d4',
    borderRadius:'5px',
    margin:'10px',
    width:'72%',
    height:'25vh',
    overflow:'auto'
  },
  midSec:{
    backgroundColor:'white',
    padding:'20px',
    boxShadow:'2px 2px 8px #d4d4d4',
    borderRadius:'5px',
    margin:'10px',
    height:'30vh',
    width:'72%',
    overflow:'auto'
  },
  bottomSec:{
    backgroundColor:'white',
    height:'50vh',
    width:'100%',
    position:'absolute',
    left:'20%',
    top:'78%',
    borderTop:'1px solid #14d4ff',
    zIndex:-1
  },
  resHeaders:{
    position:'absolute',
    top:'10%',
    left:'1%',
    width:'90%',
    padding:'10px'
  }
}

function Dashboard({classes}){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userData = useSelector(state => state.userData)

  const endPointUrl = useSelector((state) => state.url)
  const method = useSelector(state => state.method)

  const setQueries = queries => dispatch(queriesHandler(queries))
  const queries = useSelector(state => state.queries)

  const setHeaders = headers => dispatch(headersHandler(headers))
  const headers = useSelector(state => state.headers)

  const [bodyOption, setBodyOption] = useState(true)

  const setResponse = res => dispatch(responseHandler(res))
  const response = useSelector(state => state.response)
  const [responeSec, setResSec] = useState('BODY')

  const renderTopSec = () => {
    return(
      <Paper class={classes.topSec} elevation={3}>
          <SelectMethod/>
          <EndpointUrl/>
          <CallButton submitCall={async()=>{ 
            let data = await fetchCall(endPointUrl, queries, method, headers)
            await apiCall('add-history', 'POST', {url:endPointUrl, id:user.uid, method:method}, userData.accessToken)
            setResponse(data)  
          }}/>
          <AddQuery addQuery={()=>{setQueries([...queries, { key:'', value:'' }]);}} type={'Query'}/>
          <div className={classes.queries}>
          {queries.map((query, index)=>{
            return (
              <Query
                key={index}
                query={query}
                handleKey={(e)=>{ queries[index].key = e.target.value; setQueries([...queries]);}}
                handleVal={(e)=>{ queries[index].value = e.target.value; setQueries([...queries]);}}
                deleteQuery={()=>{ setQueries([].concat(queries.filter((q)=> { return q !== query }))) }}
              />
          )})}
          </div>
        </Paper>
    )
  }
  const renderMidSec = () => {
    return(
      <Paper className={classes.midSec} elevation={3}>
        <HeaderBodyButton change={() => {setBodyOption(!bodyOption)}}/>
        {bodyOption ? (
          <div>
          <AddQuery addQuery={()=>{setHeaders([...headers, { key:'', value:'' }]);}} type={'Header'}/>
            <div className={classes.queries}>
              {headers.map((header, index)=>{
                return (
                  <Query
                      key={index}
                      query={header}
                      handleKey={(e)=>{ headers[index].key = e.target.value; setHeaders([...headers]);}}
                      handleVal={(e)=>{ headers[index].value = e.target.value; setHeaders([...headers]);}}
                      deleteQuery={()=>{ setHeaders([].concat(headers.filter((h)=> { return h !== header }))) }}
                    />  
              )})}
            </div>
          </div>
        ):(<BodyTextArea/>
          )}
      </Paper>
    )
  }
  const renderBottomSec = () => {
    return(
      <div className={classes.bottomSec}>
        <BodyNav set={(e)=>{setResSec(e.target.innerText)}}/>
        <ResponseStats res={response.res}/>
        {(() => {
          switch(responeSec) {
            case 'BODY':
              return <BodyArea val={response.data}/>
            case 'HEADERS':
              return <div className={classes.resHeaders}><ResponseHeaders headers={response.headers}/></div>
            default:
              return
          }
        })()}

      </div>
    )
  }

  return(
    <div>
      <div className={classes.root}>
        {renderTopSec()}
        {renderMidSec()}
      </div>
      {renderBottomSec()}
    </div>
  )
}

export default withStyles(styles)(Dashboard)
