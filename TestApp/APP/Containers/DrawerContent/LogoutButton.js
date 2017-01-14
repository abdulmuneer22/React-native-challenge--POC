import React, {Component} from 'react'
import {
  View ,
  Text ,
  StyleSheet,
  ScrollView
} from 'react-native'


class LogoutButton extends Component{
  render(){
    return(
      <View style={Style.wrapper}>
        <View style={Style.button}>
        <Text style={Style.buttonText}>
          Log Out
        </Text>
        </View>

      </View>
    );
  }
}

const Style = StyleSheet.create({
  wrapper : {
    padding : 15,
    // backgroundColor : 'red',
  },
  button : {
    borderRadius : 35,
    borderWidth : 1,
    borderColor : 'white',
    padding : 10,
    backgroundColor : 'rgb(10, 30, 42)',
    alignItems : 'center'
  },
  buttonText : {
    color : 'white',
    fontSize : 16
  }
});
export default LogoutButton