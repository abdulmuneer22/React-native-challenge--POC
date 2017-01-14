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
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions as Navigate} from 'react-native-router-flux'

class ToolBar extends Component{
    render(){
        // console.log(this.props)

        return(
            <View style={[Style.wrapper,{backgroundColor : this.props.bg}]}>
                <View style={Style.Icon}>
                    <TouchableOpacity 
                    onPress={()=> {
                        if(this.props.icon === 'bars'){
                        this.props.openDrawer(true)
                        }else{
                            Navigate.pop()
                        }
                    }}
                    >
                    <Icon name={this.props.icon} size={28} color="black" />
                    </TouchableOpacity>
                </View>
                
                <View style={Style.titleWrapper}>
                <Text style={Style.title}>{this.props.title}</Text>
                </View>

                <View style={Style.Icon}>
                </View>

                
            </View>
        );
    }
}

const Style = StyleSheet.create({
    wrapper : {
        marginTop : 20,
        height : 50,
        flexDirection : 'row'
    },
    Icon : {
        alignItems : 'center',
        justifyContent : 'center',
        // backgroundColor : 'red',
        flex : 1
    },
    titleWrapper : {
        alignItems : 'center',
        justifyContent : 'center',
        // backgroundColor : 'yellow',
        flex : 6
    },
    title : {
        fontSize : 24,
        fontWeight : '400'
    }
});

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, actions)(ToolBar)

