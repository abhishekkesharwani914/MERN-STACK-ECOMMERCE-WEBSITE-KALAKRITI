import React, { useContext} from 'react'
import Loading from '../components/Loading.jsx'
import { AppContent } from '../Context/AppContext.jsx'

const Orders = () => {

  const {orders, loading} = useContext(AppContent);
  
  if(loading) {
    return <Loading/>
  }

  return (
    <div className="checkout-page flex flex-col items-center  min-h-screen my-5 px-6 sm:px-0">
      <div>
            <h1 className='mb-5 text-3xl font-semibold text-center w-150 sm:w-200'>Your Orders</h1>
            
            {orders.length === 0 ? (
              <div className='flex justify-center min-h-screen my-5 px-6 sm:px-0'>
              <div className='flex flex-col gap-5'>
                  <h1 className='text-3xl font-semibold text-center'>Your Order is Empty</h1>
                  <p className='text-lg text-center'>Order now to see your order details.</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
                  <p></p>
              </div>
            </div>
            ) : (
              orders.map((order) => (
                <div key={order._id} className="order-card">
                  {/* <h3>Order ID: {order._id}</h3>
                  <p>Status: <strong>{order.track}</strong></p>
                  <p>Total Amount: ₹{order.totalAmount}</p>
                  <p>Payment Method: {order.paymentMethod}</p>
                  <p>Ordered On: {new Date(order.createdAt).toLocaleDateString()}</p>

                  <h4>Shipping Info</h4>
                  <ul>
                    <li>Name: {order.shippingInfo.name}</li>
                    <li>Phone: {order.shippingInfo.phone}</li>
                    <li>
                      Address: {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.country} - {order.shippingInfo.postalCode}
                    </li>
                  </ul> */}

                  {/* <h4>Items</h4> */}
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.itemId ? (
                          <>
                          <div className='flex items-center justify-between gap-2 shadow-xl rounded  p-2 sm:p-4 sm:gap-5 w-150 sm:w-200'>
                                <div className='flex gap-5'>
                                  <img src={`${item.itemId.image_url}`} alt={`${item.itemId.title}`} className='h-10 w-10 sm:w-20 sm:h-20 rounded-md shadow-xl' />
                                  <div className='flex flex-col jus'>
                                    <p className=' text-left'><strong>{item.itemId.title}</strong></p>
                                    <p className=' text-left'>Item ID: #{item.itemId._id}</p>
                                    <p className=' text-left'>Order ID: #{order._id}</p>
                                  </div>
                                  
                                  
                                </div>
                                <div>
                                  <input type="radio" checked id='status' className='accent-black'/>
                                  <label className='text-left' htmlFor='status'>{order.track}</label>
                                </div>
                                <div>
                                <p> (x{item.quantity})</p>
                                </div>
                                <div>
                                  <p className='w-10 text-center sm:w-20'>{item.itemId.price}</p>
                                  <p className='w-10 text-center sm:w-20'>#{order.paymentMethod}</p>
                                </div>
                              </div>
                          </>
                        ) : (
                          <div className='flex justify-center min-h-screen my-5 px-6 sm:px-0'>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-3xl font-semibold text-center'>Your Order is Empty</h1>
                                <p className='text-lg text-center'>Order now to see your order details.</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
                                <p></p>
                            </div>
                          </div>
                          
                        )}
                      </li>
                    ))}
                  </ul>

                  
                </div>
              ))
            )}
        </div>

    </div>
  )
}

export default Orders
