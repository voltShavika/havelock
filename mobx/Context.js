import {useContext, createContext} from 'react'
import { createStore } from './store';
import {useLocalStore, useLocalObservable} from 'mobx-react'

const Context = createContext(null);

export const StoreProvier = ({children}) => {

    const store = useLocalObservable(createStore);
    return <Context.Provider value={store}>
        {children}
    </Context.Provider>
}

export const useStore = () =>  useContext(Context);