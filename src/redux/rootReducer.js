import {combineReducers} from 'redux'

import cakeReducer from './cake/cakeReducers'
import iceCreamReducer from './iceCream/iceCreamReducers'
import userReducer from './user/userReducer'
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer,
    user: userReducer
})

export default rootReducer