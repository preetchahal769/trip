import React, { useState } from "react";
import "../style/balance.css";

import { useSelector, useDispatch } from "react-redux";
import { balanceActions } from "../redux/balance.slice";

/**
 * Component that displays the balance and allows adding funds.
 */
function Balance() {
  const dispatch = useDispatch();
  const balanceAmount = useSelector((state) => state.balance.value);
  const [input, setInputs] = useState({
    amount: "",
  });

  /**
   * Handles the change event of the input field.
   * Updates the input state with the new value.
   
   */
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  /**
   * Handles the submit event of the form.
   * Dispatches an action to increment the balance with the entered amount.
   
   */
  const handleSubmit =  (e) => {
    e.preventDefault(); // to prevent default load
    dispatch(balanceActions.add(input.amount));
    // console.log ('dispatch',dispatch(increment(input.amount)))
    // console.log(input.amount);
  };
  const auth = JSON.parse(localStorage.getItem("auth"))
  if(auth && balanceAmount === 0) {
    
    console.log("balance at balance.jsx", auth.balance)
    dispatch(balanceActions.updateBalance(auth.balance));
  }

 

  return (
    <div className="balance">
      <h1 className="bank_balance">Your Balance</h1>
      <h1 className="balance_amount">{balanceAmount}</h1>
      <input
        name="amount"
        type="number"
        className="add_value"
        placeholder=" only 2000 once a time"
        onChange={handleChange}
      />
      <button className="add_amount" onClick={handleSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="add_amount"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Balance;
