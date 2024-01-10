import React , {useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css";
import { sessionOut } from "../redux/sessionHandler";
import { Header , Balance , Filter , Profile , Menu , About , Tours} from '_components';
// import Header from "../components/Header";
// import Balance from "../components/Balance";
// import Filter from "../components/filter";
// import Profile from "../components/Profile";
// import Menu from "../components/Menu";
// import About from "../components/About";
// import Tours from "../components/Tours";

function Home() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.shifter.value);
  const session = useSelector((state) => state.session.value);
  const navigate = useNavigate();// Hook to handle navigation
  
  let content;
  useEffect(() => {
    const checkSession = () => {
      // Check the value of session here
      dispatch(sessionOut());
      setTimeout(checkSession, 1000);
    };

    // Call the checkSession function initially
    checkSession();
  }, []);
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
  if (page === "Profile") {
    content = <Profile />;
  } else if (page === "Balance") {
    content = <Balance />;
  } else if (page === "Filter") {
    content = <Filter />;
  } else if (page === "Tours") {
    content = <Tours />;
  } else if (page === "Menu") {
    content = <Menu />;
  } else if (page === "About") {
    content = <About />;
  } else {
    content = `<div>Some Error Occurnder in rendring code</div>`;
  }
  if (session==="Logged in") {
    return (
      <>
        <Header />
        {content}
      </>
    );
  } else if (session==="Session Expired") {
    navigate("/login");
    console.log('session expired toast');
    toast.info("Session Expired", toastOptions);
  } else if (session==="Logged out") {
    navigate("/login");
    toast.info("logged out", toastOptions);
  } else {
    navigate("/login");
    toast.error("Please Login", toastOptions);
    // console.log('session',session);
  }
  
  
}

export default Home;
