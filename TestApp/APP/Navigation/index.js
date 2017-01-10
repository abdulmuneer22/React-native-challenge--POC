import React,{ Component } from 'react'
import {
  Scene,
  Router
} from 'react-native-router-flux'

import SplashScreen from '../Containers/SplashScreen'
import Home from '../Containers/Home'
import Feed from '../Containers/Feed'



export default class Naviation extends Component{
    render(){
        return(
        <Router>
        <Scene  initial key='init' component={SplashScreen} hideNavBar/>
        <Scene   key='home' component={Home} hideNavBar/>
        <Scene   key='feed' component={Feed} hideNavBar/>
        
        
        </Router>
        );
    }
}