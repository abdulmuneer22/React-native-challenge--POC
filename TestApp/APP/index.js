import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'
import Reducers from './Reducers'

//Navigator Component
import Navigation from './Navigation'

class APP extends Component{
    render(){
        return(
            <Provider store={createStore(Reducers)}>
            <Navigation />
            </Provider>
        )
    }
    
}


export default APP