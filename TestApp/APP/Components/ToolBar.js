import React, {Component} from 'react'
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { connect } from 'react-redux'
import * as actions from '../Actions'

class ToolBar extends Component{
    render(){
        // console.log(this.props)

        return(
            <View style={Style.wrapper}>
                <View>
                <Text onPress={()=> {this.props.openDrawer(true)}}>Open !!</Text>
                </View>
                <View></View>

                
            </View>
        );
    }
}

const Style = StyleSheet.create({
    wrapper : {
        marginTop : 25,
        height : 50,
        backgroundColor : 'red',
        flexDirection : 'row'
    }
});

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, actions)(ToolBar)

