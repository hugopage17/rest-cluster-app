import { withStyles } from "@material-ui/styles"
import Paper from '@material-ui/core/Paper'
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const styles = {
    root:{
        border:'2px dashed #4d4d4d',
        backgroundColor:'rgba(0,0,0,0.25)',
        position:'fixed',
        top:'10%',
        width:'70%',
        left:'25%',
        height:'80vh',
        zIndex:10
    },
    icon:{
        fontSize:720,
        color:'#4d4d4d',
        position:'absolute',
        top:'-10%',
        left:'15%'
    }
}

const DropZone = ({classes}) => {
    return(
        <Paper className={classes.root} elevation={6}>
            <OpenInBrowserIcon className={classes.icon}/>
        </Paper>
    )
}

export default withStyles(styles)(DropZone)