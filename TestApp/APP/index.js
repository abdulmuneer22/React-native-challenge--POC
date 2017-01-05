import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'
import Reducers from './Reducers'
class APP extends Component{
    render(){
        return(
            <Provider store={createStore(Reducers)}>
            <View>
            <Text>Home</Text>
            </View>
            </Provider>
        )
    }
    
}


export default APP