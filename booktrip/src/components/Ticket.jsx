import React from 'react'
import '../style/ticket.css'
function Tickets(props) {
  return (
   <div className="ticket">
    <div className="tour_items item_1">{props.companyName}</div>
    <div className="tour_items tour_item_2">Price:{props.price}</div>
    <div className="tour_items tour_item_3">From :{props.from}</div>
    <div className="tour_items tour_item_4">To :{props.to}</div>
    <div className="tour_items tour_item_5">By :{props.by}</div>
    <button className="tour_items tour_item_6">Book Now</button>
   </div>
  )
}

export default Tickets
