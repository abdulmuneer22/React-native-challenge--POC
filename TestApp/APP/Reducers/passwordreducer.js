export default (state=null,action) => {
    switch(action.type){
        case 'UPDATE_PWD':
        return action.payload

        default:
        return ""
    }

}