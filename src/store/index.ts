import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = applyMiddleware(thunk)

const store = createStore(reducers, composeWithDevTools(middleware))

export default store