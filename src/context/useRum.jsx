import { Children, createContext, useContext, useReducer, useState } from "react";

export const RumContext = createContext();

export const RumContextProvider =({children})=>{

    const reducer =(state ,action)=>{
        return state;
    }
    const [state, dispatch] = useReducer(reducer ,{
        total: 0
    })

    return <RumContext.Provider value={{state  ,dispatch}}>
        {children}
    </RumContext.Provider>
}

export default function useRum()
{
    return useContext(RumContext);
}