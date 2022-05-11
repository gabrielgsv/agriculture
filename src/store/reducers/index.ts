import { combineReducers } from 'redux'
import producer from './producer'

const reducers = combineReducers({
  Producer: producer,
})

export default reducers