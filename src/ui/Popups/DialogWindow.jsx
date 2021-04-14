import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {withStyles} from '@material-ui/styles'

const styles = {
    root:{},
}

const DialogWindow = ({classes, title, open, component}) => {
    return(
        <Dialog aria-labelledby="simple-dialog-title" open={open} style={{textAlign:'center'}}>          
            <DialogTitle id="simple-dialog-title">   
                {title}
            </DialogTitle>
            {component}
        </Dialog>
    )
}

export default withStyles(styles)(DialogWindow)