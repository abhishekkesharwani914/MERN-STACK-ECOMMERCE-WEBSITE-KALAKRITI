import axios from "axios";

export const credentials = () => {
    return (axios.defaults.withCredentials = true)
}

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
});

//get method
// This method is used to get the items from the backend. It sends a get request to the backend with the options object which contains the credentials and other options.
// It returns a promise which resolves to the response of the request.
export const getItems = () =>{
    return api.get("/");
}

//get Id method
// This method is used to get the item details by id. It sends a get request to the backend with the id of the item.
// It returns a promise which resolves to the response of the request.
export const getID = (id) => {
    return api.get(`/${id}`)
}

//post review method
// This method is used to post a review for an item. It sends a post request to the backend with the id of the item and the review object.
// It returns a promise which resolves to the response of the request.
export const postReview = (id,review) => {
    return api.post(`items/${id}/reviews`,review)
}

//Login method
// This method is used to log in the user in the application. It sends a post request to the backend with the email and password of the user.
// It returns a promise which resolves to the response of the request.
export const login = (email,password,options) => {
    return api.post('auth/login',{email, password},options)
}

//SignUp method
// This method is used to register a new user in the application. It sends a post request to the backend with the username, email and password of the user.
// It returns a promise which resolves to the response of the request.
export const register = (Username,email,password,options) => {
    return api.post('auth/register',{Username,email,password},options)
}

//Logout method
// This method is used to log out the user from the application. It sends a post request to the backend with the options object which contains the credentials and other options.
// It returns a promise which resolves to the response of the request.
export const logout = (options) => {
    return api.post('auth/logout',options)
}

//User Data Method
// This method fetches the user data from the backend. It returns an object containing user data like name, email, verifyEmail or not, etc.
// It is used to show the user data in the frontend like name, email, verifyEmail or not, etc.
export const userDetail = (options) => {
    return api.get('user/data', options)
}

// User Auth State Method
// This method checks if the user is logged in or not. It returns a boolean value.
// If the user is logged in, it returns true. If the user is not logged in, it returns false.
// It is used to show the user data in the frontend like name, email, verifyEmail or not, etc.
export const authState = (options) => {
    return api.get('auth/is-auth', options)
}

// Send Email Verification OTP
// This method sends an email verification OTP to the user's email. It returns a promise which resolves to the response of the request.
// It is used to verify the email of the user after registration.
export const emailVerificationOtp = (options) => {
    return api.post('auth/send-verify-otp', options)
}

//verify-account method
// This method verifies the email of the user after registration. It sends a post request to the backend with the OTP of the user.
// It returns a promise which resolves to the response of the request.
export const verifyEmail = (otp) => {
    return api.post('auth/verify-account', {otp})
}

// Send Reset Password OTP method
// This method sends a reset password OTP to the user's email. It returns a promise which resolves to the response of the request.
// It is used to reset the password of the user.
export const sendResetPasswordOtp = (email) => {
    return api.post('auth/send-reset-otp', {email})
}

// Reset Password Method
// This method resets the password of the user. It sends a post request to the backend with the email, OTP and new password of the user.
// It returns a promise which resolves to the response of the request.
export const resetPassword = (email, otp, newPassword) => {
    return api.post('auth/reset-password', {email, otp, newPassword})
}

// Add to Cart Method
// This method adds an item to the cart. It sends a post request to the backend with the itemId and quantity of the item.
// It returns a promise which resolves to the response of the request.
export const addToCart = (itemId, quantity) => {
    return api.post(`cart`, {itemId, quantity})
}

// Get Cart Items Method
// This method fetches the cart items from the backend. It returns a promise which resolves to the response of the request.
// It is used to show the cart items in the frontend like name, price, quantity, etc.
export const getCartItems = () => {
    return api.get('cart')
}

// Remove Cart Item Method
// This method removes an item from the cart. It sends a delete request to the backend with the id of the item.
// It returns a promise which resolves to the response of the request.
// It is used to remove the cart in the frontend.
export const removeCart = () => {
    return api.delete(`cart/`)
}

// Update Cart Item Method
// This method updates the quantity of an item in the cart. It sends a post request to the backend with the itemId and quantity of the item.
// It returns a promise which resolves to the response of the request.
// It is used to update the quantity of the cart item in the frontend.
export const updateCartItem = (itemId, quantity) => {
    return api.post(`cart/update`, {itemId, quantity})
}

// Remove Cart Item Method
// This method removes an item from the cart. It sends a post request to the backend with the itemId of the item.
// It returns a promise which resolves to the response of the request.
// It is used to remove the cart item in the frontend.
export const removeCartItem = (itemId) => {
    return api.post(`cart/remove`, {itemId})
}

// Checkout Method
// This method checks out the cart. It sends a post request to the backend with the cart items
// It returns a promise which resolves to the response of the request.
export const checkout = (cartId, shippingInfo, totalAmount, paymentMethod) => {
    return api.post('/checkout', {cartId, shippingInfo, totalAmount, paymentMethod })
}

// Get Ordered Items
export const orderItems = () => {
    return api.get('/checkout')
}

// Stipe Payment Method
export const stripePayment = (cartId, shippingInfo, totalAmount, paymentMethod,itemss) => {
    return api.post('/payment/stripe', {cartId, shippingInfo, totalAmount, paymentMethod,itemss})
}