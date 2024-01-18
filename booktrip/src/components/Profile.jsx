import React from 'react'
import '../style/profile.css'
function Profile() {
  const userDetails =JSON.parse( localStorage.getItem("auth"));
  console.log(userDetails);
  return (
   <div className="profile">
    <div className="items profile_item_1">
      <h4 className="item__title">
        Name
      </h4>
      <p className="item__value">{userDetails.name}</p>
    </div>
    <div className="items profile_item_2">
      <h4 className="item__title">
        User Name
      </h4>
      <p className="item__value">{userDetails.username}</p>
    </div>
    <div className="items profile_item_3">
      <h4 className="item__title">
        Address
      </h4>
      <p className="item__value">{userDetails.address}</p>
    </div>
    <div className="items profile_item_4">
      <h4 className="item__title">
       mobile no 
      </h4>
      <p className="item__value">{userDetails.phoneNo}</p>
    </div>
    <div className="items profile_item_5">
      <h4 className="item__title">
        email
      </h4>
      <p className="item__value">{userDetails.email}</p>
    </div>
    
   
   </div>
  )
}

export default Profile
