import React,{ Component } from 'react'
import { 
    View , 
    Text , 
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

import LoginButton from '../../Components/LoginButton'
import InputBox from '../../Components/InputBox'


var loginbg = require('../../Themes/assets/login_bg.jpg')


const window = Dimensions.get('window')
class Home extends Component{

    render(){
        return(
            <View style={Style.wrapper}>
            <Image style={{
                width : window.width,
                height : window.height,
                flex : 1,
                alignItems : 'center',
                justifyContent : 'center'
                
            }}
            source={loginbg}

            >
                <View style={Style.loginWrapper}>
                <InputBox isPassword = {false}/>
                <InputBox isPassword={true}/>
                <LoginButton />
                </View>
            </Image>
            
            </View>
        );
    }
}


const Style = StyleSheet.create({
    wrapper : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    loginWrapper : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'rgba(30, 19, 19,0.6)',
        width : window.width,
        height : window.height,
        marginTop : 25
    }
});

export default Home