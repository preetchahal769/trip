import mongoose from "mongoose";

const ticketAuthSchema = new mongoose.Schema({
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
    date: {
        type: Date,
        default: Date.now
    }
})

const ticketAuth = mongoose.model('tickets', ticketAuthSchema);
export default ticketAuth;