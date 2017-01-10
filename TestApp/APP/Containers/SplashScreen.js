import React , {Component} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'

//firebase
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};

import { Actions } from 'react-native-router-flux'
var loadingimage = require('../Themes/assets/loading.gif')
const window = Dimensions.get('window')
class SplashScreen extends Component{

  componentDidMount(){
    firebase.initializeApp(firebaseConfig)
    setTimeout(function(){ 
      Actions.home()
    
  }, 3000);
  }
  render(){
    return(
      <View style={Style.wrapper}>
        <Image
        style={Style.image}
        source={loadingimage}
        />
      </View>
    );
  }
}

const Style = StyleSheet.create({
  wrapper : {
    flex : 1,
    backgroundColor : '#191F26',
    alignItems : 'center',
    justifyContent : 'center'
  },
  image : {
    width : window.width,
    height : 400,
  }
});
export default SplashScreen