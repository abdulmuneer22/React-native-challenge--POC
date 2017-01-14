import React,{ Component } from 'react'
import {
  Scene,
  Router
} from 'react-native-router-flux'


import Drawer from 'react-native-drawer'
import {connect} from 'react-redux'
import * as actions from '../Actions'

import DrawerContent from '../Containers/DrawerContent'
import SplashScreen from '../Containers/SplashScreen'
import Home from '../Containers/Home'
import Feed from '../Containers/Feed'



class Navigation extends Component{
    constructor(){
        super();
        this.state = {open : true}
    }



    render(){
        console.log(this.props.drawerStatus)
        return(
            <Drawer
            ref='navigation'
            type='displace'
            open={this.props.drawerStatus}
            onOpen={()=>{this.props.openDrawer(true)}}
            onClose={() => {this.props.openDrawer(false)}}
            content={<DrawerContent />}
            tapToClose
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            negotiatePan
            tweenHandler={(ratio) => ({
            main: { opacity: Math.max(0.54, 1 - ratio) }
            })}
            >

                <Router>
                    <Scene  initial key='init' component={SplashScreen} hideNavBar/>
                    <Scene   key='home' component={Home} hideNavBar/>
                    <Scene   key='feed' component={Feed} hideNavBar/>
                </Router>

            </Drawer>


        
        );
    }
}


const mapStateToProps = (state) => {
  return {
    drawerStatus : state.drawerStatus
  }
}


export default connect(mapStateToProps, actions)(Navigation)