import React, {Component} from 'react'
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ListView,
    Image
} from 'react-native'

import firebase from 'firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'

const window = Dimensions.get('window')
class FeedList extends Component{
    constructor(){
    super();
    this.state = {
      mytoasts : new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded : false
    }
    }

    renderRow(rowData){
        // console.log(rowData)
        return(
            <View style={Style.FeedItem}>
                <Text style={Style.postTitle}>{rowData.title}</Text>
                <TouchableOpacity
                onPress={()=>{Actions.item(rowData)}}
                >
                <Image
                style={{
                    width : window.width * 0.95,
                    height : 200
                }}
                source = {{uri : rowData.imageurl}}
                />
                </TouchableOpacity>
                <View style={Style.postStatus}>

                    <Icon name="thumbs-o-up" size={30} color="black" />
                    <Text style={{fontSize : 20, marginLeft : 20 }}>{rowData.likes} Likes</Text>

                    
                </View>
            </View>
        );
    }

     getPosts = () => {
        
        var FeedRef = firebase.database().ref('tweets')
        FeedRef.on('value',(toast)=>{
        // console.log(toast.val())
        
        var Items = []
        toast.forEach((child)=>{
            // console.log(child.val())
            Items.push({
                title : child.val().title, 
                post : child.val().tweet,
                owner : child.val().tweetowner,
                likes : child.val().likes,
                imageurl : child.val().imageurl,
                comments : child.val().comments
            })
        })

        this.setState({mytoasts: this.state.mytoasts.cloneWithRows(Items),loaded : true});
        })
    }
    componentWillMount(){
    this.getPosts()
    }


    render(){
        return(
            <View style={Style.FeedWrapper}>
                 <ListView
                showsVerticalScrollIndicator={false}
                dataSource = {this.state.mytoasts}
                renderRow={(rowData) => this.renderRow(rowData)}
                />

            </View>

            )
    }
}

const Style = StyleSheet.create({
    FeedWrapper : {
        // backgroundColor : 'yellow',
        margin : 10,
        // flex : 1
        marginBottom : 100
    },
    FeedItem : {
        // height : 300,
        backgroundColor : 'rgb(235, 240, 241)',
        marginBottom : 10
    },
    postTitle : {
        fontSize : 18,
        textAlign : 'left',
        paddingTop : 5,
        paddingBottom : 5,
        paddingLeft : 10
    },
    postStatus : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingTop : 5,
        paddingLeft : 5
    }
});
export default FeedList