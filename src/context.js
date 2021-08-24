import React,{useState,useContext,useEffect,useCallback} from 'react'


const url = 'https://fakestoreapi.com/products';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [addCartModal, setAddCartModal] = useState(false);
    const [addCartId, setAddCartId] = useState(null);
    const [count, setCount] = useState(1);
    const [cartList, setCartList] = useState([])
    const [cartLoading, setCartLoading] = useState(false);
    const [wishListId, setWishListId] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

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

    //handle Decrement count
    const handleDecrease = () =>{
        if (count > 1) {
            setCount(count - 1)
        }
    }

    //handle cart localStorage 
    //for concat / append in cartList (it's global you can use this function anywhere inside localStorage handler)
    //name must be inside block quot 'example'
    const appendToStorage = (name, data) => {
        var prevItems = localStorage.getItem(name)
        try{
            prevItems = JSON.parse(prevItems);
        } catch (e) {
            prevItems = []
        }
        localStorage.setItem(name, JSON.stringify(prevItems.concat(data)))
    }


    const handleCart =  (id,itemTotal) => {
        const localList = JSON.parse(localStorage.getItem('cartList'));
        var ClickedItem = products.find((item) => item.id === id);

        const ThisProduct = ({
            name: ClickedItem.name,
            id: ClickedItem.id,
            price: ClickedItem.price,
            priceTwo: null,
            quantity: itemTotal,
            image: ClickedItem.image
        })

        //if there is no item 

        if (localStorage.getItem('cartList') === null) {
            localStorage.setItem('cartList', JSON.stringify(cartList))
        }

        //
        if (!localList) {
            appendToStorage('cartList', ThisProduct);
        } else if (localList.some((item) => item.id === ThisProduct.id)) {
            var AllItem = JSON.parse(localStorage.cartList);

            for (let i = 0; i < AllItem.length; i++) {
                if (ThisProduct.id === AllItem[i].id) {
                    AllItem[i].quantity += ThisProduct.quantity;
                    break;
                }
            }
            localStorage.setItem('cartList', JSON.stringify(AllItem))
        } else{
            //when item is add first time
            appendToStorage('cartList', ThisProduct)
        }
        setCartLoading(!cartLoading);
    }

    //handle cart item increase & decrease inside localStorage

    const handleIncreaseCartItemStorage = (id) => {
        var AllItem = JSON.parse(localStorage.cartList);
        for (let i = 0; i < AllItem.length; i++) {
            if (id === AllItem[i].id) {
                AllItem[i].quantity += 1;
                break
            }
        }
        localStorage.setItem('cartList', JSON.stringify(AllItem));
        setCartLoading(!cartLoading);
    }


    const handleDecreaseCartItemStorage = (id) => {
        var AllItem = JSON.parse(localStorage.cartList);
        for (let i = 0; i < AllItem.length; i++) {
            if (id === AllItem[i].id) {
                if (AllItem[i].quantity > 1) {
                    AllItem[i].quantity -= 1;
                }
                break;
            }
        }
        localStorage.setItem('cartList', JSON.stringify(AllItem));
        setCartLoading(!cartLoading);
    }

    //Delete item form cart 
    const deleteCartItem = (id) =>{
        const AllItem = JSON.parse(localStorage.getItem('cartList'));
        for (let i = 0; i < AllItem.length; i++) {
            if (AllItem[i].id === id) {
                AllItem.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('cartList', JSON.stringify(AllItem));
        setCartLoading(!cartLoading);
    }


    //handle wishList 

    const handleWishList = (id) => {
        const localList = JSON.parse(localStorage.getItem('wishList'));
        if (localStorage.getItem('wishList') === null) {
            localStorage.setItem('wishList', JSON.stringify(wishListId))
            appendToStorage('wishList', id)
        } else if (localList.find(item => item === id)) {
            const newList = localList.filter((item) => {
                return item !== id
            });
            localStorage.setItem('wishList', JSON.stringify(newList));
        } else{
            appendToStorage('wishList', id)
        }
        setCartLoading(!cartLoading)
    }


    useEffect(() => {
        const AllItem = JSON.parse(localStorage.getItem('cartList'));
        if (AllItem && AllItem.length > 0) {
            const GetTotalPrice = AllItem.map(item => item.price * item.quantity).reduce((prev,next) => prev + next);
            setTotalPrice(GetTotalPrice);
        } else{
            setTotalPrice(0)
        }
    },[cartLoading])


    useEffect(() => {
        fetchProduct();
    },[searchText])

    return <AppContext.Provider value={{loading,products,setLoading,setProducts,addCartModal,setAddCartModal,toggleAddCartModal,addCartId,count, setCount,handleDecrease,handleCart,handleIncreaseCartItemStorage,handleDecreaseCartItemStorage,deleteCartItem,cartLoading, setCartLoading,handleWishList,totalPrice}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}