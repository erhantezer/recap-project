import { createContext, useContext } from "react";

const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};


export const AppProvider = ({children}) => {


    return(
            <AppContext value={{}}>
                {children}
            </AppContext>
        )
}