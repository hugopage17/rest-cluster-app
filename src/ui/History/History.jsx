import HistoryItem from './HistoryItem.jsx'

const History = ({history}) => {
    return history.map((item, index) => {      
        return <HistoryItem data={item} key={index}/>
    })
}

export default History