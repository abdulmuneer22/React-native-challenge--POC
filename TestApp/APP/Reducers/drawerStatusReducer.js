export default (state = null,action) => {
   console.log(action.payload)
   switch(action.type){
       case 'openDrawer':
       return action.payload

       default:
       return false
   }



}