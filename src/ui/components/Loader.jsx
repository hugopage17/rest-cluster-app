import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

const styles = {
    bg:{
        position:'fixed',
        width:'100%',
        top:'0%',
        left:'0%',
        backgroundColor:'rgba(0, 0, 0, 0.7)',
        height:'100vh',
        zIndex:5
    },
    inner:{
        position:'fixed',
        width:'100%',
        top:'20%',
        left:'0%',
        textAlign:'center'
    },
    loader:{
        color:'#14d4ff',
    },
    label:{
        color:'white',
        fontSize:'42px'
    }
}

const Loader = ({classes}) => {
    return(
        <div className={classes.bg}>
            <div className={classes.inner}>
                <CircularProgress  className={classes.loader} size={258}/><br/><br/>
                <Typography className={classes.label}>Please wait</Typography>
            </div>
            
        </div>
    )    
}

export default withStyles(styles)(Loader)