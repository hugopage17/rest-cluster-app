import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles'

const styles = {
    root:{},
    button:{
        border:'1px solid #e8e8e8',
        '&:hover': {
                border:'1px solid #14d4ff'
            },
        width:'10%',
        float:'left',
      }
}

const DialogWindow = ({classes, title, open, component, toggle}) => {
    return(
        <Dialog aria-labelledby="simple-dialog-title" open={open} style={{textAlign:'center'}}>          
            <DialogTitle id="simple-dialog-title">
                <Button className={classes.button} onClick={toggle}>&times;</Button>
                {title}
            </DialogTitle>
            {component}
        </Dialog>
    )
}

export default withStyles(styles)(DialogWindow)