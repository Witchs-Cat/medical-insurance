import React, {createContext, useContext} from 'react'
import Store from '../../store/store';
import { observer, useLocalObservable } from 'mobx-react-lite';

export interface IStoreContext{
    store: Store
  }

const store = new Store()

export const Context = createContext<IStoreContext>({
    store: store, 
})
  
const StoreContext = observer(({children} : {children: React.ReactNode}) => {
  const store = useLocalObservable(() => new Store()) as Store;
  return  <Context.Provider value={{store}}>
    {children}
  </Context.Provider>
})

export const useAppStore = ()=>
{
  const {store} = useContext(Context);
  return store
}

export default StoreContext