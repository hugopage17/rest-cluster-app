import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonBase from '@material-ui/core/ButtonBase'
import {setColor} from '../../api/SetColor.js'

const styles = {
    root:{
      color:'white',
      padding:'20px',
      borderBottom:'1px solid rgba(20, 212, 255, 0.5)',
      overflow:'auto'
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
    },method:{
        display:'inline-block',
        borderRadius:'5px',
        padding:'5px'
    },url:{
        display:'inline-block',
        marginLeft:'5px',
        fontSize:'12px',
        color:'#4d4d4d'
    },
    text:{
        float:'left'
    }
}

const SavedItem = ({classes, data, deleteItem}) => {
    const color = setColor(data.method)
    return(
        <div className={classes.root}>
            <Typography className={classes.method} style={{backgroundColor:color}}>{data.method}</Typography>
            <Typography className={classes.url}>{data.url.slice(0,18)}..............</Typography>
            <Typography variant='h6' className={classes.text}>{data.name}</Typography>
            <Typography variant='body' className={classes.text}>{data.desc.slice(0,28)}...</Typography><br/>
            
            <ButtonBase className={classes.button} onClick={deleteItem}><DeleteIcon className={classes.delete}/></ButtonBase>
        </div>
    )
}

SavedItem.defaultProps = {
    deleteItem:()=>{}
}

export default withStyles(styles)(SavedItem)