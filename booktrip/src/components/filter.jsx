import React from 'react'
import "../style/filter.css"
function Filter() {
  
  return (
   <div className="filter">
    <div className="filter_input">
      <h1 className="filter_input_title">From</h1>
      <input type="text" className="filter_input_box" />
      <h1 className="filter_input_title">To</h1>
      <input type="text" className="filter_input_box" />
    </div>
    <div className="filter_buttons">
      <button className="filter_button">Remove filter</button>
      <button className="filter_button">Apply filter</button>
    </div>
   </div>
  )
}

export default Filter
