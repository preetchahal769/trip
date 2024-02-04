import ticketAuth from "../models/ticketAuthSchema.js";
export const getTickets = async (req, res) => {
        try {
            const tickets = await ticketAuth.find();
            console.log(tickets);
            res.status(200).json(tickets);
        } catch (err) {
            res.status(500).json(err);
        }
    };