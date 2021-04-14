import HistoryItem from './HistoryItem.jsx'
import {apiCall} from '../../api/CallToAPI.js'
import { useSelector  } from 'react-redux'

const History = ({history}) => {
    const id = useSelector(state => state.user.uid)
    const deleteHistoryItem = async (history, index) => {
        const call = await apiCall('delete-history-item', 'DELETE', {id:id, history:history, index:index})
        return call
      }

    return history.map((item, index) => {      
        return <HistoryItem data={item} key={index} deleteItem={()=>{deleteHistoryItem(history, index)}}/>
    })
}

export default History