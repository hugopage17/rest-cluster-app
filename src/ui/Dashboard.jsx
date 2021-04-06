import React,{useState} from 'react'
import EndpointUrl from './components/EndpointUrl.jsx'
import CallButton from './components/CallButton.jsx'
import AddQuery from './components/AddQuery.jsx'
import Query from './components/Query.jsx'
import SelectMethod from './components/SelectMethod.jsx'
import { withStyles } from '@material-ui/core/styles'
import HeaderBodyButton from './components/HeaderBodyToggle.jsx'
import BodyTextArea from './components/BodyTextArea.jsx'
import BodyArea from './components/BodyArea.jsx'
import ResponseStats from './components/ResponseStats.jsx'
import BodyNav from './components/BodyNav.jsx'
import ResponseHeaders from './components/ResponseHeaders.jsx'
import {fetchCall} from '../api/FetchCall.js'

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
    borderTop:'1px solid #14d4ff'
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
  const [endpointUrl, setEndpoint] = useState('')
  const [queries, setQueries] = useState([])
  const [method, setMethod] = useState('GET')
  const [headers, setHeaders] = useState([{key:'', value:''},{key:'', value:''},{key:'', value:''}])
  const [bodyOption, setBodyOption] = useState(true)
  const [bodyValue, setBodyValue] = useState('')
  const [response, setResponse] = useState({res:{},data:''})
  const [responeSec, setResSec] = useState('BODY')

  const renderTopSec = () => {
    return(
      <div>
        <div class={classes.topSec}>
          <SelectMethod selectMethod={(e) => {setMethod(e.target.value)}} methodVal={method}/>
          <EndpointUrl handleUrl={(e)=>{setEndpoint(e.target.value)}} url={endpointUrl}/>
          <CallButton submitCall={()=>{ fetchCall(endpointUrl).then((data) => { setResponse(data); }) }}/>
          <AddQuery addQuery={()=>{setQueries([...queries, { key:'', value:'' }]);}} type={'Query'}/>
          <div className={classes.queries}>
          {queries.map((query)=>{
            const index = queries.indexOf(query)
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
        </div>
      </div>
    )
  }
  const renderMidSec = () => {
    return(
      <div className={classes.midSec}>
        <HeaderBodyButton change={() => {setBodyOption(!bodyOption)}}/>
        {bodyOption ? (
          <div>
          <AddQuery addQuery={()=>{setHeaders([...headers, { key:'', value:'' }]);}} type={'Header'}/>
            <div className={classes.queries}>
              {headers.map((header)=>{
                const index = headers.indexOf(header)
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
        ):(<BodyTextArea
              val={bodyValue}
              setBody={(e) => {setBodyValue(e.target.value)}}
            />
          )}
      </div>
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
