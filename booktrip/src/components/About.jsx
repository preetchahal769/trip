import React from "react";
import "../style/about.css";
function About() {
  return (
    <div className="about">
      <h2 className="about_title">About us</h2>
      <p className="about_text">Embark on a Seamless Journey: Discover India with Our Ticket Booking App</p>
      <p className="about_para">
        "Welcome to our Indian Trip Ticket Booking App, your gateway to seamless
        travel experiences across the diverse and culturally rich landscapes of
        India. Our app is designed with the spirit of adventure and convenience,
        offering you a hassle-free ticket booking platform for exploring the
        incredible destinations that India has to offer. Whether you're planning
        a scenic train journey through the picturesque hills of Himachal
        Pradesh, an adventure-packed road trip through Rajasthan's deserts, or a
        spiritual pilgrimage to the holy sites of Varanasi, our app is your
        one-stop solution. With user-friendly features, real-time updates, and a
        wide range of travel options, we strive to make your journey as
        enchanting as the destinations themselves. Embark on a journey of
        discovery with the Indian Trip Ticket Booking App and let the wonders of
        India unfold at your fingertips."
      </p>
      <div className="contact_details">
       
           
          <a href="mailto:cyberrayon@gmail.com" target="blank" className="contact_link">mail</a> 
          <a href="https://github.com/Cyberrayon04846" target="blank" className="contact_link">GitHub</a> 
          <a href="https://www.linkedin.com/in/preet-chahal-25620a221/" target="blank" className="contact_link">linkedIn</a> 
           <span className="contact_phone"> Phone: +91 7015683537</span>
        
      </div>
    </div>
  );
}

export default About;
