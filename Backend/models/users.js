const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
    verifyOtp: {
        type:String,
        default: ''
    },
    verifyOtpExpireAt: {
        type:Number,
        default: 0,
    },
    isAccountVerified: {
        type:Boolean,
        default: false,
    },
    resetOtp: {
        type:String,
        default: "",
    },
    resetOtpExpireAt: {
        type:String,
        default: 0,
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

module.exports = mongoose.model("User", userSchema);