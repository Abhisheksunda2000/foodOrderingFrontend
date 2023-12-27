import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CartProvider } from "./components/ContextReducer";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/createuser" element={<Signup />} />
              <Route exact path="/myOrders" element={<MyOrders />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
