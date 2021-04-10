import SavedItem from './SavedItem.jsx'

const Saved = ({savedItems}) => {
    return savedItems.map((item, index) => {
        return <SavedItem data={item} key={index}/>
    })
}

export default Saved