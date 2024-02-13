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
        default: "01/01/2023"
        // required: true
    },
    time: {
        type: String,
        default: "10:00 AM"
        // required: true
    },
    price: {
        type: Number,
        default: 300
        // required: true
    },
    seat : {
        type : Number,
        default : 10
    }
})

const ticketAuth = mongoose.model('tickets', ticketAuthSchema);
export default ticketAuth;