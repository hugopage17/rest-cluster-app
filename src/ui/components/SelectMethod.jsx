import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = {
  root:{
    marginBottom:'10px'
  }

}

const SelectMethod = ({classes, selectMethod, methodVal}) => {
  return(
    <FormControl variant="outlined" size='small'>
          <Select onChange={selectMethod} value={methodVal} className={classes.root}>
              <option value={'GET'}>GET</option>
              <option value={'POST'}>POST</option>
              <option value={'PATCH'}>PATCH</option>
              <option value={'DELETE'}>DELETE</option>
          </Select>
    </FormControl>
  )
}

SelectMethod.propTypes = {
  classes:PropTypes.object.isRequired,
  selectMethod:PropTypes.func.isRequired,
  methodVal:PropTypes.string.isRequired
}

export default withStyles(styles)(SelectMethod)
