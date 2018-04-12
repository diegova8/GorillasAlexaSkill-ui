import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import data from './projects'
import employees from './employees'

export default combineReducers({
  router: routerReducer,
  data,
  employees
})
