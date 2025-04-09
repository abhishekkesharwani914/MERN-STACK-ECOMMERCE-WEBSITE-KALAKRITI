import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {userDetail, authState ,getCartItems, addToCart, removeCart, updateCartItem,removeCartItem,orderItems} from '../api/Api.jsx'
import {toast} from "react-toastify"

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    // const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)
    const [cart, setCart] = useState([])
    const [isCartFetched, setIsCartFetched] = useState(false);
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true);

    // Getting Order Details
    const fetchOrderData = async () => {
          try {
              const res = await orderItems();
              if (res.data.success) {
                setOrders(Array.isArray(res.data.orders) ? res.data.orders : [res.data.orders]);
              }
          } catch (error) {
              console.error("Error fetching data:", error);
          } finally {
            setLoading(false)
          }
    };
      
    useEffect(() => {
      fetchOrderData();
    }, []);

    //Getting Cart Items
    const cartItems = async () => {
        try{
            const response = await getCartItems();
            if(response.data.success){
                setCart(response.data.carts)
            }
        }catch (err) {
            toast.error(err.message)
        }
    }

    // Add Items to Cart
    const addCartItems = async (itemId, quantity) => {
        try{
            const response = await addToCart(itemId, quantity);
            if(response.data.success){
                toast.success(response.data.message)
                cartItems() // Refreshing Cart Items
            }else {
                toast.error(response.data.message)
            }
        }catch (err) {
            toast.error(err.message)
        }
    }

    // Update Cart Item Quantity
    const updateQuantity = async (itemId, newQuantity) => {
        try{
            const response = await updateCartItem(itemId, newQuantity);
            if(response.data.success){
                const updatedCart = cart.items.map(item =>
                    item.itemId._id === itemId ? { ...item, quantity: newQuantity} : item
                );
                setCart(updatedCart);
            }
        }catch (err) {
            toast.error(err.message)
        }
    }

    // Remove Cart Item
    const removeItem = async(itemId) => {
        try {
            const response = await removeCartItem(itemId);
            if(response.data.success){
                const updatedCart = cart.items.filter(item => item.itemId._id !== itemId);
                setCart(updatedCart); // Refreshing Cart Items
            }else {
                toast.error(response.data.message)
            }
        }catch (err) {
            toast.error(err.message)
        }
    }

    //Getting User State wether user is logged in or not
    const getUserState = async () => {
        try{
            const res = await authState({withCredentials: true})
            if(res.data.success){
                setIsLoggedIn(true)
                getUserData()
            }
        }catch (err) {
            toast.error(err.message)
        }

    }

    // Getting User Data from backend like name, email, verifyEmail or not, etc
    const getUserData = async () => {
        try{
            const response = await userDetail({withCredentials: true});
            response.data.success? setUserData(response.data.userData): toast.error(response.data.message)
        }catch (err) {
            toast.error(err.message)
        }
    }

    // UseEffect to get the user state and user data when the component is mounted or refreshed
    useEffect(() => {
        getUserState(); // Check if the user is logged in
        if (isLoggedIn && cart.length === 0 && !isCartFetched) {
            cartItems(); // Fetch cart items only if the user is logged in
            setIsCartFetched(true);
        }
    }, [isLoggedIn, isCartFetched]);

    // value is an object which is used to pass the data to the child components and it is used to store the data in the context API
    const value = {
        isLoggedIn,setIsLoggedIn,userData,setUserData, getUserData,cart, setCart, cartItems, addCartItems, removeCart, updateQuantity, removeItem, orders,loading
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}
