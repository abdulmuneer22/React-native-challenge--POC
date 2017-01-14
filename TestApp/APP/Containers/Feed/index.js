import React, {Component} from 'react'
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import ToolBar from '../../Components/ToolBar'
class Feed extends Component{
    render(){
        return(
            <View>
                <ToolBar/>
                <Text>Feed Here !!</Text>
            </View>
        );
    }
}


export default Feed