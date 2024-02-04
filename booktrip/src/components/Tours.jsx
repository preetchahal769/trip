import React, {useEffect, useState} from "react";
import "../style/tour.css";

import { useDispatch} from "react-redux";
import axios from "axios";
import Tickets from "./Ticket";

function Tours() {
    // const imageUrl = useSelector((state) => state.slide.value);
    const dispatch = useDispatch();

    const [ticketList, setTicketList] = useState([]);



    async function getTickets() {
        try {
            const tickets = await axios.get("http://localhost:8800/tickets/getticktes");
          setTicketList(tickets.data);
            console.log(`tickets`,tickets.data);
            return tickets
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <div className="tour">
            <video src="http://localhost:5173/assets/vedio.webm" alt="Tourist_place" className="slide_image" autoPlay
                   loop/>

            <div className="tickets">
                {ticketList.map((ticket, index) => (
                    <Tickets
                        key={index}
                        ticketNo={ticket.ticketNumber}
                        from={ticket.from}
                        to={ticket.to}
                        price={ticket.price}
                        by={`indian railway`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tours;
