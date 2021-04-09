import HistoryItem from './HistoryItem.jsx'

const History = ({history}) => {
    return history.map((hist, index) => {      
        return <HistoryItem data={hist} key={index}/>
    })
}

export default History