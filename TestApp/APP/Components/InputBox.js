import React, {Component} from 'react'
import { 
    View ,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions
} from 'react-native'

import {connect} from 'react-redux'
import * as actions from '../Actions'
const window = Dimensions.get('window') 
class InputBox extends Component{
    constructor(){
        super();
        this.state = {
            state : ""
        }
    }

    handleInput(text){
        if(this.props.isPassword)
        {
            this.props.Password(text)
        }else {
            this.props.UserName(text)
        }
        
    }
    render(){
        return(
        <View style={Style.wrapper}>
            <TextInput
            style={Style.input}
            onChangeText={(text) => this.handleInput(text)}
            value={this.props.isPassword ? this.props.password : this.props.username}
            secureTextEntry = {this.props.isPassword ? true : false}
            placeholder={this.props.isPassword ? "Password" : "User Name"}
            placeholderTextColor="white"
            />
        </View>

    );
    }
}


const Style = StyleSheet.create({
    wrapper : {
        backgroundColor : 'rgba(255, 255, 255,0)'
    },
    input : {
        height: 40, 
        width : window.width * 0.7,
        borderColor: 'white', 
        borderWidth: 1,
        alignItems : 'center',
        borderRadius : 6,
        padding : 5,
        color : 'white',
        margin : 10
    }
});


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        username: state.username,
        password : state.password
    }
}
export default connect(mapStateToProps,actions)(InputBox)




