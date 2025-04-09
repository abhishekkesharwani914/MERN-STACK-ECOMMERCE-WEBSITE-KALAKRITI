import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AppContent } from '../Context/AppContext';
import { useNavigate } from 'react-router';
import { checkout } from '../api/Api.jsx'; // Adjust the import path as necessary

const CheckoutPage = () => {

  const navigate = useNavigate();
  const [isAddressInfo, setIsAddressInfo] = useState('');
  const [isPaymentDetail, setIsPaymentDetail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const {cart,setCart} = useContext(AppContent);
  const items = cart?.items || []; // Use optional chaining and fallback to an empty array
  const cartId = cart._id
  let totalAmount = items.reduce((acc, item) => acc + (item.itemId.price * item.quantity), 0)

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleAddressInfo = (e) => {
    e.preventDefault();
    setIsAddressInfo(true);
  }

  const handleSelectPayment = (e) => {
    setPaymentMethod(e.target.textContent)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await checkout(
        cartId,
        shippingInfo,
        totalAmount,
        paymentMethod
      );
      console.log(cartId, shippingInfo, totalAmount, paymentMethod)
      if(res.data.success){
        toast.success('Order placed successfully!');
        navigate('/orders'); // Redirect to orders page after placing the order 
        setCart([])
        setShippingInfo({
          name: '',
          phone: '',
          address: '',
          city: '',
          postalCode: '',
          country: '',
        });
      } else {
        toast.error(res.data.error);
        navigate('/cart');
      }
      setPaymentMethod('')
      setIsPaymentDetail('')
    } catch (err) {
      alert('Error placing order');
    }
  };

  return (
    <div className="checkout-page flex flex-row items-center justify-center min-h-screen my-5 px-6 sm:px-0">
      {!isAddressInfo && 
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{isAddressInfo? "Address Details" : "Add Address Details"}</h2>
        <form onSubmit={handleAddressInfo} className='flex flex-row flex-wrap gap-4 text-white'>
          <div className='address mb-4 flex items-center gap-3 w-full py-2 text-white '>
              <input type="text" placeholder='Name' name='name' className='bg-transparent outline-none text-white w-full' onChange={handleChange} required />
          </div>
          <div className='address mb-4 flex items-center gap-3 w-full py-2 text-white '>
              <input type="number" placeholder='Phone No' name='phone'  className='bg-transparent outline-none text-white w-full' onChange={handleChange} required />
          </div>
          <div className='address mb-4 flex items-center gap-3 w-full py-2 text-white '>
              <input type="text" placeholder='Address' name='address' className='bg-transparent outline-none text-white w-full' onChange={handleChange} required />
          </div>
          <div className='address mb-4 flex items-center gap-3 w-full py-2 text-white '>
              <input type="text" placeholder='City' name='city' className='bg-transparent outline-none text-white w-full' onChange={handleChange} required />
          </div>
          <div className='address mb-4 flex items-center gap-3 w-full py-2 text-white '>
              <input type="number" placeholder='Postal Code' name='postalCode' className='bg-transparent outline-none text-white w-full' onChange={handleChange} required />
          </div>
          <div className='address mb-4 flex items-center gap-3 w-full py-2 text-white '>
              <input type="text" placeholder='Country' name='country' className='bg-transparent outline-none text-white w-full' onChange={handleChange} required />
          </div>
          <button type="submit" className='w-full text-center bg-white text-black py-2.5 font-semibold rounded-full'>Next</button>
        </form>
        
      </div>
}
  {!isPaymentDetail && isAddressInfo && 
      <div className='bg-[#332e2b] p-10 rounded-lg shadow-lg w-full sm:w-96 text-white text-sm'>

        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{isAddressInfo? "Payment Method" : "Address Details "}</h2>
        <form onSubmit={handleSubmit} className='flex flex-row flex-wrap gap-4 text-white'>
          <button type="button" onClick={handleSelectPayment} className='focus:bg-white focus:text-black justify-center border rounded-full font-medium border-white mb-4 flex items-center gap-3 w-full py-2 text-white '>COD</button>
          <button type="button" onClick={handleSelectPayment} className='focus:bg-white focus:text-black justify-center border rounded-full font-medium border-white mb-4 flex items-center gap-3 w-full py-2 text-white '>Net Banking</button>
          <button type="button" onClick={handleSelectPayment} className='focus:bg-white focus:text-black justify-center border rounded-full font-medium border-white mb-4 flex items-center gap-3 w-full py-2 text-white '>Debit/Credit Card</button>
          <button type="button" onClick={handleSelectPayment} className='focus:bg-white focus:text-black justify-center border rounded-full font-medium border-white mb-4 flex items-center gap-3 w-full py-2 text-white '>UPI</button>
          
          
          <button type="submit" className='w-full text-center bg-white text-black py-2.5 font-semibold rounded-full'>Place Order</button>
        </form>
        </div>
  }
    </div>
  );
};

export default CheckoutPage;
