export default (state,action)=>{
    switch(action.type){
        case'add':{
            return{
                ...state,
               data:[...state, action.payload]
            }
        }
        default:{
            return{
                state
            }
        }
        

    }
}