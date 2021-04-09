import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'

const styles = {
    button:{
        width:'5%',
        position:'absolute',
        top:'13%',
        left:'94%',
        backgroundColor:'rgba(20, 212, 255, 0.7)',
        border:'2px solid #14d4ff',
        color:'white',
        height:'5vh',
        fontSize:'12px',
        boxShadow:'1px 1px 4px #074e5e',
        '&:hover': {
            backgroundColor:'rgba(20, 212, 255, 1)'
        }  
    }
}

const HomeNav = ({classes}) => {
    return(
        <Link to='/login' style={{textDecoration:'none'}}><Button className={classes.button}>Sign in</Button></Link>
    )
}

HomeNav.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(HomeNav)