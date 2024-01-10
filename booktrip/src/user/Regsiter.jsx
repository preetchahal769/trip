import {
  React,
  viteLogo,
  axios,
  useNavigate,
  toast,
  yupResolver,
  useForm,
  Link,
  useDispatch,
} from "_helper";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "../style/regsiter.css";
function Regsiter() {
  const navigate = useNavigate(); // Hook to handle navigation
  const dispatch = useDispatch();
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
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("name is required"),
    userName: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    address: Yup.string().required("address is required"),
    phoneNo: Yup.string()
      .min(10, "Phone number must be at least 10 characters")
      .max(10, "Phone number must be at most 10 characters")
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only numbers"),
    email: Yup.string()
      .email("Invalid email address")
      .required("email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Enter Password Again"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (input.password !== input.confirmPassword) {
        toast.error("Password don't match", toastOptions);
      } else {
        await axios.post(`${API}/auth/signup`, input);
        toast.success("Account created successfully", toastOptions);
        navigate("/login");
      }
    } catch (error) {
      if (!error.response.data.message) {
        toast.error(error.message, toastOptions);
      } else {
        toast.error(error.response.data.message, toastOptions);
      }
    }
  };

  return (
    <div className="register">
      <div className="register_box">
        <div className="register_box_header loading_animation">
          <img src={viteLogo} alt="" className="register_box_header_img " />
          <h3 className="register_box_header_text ">Sign up to Book Trip</h3>
        </div>
        <div className="register_box_form loading_animation">
          <from className="register_form">
            <div className="register_input_container">
              <label htmlFor="name" className="form_input_lable">
                name
              </label>
              <input type="text" autocomplete="off" className="form_input_box" />
              <div className="error">name required</div>
            </div>
            <div className="register_input_container">
              <label htmlFor="userName" className="form_input_lable">
                Username
              </label>
              <input type="text" autocomplete="off" className="form_input_box" />
              <div className="error">username required</div>
            </div>
            <div className="register_input_container">
              <label htmlFor="Adress" className="form_input_lable">
                City
              </label>
              <input type="text" autocomplete="off" className="form_input_box input" />
              <div className="error">City required</div>
            </div>
            <div className="register_input_container">
              <label htmlFor="phoneNo" className="form_input_lable">
                Phone NO
              </label>
              <input type="text" autocomplete="off" className="form_input_box" />
              <div className="error">Phone NO required</div>
            </div>
            <div className="register_input_container">
              <label htmlFor="email" className="form_input_lable">
                Email
              </label>
              <input type="text" autocomplete="off" className="form_input_box" />
              <div className="error">name required</div>
            </div>
            <div className="register_input_container">
              <label htmlFor="password" className="form_input_lable">
                Password
              </label>
              <input type="text" autocomplete="off" className="form_input_box" />
              <div className="error">Password required</div>
            </div>
            <div className="register_input_container">
              <label htmlFor="confirmPassword" className="form_input_lable">
                Confirm Password
              </label>
              <input type="text" autocomplete="off" className="form_input_box" />
              <div className="error">password required</div>
            </div>
            <div className="register_buttons loading_animation">
              <button className="register_box_button " type="submit" onClick={handleSubmit}>
                Login
              </button>

              
              <Link to="/accounts/register" className="register_box_bottom_button">
                Already have and account ?
              </Link>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
}

export default Regsiter;
