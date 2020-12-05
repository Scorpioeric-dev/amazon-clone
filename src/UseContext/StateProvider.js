import React, { createContext,useContext,useReducer } from "react";

//Prepares the Data Layer / Holder / 
export const StateContext = createContext()

// Creating the Reducer / State / Props & We wrap our app in it giving it access to the useContext api
export const StateProvider = ({Reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(Reducer,initialState)}>
    {children}
    </StateContext.Provider>
)


//Pulling information from Data Layer
export const useStateValue = () => useContext(StateContext)