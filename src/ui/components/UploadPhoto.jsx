import Paper from '@material-ui/core/Paper'
import PublishIcon from '@material-ui/icons/Publish';
import { withStyles } from '@material-ui/core/styles' 

const style = {
    root:{
        height:'10vh',
        width:'25%'
    },
}

const UploadPhoto = ({classes}) => {
    return(
        <Paper elevation={3} className={classes.root}>
            <PublishIcon fontSize='48px'/>
        </Paper>
    )
}

export default withStyles(style)(UploadPhoto)