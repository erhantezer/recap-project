import axios from "axios";
import { createContext, useContext, useState } from "react";



const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

const url = "https://63a16242a543280f7754aaa3.mockapi.io/products";

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getProducts = async () => {
        setLoading(true)
        try {
            const { data } = await axios(url)
            data.map((item) => setProducts(item))
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    console.log(products)

    useContext(() => {
        getProducts()
    },[])

    return (
        <AppContext.Provider value={{ products, loading, error, getProducts }}>
            {children}
        </AppContext.Provider>
    )
}