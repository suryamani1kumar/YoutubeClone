import data from "../component/Data"

 const Reducer=(state=data,action)=>{
    switch(action.type){
        case'add':{
            return{
                ...state,
               data:[ action.payload]
            }
        }
        default:{
            return{
                state
            }
        }
        

    }
}
export default Reducer