import { Actions } from 'react-native-router-flux'


export const openDrawer = (status) =>{

  return{
    type : 'openDrawer',
    payload : status
  }
}





export const UserName = (text) => {
    // console.log("called User input action" + text)
    return {
        type : 'UPDATE_USERNAME',
        payload : text
    }
}

export const Password = (text) => {
    // console.log("called Password action" + text)
    return {
        type : 'UPDATE_PWD',
        payload : text
    }
}


export const Login = (username,password) => {
    Actions.feed()
    return {
        type : 'LOGIN',
        payload : 0
    }
}