import React , {Component} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'

//firebase
const USER_NAME = 'muneer@test.com'
const PWD = '123456789'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyC17PGU_zuF0KKeqXM0Zp4gG2mUAq-JaQ0",
    authDomain: "reduxcourse-60d5e.firebaseapp.com",
    databaseURL: "https://reduxcourse-60d5e.firebaseio.com",
    storageBucket: "reduxcourse-60d5e.appspot.com",
    messagingSenderId: "268289913704"
  };

import { Actions } from 'react-native-router-flux'
var loadingimage = require('../Themes/assets/loading.gif')
const window = Dimensions.get('window')
class SplashScreen extends Component{

  componentDidMount(){
    firebase.initializeApp(config)
    setTimeout(function(){ 
      firebase.auth().signInWithEmailAndPassword(USER_NAME,PWD)
      .then((response)=> {
        console.log(response)
        Actions.home()
        
      })
      .catch((error)=>{
        console.log(error)
      })
    
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