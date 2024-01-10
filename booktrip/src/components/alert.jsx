import { React, toast , useSelector } from "_helper";

import "react-toastify/dist/ReactToastify.css";

function Alert() {
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
  const { error } = useSelector((state) => state.error.value);
  if (error) {
    toast.error(error, toastOptions);
    console.log(error);
  } else {
    return null;
  }
}

export default Alert;
