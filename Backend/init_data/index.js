const mongoose = require("mongoose");
const initData = require("./data");
const Items = require("../models/itemModel.js");

// const MongoURL = "mongodb://127.0.0.1:27017/KalaKriti";//"mongodb:initialize the URL before funciton call";
const dbUrl = "mongodb+srv://abhishekkesharwani914:4BZT3Wal9sOBIDcX@cluster0.jwy43.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
main()
.then(() => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
};

const initDB = async () => {
    await Items.deleteMany({});
    await Items.insertMany(initData);
    console.log("Data inserted");
};

initDB();