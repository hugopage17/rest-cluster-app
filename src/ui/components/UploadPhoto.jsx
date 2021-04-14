import Paper from '@material-ui/core/Paper'
import PublishIcon from '@material-ui/icons/Publish'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button' 

const style = {
    root:{
        height:'15vh',
        width:'25%',
        border:'1px dashed #bdbdbd',
        backgroundColor:'white',
        position:'absolute',
        left:'35%',
        cursor:'pointer'
    },
    icon:{
        fontSize:128,
        width:'100%',
        color:'#14d4ff',
    }
}

const UploadPhoto = ({classes, setPhoto}) => {
    const upload = () => {
        document.getElementById('file-uploader').click()
    }

    return(
        <Paper elevation={3} className={classes.root}>
            <input type='file' hidden={true} id='file-uploader' onChange={setPhoto}/>
            <Button onClick={upload}><PublishIcon className={classes.icon}/></Button>
        </Paper>
    )
}

export default withStyles(style)(UploadPhoto)