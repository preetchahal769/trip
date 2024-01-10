import React from "react";
import {
  useForm,
  yupResolver,
   Link,
  toast,
  authActions,
  useSelector,
  useDispatch,
  viteLogo,
} from "_helper";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "../style/login.css";
// Function to handle user login
function Login() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.value);
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
  
  const schema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
   
    const input = {
      userName: data.userName,
      password: data.password,
    };
    dispatch(authActions.login(input));
    console.log(data);
  };
 
  return (
    <div className="login">
      <form className="login_box" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="loading_animation"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={viteLogo} alt="" className="logo loading_animation" />
        </div>
        <h3 className="logoText loading_animation">Login to BookTrip</h3>
        <input
          type="text"
          name="userName"
          {...register("userName")}
          // value={input.userName}
          // onChange={handleChange}
          placeholder="username"
          className="login_box_input loading_animation"
          autoComplete="off"
        />
        {errors.userName && errors.userName.message && (
          <div className="error-message">
            {toast.error(errors.userName.message, toastOptions)}
          </div>
        )}
        <input
          type="text"
          name="password"
          // value={input.password}
          // onChange={handleChange}
          {...register("password")}
          placeholder="password"
          className="login_box_input loading_animation"
          autoComplete="off"
        />
        {errors.password && toast.error(errors.password.message, toastOptions)}
        <button
          className="login_box_button loading_animation"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="login_box_bottom loading_animation">
          <button className="login_box_bottom_button">Forgot Password?</button>
          <Link to="/accounts/register" className="login_box_bottom_button">
            New Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
