import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Menu1 from "./Components/Menus/Menu1";
import Menu2 from "./Components/Menus/Menu2";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser)
  let location = useLocation();
  let withoutPath = location.pathname==="/"||location.pathname==="/signup"
  return (
    <>
        {!withoutPath&&user&&<Dashboard />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/menu1" element={<Menu1 />} />
        <Route exact path="/menu2" element={<Menu2 />} />
      </Routes>
    </>
  );
}

export default App;
