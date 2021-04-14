import SavedItem from './SavedItem.jsx'
import {apiCall} from '../../api/CallToAPI.js'
import { useSelector  } from 'react-redux'

const Saved = ({savedItems}) => {
    const id = useSelector(state => state.user.uid)
    const deleteSavedItem = async (savedItems, index) => {
        const call = await apiCall('delete-saved-item', 'DELETE', {id:id, savedItems:savedItems, index:index})
        return call
    }
    return savedItems.map((item, index) => {
        return <SavedItem data={item} key={index} deleteItem={()=>{deleteSavedItem(savedItems, index)}}/>
    })
}

export default Saved