import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root:{
      color:'white',
      padding:'20px',
      borderBottom:'1px solid rgba(20, 212, 255, 0.5)',
    }
}

const SavedItem = ({classes, data}) => {
    return(
        <div className={classes.root}>
            <Typography>{data.name}</Typography>
            <Typography>{data.desc}</Typography>
        </div>
    )
}

export default withStyles(styles)(SavedItem)