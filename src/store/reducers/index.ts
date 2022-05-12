import { combineReducers } from 'redux'
import dashboard from './dashboard'
import producer from './producer'

const reducers = combineReducers({
  Producer: producer,
  Dashboard: dashboard,
})

export default reducers