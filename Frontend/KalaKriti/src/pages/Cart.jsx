import React, { useContext, useEffect } from 'react'
import { AppContent } from '../Context/AppContext';
import { useNavigate } from 'react-router';


const Cart = () => {

    const navigate = useNavigate()

    const { cart,cartItems,updateQuantity, removeItem,isLoggedIn } = useContext(AppContent);

    const items = cart?.items || []; // Use optional chaining and fallback to an empty array
    let total = items.reduce((acc, item) => acc + (item.itemId.price * item.quantity), 0)

    useEffect(() => {
        if(isLoggedIn && items.length === 0) {
            cartItems()
        }  
    }, [isLoggedIn])

  return (
    <div className='flex justify-center min-h-screen my-5 px-6 sm:px-0'>
        { isLoggedIn && items.length > 0 ?
      <div>
            <h1 className='mb-5 text-3xl font-semibold text-center w-150 sm:w-200'>Cart</h1>
            <div className='flex items-center justify-between gap-5 shadow-xl rounded   p-2 mb-4 w-150 sm:w-200'>
                <p className='w-10 text-center sm:w-20'>Image</p>
                <p className='w-25 text-center sm:w-50'>Title</p>
                <p className='w-10 text-center sm:w-20'>Quantity</p>
                <p className='w-10 text-center sm:w-20'>Price</p>
                <p className='w-15 text-center sm:w-30'>SubTotal</p>
                <p className='w-15 text-center sm:w-30'></p>
            </div>
            <ul className='flex flex-col gap-4'>
                {items.map(item => (
                    <li key={item.itemId._id}>
                        <div className='flex items-center justify-between gap-2 shadow-xl rounded  p-2 sm:p-4 sm:gap-5 w-150 sm:w-200'>
                            <img src={`${item.itemId.image_url}`} alt={`${item.itemId.title}`} className='h-10 w-10 sm:w-20 sm:h-20 rounded-md shadow-xl' />
                            <p className='w-25 text-center sm:w-50'>{item.itemId.title}</p>
                            <div className='w-10 text-center sm:w-20 flex items-center justify-center gap-2'>
                                <button className=' px-2 rounded-full bg-gray-300' onClick={() => updateQuantity(item.itemId._id, item.quantity - 1)}disabled={item.quantity <= 1} >-</button>
                                <span>{item.quantity}</span>
                                <button className=' px-2  rounded-full bg-gray-300' onClick={() => updateQuantity(item.itemId._id, item.quantity + 1)}>+</button>
                            </div>
                            {/* <p className='w-10 text-center sm:w-20'>{item.quantity}</p> */}
                            <p className='w-10 text-center sm:w-20'>{item.itemId.price}</p>
                            <p className='w-15 text-center sm:w-30'>{item.itemId.price * item.quantity}</p>
                            <button className='btn px-2 py-1 rounded-full bg-red-500 text-white' onClick={() => removeItem(item.itemId._id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className=' rounded text-right my-5'>Grand Total: {total}</p>
            <button onClick={() => navigate('/checkout')} className='ml-177 btn px-5 py-1 rounded rounded-full'>Checkout</button>
            
            
        </div>
     :
    <div className='flex justify-center min-h-screen my-5 px-6 sm:px-0'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-semibold text-center'>Your Cart is Empty</h1>
            <p className='text-lg text-center'>Add items to your cart to see them here.</p>
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
        </div>
    </div>
    }
    </div>
  )
}

export default Cart
