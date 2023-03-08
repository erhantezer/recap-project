import axios from "axios";
import { createContext, useContext, useState } from "react";



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
            data.map((item) => setProducts(item))
            setLoading(false)
            setError(false)
            console.log("data")
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