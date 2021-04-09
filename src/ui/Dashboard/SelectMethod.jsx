import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import {setMethod} from '../../redux/actions.js'
import { useDispatch, useSelector  } from 'react-redux'

const styles = {
  root:{
    marginBottom:'10px'
  }

}

const SelectMethod = ({classes}) => {

  const dispatch = useDispatch()
  const method = useSelector(state => state.method)
  const selectMethod = method => dispatch(setMethod(method))

  return(
    <FormControl variant="outlined" size='small'>
          <Select onChange={(e) => {selectMethod(e.target.value)}} value={method} className={classes.root}>
              <option value={'GET'}>GET</option>
              <option value={'POST'}>POST</option>
              <option value={'PATCH'}>PATCH</option>
              <option value={'DELETE'}>DELETE</option>
          </Select>
    </FormControl>
  )
}

SelectMethod.propTypes = {
  classes:PropTypes.object.isRequired
}

export default withStyles(styles)(SelectMethod)
