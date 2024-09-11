import { createContext, useReducer } from "react";

export const DairyContext = createContext();

export const DairyReducer = (state, action) => {
    switch(action.type) {
        case'GET_DAIRY' : 
        return {
            ...state,
            dairy : action.payload
        }
        case'DELETE' : 
        return {
            ...state,
            dairy: state.dairy.filter((d) => d._id !== action.payload._id)
        }
        case'CREATE' : 
        return {
            ...state,
            dairy: [...state.dairy, action.payload]
        }
        default : return state;
    }
}

export const DairyContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DairyReducer, {
        dairy: []
    })
    return (
        <DairyContext.Provider value={{...state, dispatch}}>
            {children}
        </DairyContext.Provider>
    )
}