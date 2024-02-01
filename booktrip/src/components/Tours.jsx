import React, { useEffect, useState } from "react";
import "../style/tour.css";
// import {Ticket} from "./"
import { useSelector, useDispatch } from "react-redux";

import Tickets from "./Ticket";
function Tours() {
  // const imageUrl = useSelector((state) => state.slide.value);
  const dispatch = useDispatch();

  const ticketList = [
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
    {
      companyName: "volvo",
      ticketPrice: "2000",
      from: "delhi",
      to: "mumbai",
      by: "Train",
    },
  ];
  

  return (
    <div className="tour">
      <video src="http://localhost:5173/assets/vedio.webm" alt="Tourist_place" className="slide_image" autoPlay loop   />
      
      <div className="tickets">
        {ticketList.map((ticket, index) => (
          <Tickets
            key={index}
            companyName={ticket.companyName}
            from={ticket.from}
            to={ticket.to}
            price={ticket.ticketPrice}
            by={ticket.by}
          />
        ))}
      </div>
    </div>
  );
}

export default Tours;
