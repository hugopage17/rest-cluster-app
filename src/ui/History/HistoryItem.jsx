import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import {setColor} from '../../api/SetColor.js'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonBase from '@material-ui/core/ButtonBase'

const styles = {
    root:{
      color:'white',
      padding:'20px',
      borderTop:'1px solid rgba(20, 212, 255, 0.5)',
      borderBottom:'1px solid rgba(20, 212, 255, 0.5)',
      overflow:"auto",
      display:'flex-wrap',
      backgroundColor:'#121212',
    },
    url:{
        display:'inline-block',
        marginLeft:'5px' 
    },
    method:{
        display:'inline-block',
        borderRadius:'5px',
        padding:'5px'
    },
    delete:{
        color:'#14d4ff',
        cursor:'pointer',
        display:'flex',
        float:'right'
    },
    button:{
        backgroundColor:'#121212',
        float:'right'
    }
}

const HistoryItem = ({classes, data, deleteItem}) => {
    const color = setColor(data.method)

    const dragStart = e => {
        e.dataTransfer.setData('history_item', JSON.stringify(data))
    }

    const dragOver = e => {
        e.stopPropagation()
    }

    return(
        <div className={classes.root} onDragStart={dragStart} onDragOver={dragOver} draggable={true}>
                <Typography className={classes.method} style={{backgroundColor:color}}>{data.method}</Typography>
                <Typography className={classes.url}>{data.url.slice(0,14)}..........</Typography>
                <ButtonBase className={classes.button} onClick={deleteItem}><DeleteIcon className={classes.delete}/></ButtonBase>
            </div>
        
    )
}

export default withStyles(styles)(HistoryItem)