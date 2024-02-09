
import '../style/ticket.css'
function Tickets(props) {
  return (
   <div className="ticket">
    <div className="tour_items tour_item_1">{props.ticketNo}</div>
    <div className="tour_items tour_item_2">Date:{props.date}</div>
    <div className="tour_items tour_item_3">Time:{props.time}</div>
    <div className="tour_items tour_item_4">Price:{props.price}</div>
    <div className="tour_items tour_item_5">From :{props.from}</div>
    <div className="tour_items tour_item_6">To :{props.to}</div>
    <div className="tour_items tour_item_7">By :{props.by}</div>
    <button className="tour_items tour_item_8">Book Now</button>
   </div>
  )
}

export default Tickets
