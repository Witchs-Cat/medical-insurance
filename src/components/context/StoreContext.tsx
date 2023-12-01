import React, {createContext} from 'react'
import Store from '../../store/store';

export interface IStoreContext{
    store: Store
  }
  
const store = new Store();
export const Context = createContext<IStoreContext>({
    store, 
  })
  

const StoreContext = ({children} : {children: React.ReactNode}) => {
    
  return  <Context.Provider value={{store}}>
    {children}
  </Context.Provider>
}

export default StoreContext