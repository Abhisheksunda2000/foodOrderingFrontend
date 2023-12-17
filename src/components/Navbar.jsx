import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Cart from '../pages/Cart';
import Modal from '../Modal';
import { useCart } from "./ContextReducer";

export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
     localStorage.removeItem("authToken");
     navigate("/Login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            SWIZOO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/Login">
                Login
              </Link>

              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
              ) : (
                <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="" onClick={() => {setCartView(true)}}>
                My Cart{" "}
                <Badge pill bg="danger"> {data.length} </Badge>
              </Link>
               {cartView ? <Modal onClose = {()=>{setCartView(false)}}><Cart /></Modal> : null}
              <Link className="btn bg-danger text-white mx-1" onClick={handleLogout} to="/Login">
                Logout
              </Link>
            </div>
              )}

            </div>
            

            
          </div>
        </div>
      </nav>
    </>
  );
}
