import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Login, Register, Accounts } from "_user";
import {
  Header,
  PrivateRoutes,
  Profile,
  Balance,
  Filter,
  Tours,
  About,
} from "_components";
import { history } from "_helper";
import "./App.css";

function App() {
  history.navigate = useNavigate();
  history.history = useLocation();

  return (
    <div>
      <Header />
      <div>
        <Routes>
          {/* {private} */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<Profile />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/aboutus" element={<About />} />
          </Route>

          <Route path="accounts/*" element={<Accounts />}>
            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
