import React, {Component} from 'react'
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'


import ToolBar from '../../Components/ToolBar'
import FeedList from './FeedList'

class Feed extends Component{
    render(){
        return(
            <View>
                <ToolBar icon="bars" bg="white" title="Feed"/>
                <FeedList />
            </View>
        );
    }
}


export default Feed