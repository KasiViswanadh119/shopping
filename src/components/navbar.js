import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./Home.css";
const Navbar=()=>{
    return(
        <div className="NavBar">
                    <div className="navimg">
                        <img alt="img" src={Logo}/>
                    </div>
                    <div className="navoptions">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/wishlist">Wishlist</Link>
                        </li>
                    </div>
                </div>
    )
}

export default Navbar;