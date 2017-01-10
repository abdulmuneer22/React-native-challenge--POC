import React, {Component} from 'react'
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import {connect} from 'react-redux'
import * as actions from '../Actions'
const window = Dimensions.get('window')

class LoginButton extends Component{

    handleLogin(){
        if(!this.props.username && !this.props.password){
            alert("User Name and Password Cannot Be Empty")
        }else{
            this.props.Login()
        }
    }

    render(){
        return(
        <TouchableOpacity style={Style.button}
        onPress = {()=>{this.handleLogin()}}
        >
            <Text style={Style.buttonText}>
            LOG IN
            </Text>
        </TouchableOpacity>

    );
    }

}






const Style = StyleSheet.create({
   
    button : {
        height: 40, 
        width : window.width * 0.7,
        borderColor: 'white', 
        borderWidth: 1,
        alignItems : 'center',
        borderRadius : 6,
        padding : 5,
        margin : 10,
        backgroundColor : 'rgb(238, 241, 237)',
        justifyContent : 'center'
    },
    buttonText : {
        color : 'rgb(47, 51, 46)',
        fontSize : 18,
        fontWeight : '500'
    }
});


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        username: state.username,
        password : state.password
    }
}
export default connect(mapStateToProps,actions)(LoginButton)

