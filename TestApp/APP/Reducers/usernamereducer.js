export default (state=null,action) => {
    switch(action.type){
        case 'UPDATE_USERNAME':
        console.log(action.payload)
        return action.payload

        default:
        return ""
    }

}