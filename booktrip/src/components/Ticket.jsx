
import '../style/ticket.css'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Tickets(props) {
  const toastOptions = {
    className: "custom-toast",
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const handleSubmit = async ()=>{
try{
  const user = JSON.parse(localStorage.getItem('auth'))
  console.log(user.email)
  const data = {
    email:user.email,
    ticketNo:props.ticketNo
  }
  const res = await axios.post("http://localhost:8800/tickets/bookticket",data)
  console.log(res.data.message)
  toast.success(res.data.message , toastOptions)
}catch (err){
  toast.error(err.response.data.message , toastOptions)
  console.log(err.response.data.message)
}

  }
  return (
   <div className="ticket">
    <div className="tour_items tour_item_1">{props.ticketNo}</div>
    <div className="tour_items tour_item_2">Date:{props.date}</div>
    <div className="tour_items tour_item_3">Time:{props.time}</div>
    <div className="tour_items tour_item_4">Price:{props.price}</div>
    <div className="tour_items tour_item_5">From :{props.from}</div>
    <div className="tour_items tour_item_6">To :{props.to}</div>
    <div className="tour_items tour_item_7">By :{props.by}</div>
    <button className="tour_items tour_item_8" onClick={handleSubmit}>Book Now</button>
   </div>
  )
}

export default Tickets
