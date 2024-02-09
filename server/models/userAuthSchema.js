import mongoose from "mongoose";

const userAuthSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    userName: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    phoneNo: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    balance:{
        type: Number,
        default: 0
    },
    bookedTickets:{
        type: [{
            ticketNumber: {
                type: String
            },
            from: {
                type: String
            },
            to: {
                type: String
            },
            stateRailway: {
                type: String
            },
            date: {
                type: String
            },
            time: {
                type: String
            },
            price: {
                type: Number
        }}],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const userAuth = mongoose.model('users', userAuthSchema);
export default userAuth;