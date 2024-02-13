import ticketAuth from "../models/ticketAuthSchema.js";
import userAuth from "../models/userAuthSchema.js";

export const getTickets = async (req, res) => {
  try {
    // Fetch all tickets from the database
    const tickets = await ticketAuth.find();
    console.log(tickets);
    // Respond with status 200 and the retrieved tickets
    res.status(200).json(tickets);
  } catch (err) {
    // If an error occurs, respond with status 500 and the error message
    res.status(500).json(err);
  }
};
export const bookTicket = async (req, res) => {
  console.log(req.body);
  // Destructure email and ticket number from the request body
  const { email, ticketNo} = req.body;

  try {
    // Find user by email
    const user = await userAuth.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Find ticket by ticket number
    const ticket = await ticketAuth.findOne({ ticketNumber: ticketNo });
    if (!ticket || ticket.seats === 0)
      return res.status(404).json({ message: "All seats are booked" });

    // Check user balance
    if (user.balance < ticket.price)
      return res.status(404).json({ message: "Insufficient balance" });
    user.bookedTickets.push(ticketNo.toString());
    user.balance = user.balance - ticket.price;
    // Reduce available seats and save the ticket
    ticket.seats = ticket.seats - 1;
    await ticket.save();
    await user.save();

    // Respond with success message
    res.status(200).json({ message: "Ticket booked successfully" });
  } catch (err) {
    // Handle any errors
    console.error(err);
    res.status(500).json(err);
  }
};
