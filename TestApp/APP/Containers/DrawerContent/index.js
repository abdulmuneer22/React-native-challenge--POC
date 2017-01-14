import React, {Component} from 'react'
import {
  View ,
  Text ,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import * as actions from '../../Actions'
import { connect} from 'react-redux'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from './Menu'
import LogoutButton from './LogoutButton'


class DrawerContent extends Component{
  render(){
    return(
      <View style={Style.wrapper}>
      <ScrollView>
        <View style={[Style.dashboard,{flexDirection : 'row'}]}>
          <Text style={Style.headding}>
          Dashbaord
          </Text>

          <TouchableOpacity style={{
            flex : 1,
            alignItems : 'flex-end',
            // borderWidth : 1,
            // borderColor : 'red',
            top : -5,
          }}
          onPress={()=>{this.props.openDrawer(false)}}
          >
          <Icon name="times-circle" size={18} color="white" />
          </TouchableOpacity>

        </View>

        <View style={Style.dashboard}>
        <Text style={Style.headding}>
        My Health Plan
        </Text>
        <Text style={Style.h2}>
        Benefits
        </Text>

        <Text style={Style.h2}>
        Claims
        </Text>
        </View>


        <View style={Style.dashboard}>
        <Text style={Style.headding}>
        My Dental Plan
        </Text>
        </View>

        <View style={Style.dashboard}>
        <Text style={Style.headding}>
        Payment
        </Text>
        </View>

        <View style={Style.actions}>
        <Menu icon={'user'} text="My Account"/>
        <Menu icon={'cog'} text="App Settings"/>
        <Menu icon={'question'} text="Frequently Asked Questions"/>
        <Menu icon={'file-text'} text="Policies & Terms"/>
        <Menu icon={'phone'} text="Contact Us"/>
        </View>

        <View>
        <LogoutButton/>
        </View>



      </ScrollView>
      </View>
    );
  }
}


const Style = StyleSheet.create({
  wrapper : {
    flex : 1,
    marginTop : 25
  },
  dashboard : {
    borderBottomColor : 'white',
    borderBottomWidth : 1,
    padding : 10,
    backgroundColor : 'rgb(39, 151, 223)'
  },
  myhealthplan : {

  },
  headding : {
    fontSize : 20,
    color : 'white',
    paddingLeft : 10
  },
  h2 : {
    fontSize : 16,
    color : 'white',
    paddingLeft : 30,
    marginTop : 10
  },
  actions : {
    backgroundColor : 'white'
  }
});


export default connect(null, actions)(DrawerContent)
