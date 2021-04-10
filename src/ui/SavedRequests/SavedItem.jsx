import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const SavedItem = ({classes, data}) => {
    return(
        <div className={classes.root}>
            <Typography>{data.name}</Typography>
            <Typography>{data.desc}</Typography>
        </div>
    )
}

export default SavedItem