import React, {createContext, useReducer} from "react";

export const StateContext = createContext({});

const reducerActions = (state, action) => {
    
    switch(action.type){
        case "LOGGIN":
            
            sessionStorage.setItem("logged", JSON.stringify(true))
            
            return{
                ...state,
                logged: true,
                user: action.payload
            }
        
        case "LOGOUT":
            
            sessionStorage.clear();
            localStorage.clear();  
            
            return{
                ...state,
                logged: false,
                user: null
            }

        case "FAVS":
            
            localStorage.setItem("favoritos", JSON.stringify([...state.data, action.payload]))
            
            return{
                ...state,
                data: [...state.data, action.payload]
            }
        
        default:
            return state;
    }
}


const StateContextProvider = ({children}) => {

    const initialState = {
        logged: !!sessionStorage.getItem("logged"),
        userEmail: null,
        data: JSON.parse(localStorage.getItem("favoritos")) ?? []
    }

    const [state, dispatch] = useReducer(reducerActions, initialState);
    const propiedades = {state, dispatch};

    return(
        <StateContext.Provider value={propiedades}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider;