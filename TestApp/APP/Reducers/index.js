import { combineReducers } from 'redux'
import SampleReducer from './SampleReducer'
import username from './usernamereducer'
import passwordreducer from './passwordreducer'
import drawerStatusReducer from './drawerStatusReducer'

export default combineReducers({
    SampleReducer : SampleReducer,
    username : username,
    password : passwordreducer,
    drawerStatus : drawerStatusReducer
});