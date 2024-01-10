import React, { useEffect, useState } from "react";
import "../style/tour.css";
// import {Ticket} from "./"
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/slideHandler";
import Tickets from "./Ticket";
function Tours() {
  const imageUrl = useSelector((state) => state.slide.value);
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Code to be executed at each interval
      dispatch(increment());
    }, 4000); // Interval set to 1000 milliseconds (1 second)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tour">
      <img src={imageUrl} alt="Tourist_place" className="slide_image" />
      <h3 className="slide_title">Explore The India</h3>
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
