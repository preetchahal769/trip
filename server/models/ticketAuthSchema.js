import mongoose from "mongoose";

const ticketAuthSchema = new mongoose.Schema({
    ticketNumber: {
        type: String,
        // required: true
    },
    from: {
        type: String,
        // required: true
    },
    to: {
        type: String,
        // required: true
    },
    stateRailway: {
        type: String,
        // required: true
    },
    date: {
        type: String,
        // required: true
    },
    time: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        default: 300
        // required: true
    },
})

const ticketAuth = mongoose.model('tickets', ticketAuthSchema);
export default ticketAuth;