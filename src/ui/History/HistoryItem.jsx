import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import {setColor} from '../../api/SetColor.js'

const styles = {
    root:{
      color:'white',
      padding:'20px',
      borderBottom:'1px solid rgba(20, 212, 255, 0.5)',
    },
    url:{
        display:'inline-block',
        marginLeft:'5px'  
    },
    method:{
        display:'inline-block',
        borderRadius:'5px',
        padding:'5px'
    }
}

const HistoryItem = ({classes, data}) => {
    const color = setColor(data.meth)
    return(
        <div className={classes.root}>
            <Typography className={classes.method} style={{backgroundColor:color}}>{data.meth}</Typography>
            <Typography className={classes.url}>{data.url.slice(0,16)}............</Typography>
        </div>
    )
}

export default withStyles(styles)(HistoryItem)