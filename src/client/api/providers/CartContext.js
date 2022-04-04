import { createContext, useState } from "react";

export const context = createContext()

const { Provider } = context

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const cartCopy = [...cart];
        const cartItem = { ...item, quantity }
        if (isInCart(item.id)) {
            let index = cartCopy.findIndex(el => el.id === item.id);
            cartCopy[index].quantity += quantity;
            setCart(cartCopy);
        } else {
            cartCopy.push(cartItem);
            setCart(cartCopy)
        }
    }

    const isInCart = (itemID) => {
        return cart.some(item => item.id === itemID)
    };

    const removeItem = (itemID) => {
        const filteredCart = cart.filter((item) => item.id !== itemID)
        setCart(filteredCart)
    }

    const clear = () => {
        setCart([])
    }

    const cartCounter = () => {
        const totalItems = cart.reduce((acc, item) => (acc + item.quantity), 0)
        return totalItems;
    }

    const totalPrice = () => {
        const compraTotal = cart.reduce((prev, item) => (prev + item.quantity * item.precio), 0)
        return compraTotal;
    }


    const cartContextValue = {
        cart, addItem, clear, cartCounter, totalPrice, removeItem
    }

    return (
        <Provider value={cartContextValue}>
            {children}
        </Provider>
    )
}

export default CartContext