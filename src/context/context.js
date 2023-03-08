import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";



const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};



export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";
    const getProducts = async () => {
        console.log("erhan")
        setLoading(true)
        try {
            const { data } = await axios(url)
            setProducts(data)
            setLoading(false)
            setError(false)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    console.log(products)

    useEffect(() => {
        getProducts()
    },[])

    return (
        <AppContext.Provider value={{ products, loading, error, getProducts }}>
            {children}
        </AppContext.Provider>
    )
}