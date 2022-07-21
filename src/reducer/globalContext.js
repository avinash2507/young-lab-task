import  { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
   cardDetail:{}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions for changing state

   function addDetail(item) {
       dispatch({
           type: 'ADD_CARD_DETAIL',
           payload: item
       });
   }
 

   return(
      <GlobalContext.Provider value = {{cardDetail : state.cardDetail, addDetail}}> 
        {children} 
   </GlobalContext.Provider>
   )
}