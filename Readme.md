# **Kalakriti: MERN Stack E-Commerce Website**

Kalakriti is a full-featured e-commerce platform developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers a seamless shopping experience, enabling users to browse products, manage their carts, place orders, and make secure payments. The platform also includes an admin interface for efficient management of products, orders, and users.


## **Features**

- **User Authentication:** Secure user registration and login functionality with JWT-based authentication.
- **Product Catalog:** Comprehensive product listings with detailed information and images.

- **Shopping Cart:** Users can add products to their cart, adjust quantities, and remove items as needed.
- **Order Management:** Users can place orders and view their order history.
- **Payment Gateway Integration:** Secure payment processing integrated with Stripe.

## **Project Structure**
The project is divided into two main directories:

- **Backend:** Contains the server-side code, including API routes, models, controllers, and configuration files.​

- **Frontend/KalaKriti:** Contains the client-side code built with React.js, including components, contexts, and pages.

## **Installation Guide**

**Prerequisites**

Ensure you have the following installed:
- Node.js (latest stable version)
- npm or yarn

**To set up the project locally, follow these steps:**

1. Clone the Repository
```bash
git clone https://github.com/abhishekkesharwani914/MERN-STACK-ECOMMERCE-WEBSITE-KALAKRITI.git

```
2. Backend Setup
- Navigate to the Backend directory:
```bash
cd MERN-STACK-ECOMMERCE-WEBSITE-KALAKRITI/Backend
```
- Install the required Dependencies
```bash
npm install  # or yarn install
```
- Create a .env file in the Backend directory and configure the necessary environment variables, such as database connection strings and JWT secrets.
- Start the backend server
```bash
node server.js
```
3. Frontend Setup
Navigate to the Frontend/KalaKriti directory:
```bash
cd ../Frontend/KalaKriti
```
- Install the required Dependencies
```bash
npm install 
```
- Start the frontend server
```bash
npm run dev
```
4. Access the Application

- Open your browser and navigate to http://localhost:5173 to explore the application.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**Backend .env requirement**

+ Session & JWT secret keys
`SESSION_SECRET`
`JWT_SECRET_KEY`

+ MONGO_DB
`MONGO_SECRET_KEY`

+ SMTP (Brevo) Configuration and Keys
`SMTP_USER`
`SMTP_PASSWORD`
`SENDER_MAIL`

+ Stripe Keys
`STRIPE_SECRET_KEY`

+ Client Url
`CLIENT_URL`

**Frontend .env requirement**

- Backend Url
`BACKEND_URL`

- Stripe Keys
`STRIPE_PUPLISHABLE_KEY`

## Deployment

- Modify the vite.config.js file if necessary to configure aliases correctly.
- Frontend is deployed on vercel.
- Backend is deployed on render.

[GitHub Project link🔗](https://github.com/abhishekkesharwani914/MERN-STACK-ECOMMERCE-WEBSITE-KALAKRITI)

[Live Project🔗](https://kalakriti-mern.vercel.app/)

## 🔗 Links
- [GitHub](https://github.com/abhishekkesharwani914)

- [linkedin](https://www.linkedin.com/in/abhishek-kesharwani-5019b4215/)

