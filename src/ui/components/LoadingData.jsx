import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
    root:{
        color:'white',
        fontSize:'22px',
        display:'flex'
    },
    loader:{
        color:'#14d4ff',
        float:'left',
        marginRight:'10px'
    }
}

const LoadingData = ({classes}) => {
    return(
        <div>
            <CircularProgress className={classes.loader}/>
            <Typography className={classes.root}>Loading...</Typography>
        </div>     
    )
}

export default withStyles(styles)(LoadingData)