import React,{ Component } from 'react'
import { 
    View , 
    Text , 
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

const window = Dimensions.get('window');
import ToolBar from '../../Components/ToolBar'

class Item extends Component{
    
    render(){

        return(
            <View style={Styles.wrapper}>
                <ToolBar icon="angle-left" bg="white" title={this.props.title}/>
                <Text>Single Post Expanded !!</Text>
                <Image
                style={{
                    width : window.width * 0.95,
                    height : 200
                }}
                source = {{uri : this.props.imageurl}}
                />
                

            </View>
        );

    }
}

const Styles = StyleSheet.create({
    wrapper : {
        alignItems : 'center',
        justifyContent : 'center'
    }
});
export default Item