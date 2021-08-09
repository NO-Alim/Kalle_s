import React,{useState,useContext,useEffect,useCallback} from 'react'


const url = 'https://fakestoreapi.com/products';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    const fetchProduct = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}`)
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    })

    useEffect(() => {
        fetchProduct();
    },[searchText])
    return <AppContext.Provider value={{loading}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}