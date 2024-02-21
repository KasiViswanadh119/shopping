import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import Home from "../images/home.png";
import Cart from "../images/cart.png";
import Wish from "../images/wish.png";
import Category from "../images/categories.png";
import "./Home.css";
const Navbar=()=>{
    return(
        <div className="NavBar">
                    <div className="navimg">
                        <img alt="img" src={Logo}/>
                    </div>
                    <div className="navoptions">
                        <li className="homeimg">
                            <Link className="navtext" to="/"><img alt="Home" src={Home}/>&nbsp;&nbsp;&nbsp;Home</Link>
                        </li>
                        <li>
                            <Link className="navtext" to="/category"><img alt="Home" src={Category}/>&nbsp;&nbsp;&nbsp;Category</Link>
                        </li>
                        <li>
                            <Link className="navtext" to="/cart"><img alt="Home" src={Cart}/>&nbsp;&nbsp;&nbsp;Cart</Link>
                        </li>
                        <li>
                            <Link className="navtext" to="/wishlist"><img alt="Home" src={Wish}/>&nbsp;&nbsp;&nbsp;Wishlist</Link>
                        </li>
                    </div>
                </div>
    )
}

export default Navbar;