import { createContext,useReducer } from "react";
import data from "../component/Data";
import Reducer from "./Reducer";

 export const Globalcontext=createContext(data)

 export const ContextProvider=(props)=>{
     const [state,dispatch]=useReducer(Reducer,data)
     const watching=(id)=>{
         dispatch({
             type:'add',
             payload:id
         })
     }
    return(
        <Globalcontext.Provider
        value={{data:state.data,
            watching
        }}
        >
            {props.children}
            
        </Globalcontext.Provider>
    )
}