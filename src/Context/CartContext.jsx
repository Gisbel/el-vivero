import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    
        const [cart, setCart] = useState([])

        const addItem = (item, quantity, picture) => {
            if(!isInCart(item.id)) {
                setCart(prev => [...prev, {...item, quantity}])
            } else {
                console.log('Ya esta en el carrito')
            } 
        }
        
        const removeItem = (item) => {

            const newCart = cart.filter((cartItem) => cartItem.id !== item.id);        
            setCart(newCart);

        }
    
        const clear = () => {
            setCart([])
        }
    
        const isInCart = (item) => {
            return cart.some(cartItem => cartItem.id === item.id); //falta corregir
        }

        const totalQuantity = cart.reduce((acum, item) => acum + item.quantity, 0)

        const total = cart.reduce((acum, item) => acum + item.price * item.quantity, 0)

        return (
            <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear, isInCart, totalQuantity, total }}>
                {children}
            </CartContext.Provider>
        )
    }
