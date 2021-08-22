import React,{useState,useContext,useEffect,useCallback} from 'react'


const url = 'https://fakestoreapi.com/products';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [addCartModal, setAddCartModal] = useState(false);
    const [addCartId, setAddCartId] = useState(null);

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

    //toggle AddCartModal
    const toggleAddCartModal = (id) => {
        setAddCartModal(!addCartModal);
        setAddCartId(id);
    }


    useEffect(() => {
        fetchProduct();
    },[searchText])
    return <AppContext.Provider value={{loading,products,setLoading,setProducts,addCartModal,setAddCartModal,toggleAddCartModal,addCartId}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}