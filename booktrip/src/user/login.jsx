
import {
  React,
  viteLogo,
  axios,
  useNavigate,
  useState,
  useEffect,
  toast,
  yupResolver,
  useForm,
  Link,
  useDispatch,
  useSelector
} from "_helper";
import{ Loader } from '_components'
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "../style/login.css";
// Function to handle user login
function Login() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.value);
  const [loading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [type, setType] = useState("password");
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
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    handleToggle();

    console.log(isChecked);
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
    <>
     {loading && <Loader />}
    <div className="login">
      <div className="login_box" >
      <div className="login_box_header loading_animation">
          <img src={viteLogo} alt="" className="loign_box_header_img " />
          <h3 className="login_box_header_text ">Login to Book Trip</h3>
        </div>
        <div className="login_box_form loading_animation">
        <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login_input_container">
              <label htmlFor="userName" className="form_input_lable">
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="userName"
                className="form_input_box"
                {...register("name")}
              />

              {errors.name && (
                <div className="error">{errors.name.message}</div>
              )}
            </div>
        <div className="login_input_container">
              <label htmlFor="password" className="form_input_lable">
               Password
              </label>
              <input
                type={type}
                autoComplete="off"
                name="password"
                className="form_input_box"
                {...register("password")}
              />

              {errors.name && (
                <div className="error">{errors.name.message}</div>
              )}
              <label
                htmlFor="myCheckbox"
                className="checkbox-label"
                onClick={handleCheckboxChange}
              >
                <span
                  className={` ${
                    isChecked ? "checkbox-icon-checked" : "checkbox-icon"
                  }`}
                  onClick={handleCheckboxChange}
                ></span>
                {` ${isChecked ? "Hide password" : "Show password"}`}
              </label>
            </div>
            <div className="login_buttons loading_animation">
              <button
                className="login_box_button "
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>

             <div className="login_bottom_box">
             <Link to="/accounts/register" className="login_box_bottom_button">
               Forgot Password ?
              </Link>
              <Link to="/accounts/register" className="login_box_bottom_button">
               New Account
              </Link>
             </div>
            </div>
        </form>
        </div>
       
      </div>
    </div>
    </>
  );
}

export default Login;
