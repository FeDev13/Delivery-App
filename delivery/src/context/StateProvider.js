import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

export const IinitContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <IinitContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </IinitContext.Provider>
);

export const useStateValue = () => useContext(StateProvider);
