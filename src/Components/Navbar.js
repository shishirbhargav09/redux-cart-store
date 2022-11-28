import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {HiOutlineShoppingCart} from 'react-icons/hi'
function Navbar() {
  const items = useSelector((state) => state.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            <h3>{<HiOutlineShoppingCart/>}Redux Store</h3>
          </Link>

          <div
            
          >
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <h3>
                <span className="badge bg-secondary">Cart Items : {items.length}</span>
              </h3>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
