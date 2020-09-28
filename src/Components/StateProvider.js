import { createContext } from "react";

// setting up data layer
import React, { useContext, useReducer } from 'react';


// this is the data layer
export const StateContext = createContext();

// build a provide to give access the data layer
export const StateProvider = ( { reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//  this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);