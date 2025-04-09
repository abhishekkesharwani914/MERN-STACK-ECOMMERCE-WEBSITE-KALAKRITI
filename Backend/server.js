if ( process.env.NODE_ENV !== "production" ) {
    require("dotenv").config(); 
}

// Required modules or npm packages
const express = require("express");
const app = express();
const cors = require("cors");
const ExpressError = require("./utils/expressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const main = require("./config/mongodb.js");
const cookieParser = require('cookie-parser');

// Fetching Routes 
const itemsRoute = require("./routes/items.js");
const reviewRoute = require("./routes/review.js");
const userRoute = require("./routes/users.js");
const userDataRoute = require("./routes/userData.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");

// Connection with Database
main();

const allowedOrigins = ["http://localhost:5173","https://kalakriti-mern.vercel.app/","https://mern-stack-ecommerce-website-kalakriti.vercel.app/","https://mern-stack-ecommerce-git-0ff6cc-abhishekkesharwani914s-projects.vercel.app/","https://mern-stack-ecommerce-website-ka-abhishekkesharwani914s-projects.vercel.app/"];

// Use of require module or npm packages
app.use(cors({ origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }, credentials:true})); // credentials true means we can send the cookies in the response
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(cookieParser());

// sessions stored in MongoDB Atlas
const store = MongoStore.create({ // MongoStore is used to store the session data in the MongoDB Atlas (which is a cloud database) and it is used to store the session data in the database
    mongoUrl: process.env.MONGO_URL, // here we are using the MongoDB Atlas URL to store the session data in the database
    collectionName: "sessions",
    crypto: { // crypto is used to encrypt the session data and it is used to store the session data in the encrypted form
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600, // time period in seconds and it is used to update the session data after the time period
});

// sessionOptions is an object which is used to create a session for the user
const sessionOptions = { //sessionOptions is an object which is used to create a session for the user
    store : store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { //cookie is used to store the session data in the browser
        httpOnly: true,
        secure: process.env.NODE_ENV==="production",
        sameSite: process.env.NODE_ENV==="production"? "none":"strict",
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

// session is used to create a session for the user and it is used to store the session data in the browser and in the database
app.use(session(sessionOptions));

// Routes
app.use("/", itemsRoute); // items is getting from itemsRoute which is save in ./routes/items.js
app.use("/items/:id/reviews", reviewRoute); // reviews is getting from reviewRoute which is save in ./routes/review.js
app.use("/auth", userRoute); // user is getting from userRoute which is save in ./routes/user.js
app.use("/user", userDataRoute);
app.use("/cart", cartRoute);
app.use('/checkout', orderRoute); // Order route

// Error Handling Route
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found")); //ExpressError is a custom error class and pass as a parameter to next function
});

app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Something went wrong"} = err;
    // res.status(statusCode).send(message);
    // if (res.headersSent) {
    //     return next(err); // Let Express handle it
    // }
    res.status(statusCode).json({message});
});

// Server is running on port 5000
app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});