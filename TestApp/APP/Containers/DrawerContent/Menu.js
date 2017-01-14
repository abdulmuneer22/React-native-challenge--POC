import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

const window = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component{
  render(){
    return(
      <View style={Style.wrapper}>
        <View style={Style.icon}>
        <Icon name={this.props.icon} size={22} color="rgba(39, 151, 223,0.9)" />
        </View>

        <Text style={Style.text}>
        {this.props.text}
        </Text>
      </View>
    );
  }
}

const Style = StyleSheet.create({
    wrapper : {
      flexDirection : 'row',
      width : window.width * 0.9,
      alignSelf : 'center',
      paddingTop : 20,
      paddingBottom : 20
    },
    icon : {
      flex : 1,
      justifyContent : 'center',
    },
    text : {
      flex : 8,
      fontSize : 18,
      alignSelf : 'center',
      color : 'rgba(65, 163, 227,0.9)'
    }

});
export default Menu