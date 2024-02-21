import React from "react";
import { useState,useEffect } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import productsData from './products';
import search from "../images/search.png";
import explore from "../images/explore.png";
import viewcart from '../images/viewcart.png';
import frame1 from '../images/Frame 7.png';
import frame2 from '../images/Frame 12.png';
import frame3 from '../images/Frame 11.png';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import wishlistIcon from '../images/wishicon.png';
import star from '../images/star.png';
import value1 from '../images/value1.png';
import value2 from '../images/value2.png';
import value3 from '../images/value3.png';
import bene1 from '../images/bene1.png';
import bene2 from '../images/bene2.png';
import bene3 from '../images/bene3.png';
import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import partner4 from '../images/partner4.png';
import partner5 from '../images/partner5.png';
import Logo from "../images/logo1.png";
import Linked from '../images/Linkedin.png';
import Insta from '../images/instagram.png';
import Twitter from '../images/Twitter.png';
import Fb from '../images/Fb.png';
const Home=()=>{
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % 3);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);
    // Filter products based on search term
    const addToWishlist = (productId) => {
        // Implement your addToWishlist logic here
        console.log(`Added product with ID ${productId} to wishlist`);
    };


    return(
        <div className="Home">
            <div className="Intro">
                <div className="IntroSearch">
                    <p className="explore">Explore Our World of Exceptional Products and Unbeatable Deals</p>&nbsp;
                    <p className="tech">From Tech Gadgets to Fashion Staples, Find Everything You Need in One Place</p>&nbsp;
                    <div className="search-container">
                    <input
                    className="search"
                        type="text"
                        placeholder="Search for Products"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <img src={search} alt="search" className="search-icon" />
                    </div>&nbsp;
                    <div className="Introbuttons">
                        <button className="explorebutton"><img src={explore} alt="explore" style={{ marginRight: '10px'}}/>Explore More!</button>
                        <button className="viewcartbutton"><img src={viewcart} alt="explore" style={{ marginRight: '10px'}}/>View Cart</button>
                    </div>
                </div>
                <div className="frames">
                   <img src={frame1} alt="frame"/>
                   <img src={frame2} alt="frame"/>&nbsp;&nbsp;&nbsp;&nbsp;
                   <img src={frame3} alt="frame"/>
                </div>
            </div>
            <div className="Slides">
            <img src={banner1} alt="banner" className={currentSlide === 0 ? 'slide active' : 'slide'} />
            <img src={banner2} alt="banner" className={currentSlide === 1 ? 'slide active' : 'slide'} />
            <img src={banner3} alt="banner" className={currentSlide === 2 ? 'slide active' : 'slide'} />
        </div>
        <div className="products">&nbsp;
            <p className="lproducts">Latest Products</p>
            {Object.entries(productsData).map(([category, items]) => (
          <div className="category" key={category}>
            <h2>{category}</h2>&nbsp;
            <div className="category-items">
              {items.map((product) => (
                <div className="product" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <img
                    src={wishlistIcon}
                    alt="wishlist"
                    className="wishlist-icon"
                    onClick={() => addToWishlist(product.id)}
                  />
                  <div className="product-details">
                    <div className="product-row">
                    <span className="product-name">{product.name}</span>
                    <span className="product-rating">
                    {product.rating}<img src={star} alt="star"/>
                    </span>
                    </div>
                    <div><span className="product-col">
                     ₹&nbsp;{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
            </div>
            <div className="values">
              <p className="values-text1">Our Mission and Values</p>
              <p className="values-text2">Empowering Your Shopping Experience</p>
              <div className="values-div">
                <div className="values-frame1">
                  <img src={value1} alt="frame"/>
                  <div className="values-tframe1">
                  <p className="values-text3">Elevate Your Everyday</p>
                  <p className="values-text4">Every Product Brings Joy and Functionality to Your Life</p>
                  </div>
                </div>
                <div className="values-frame2">
                  <img src={value2} alt="frame"/>
                  <p className="values-text5">Quality Meets Affordability</p>
                  <p className="values-text4">Enjoy Premium Products at Unbeatable Prices</p>
                </div>
                <div className="values-frame3">
                  <img src={value3} alt="frame"/>
                  <p className="values-text3">Reward Yourself</p>
                  <p className="values-text6">Every Purchase is a Step Towards a Better, More Fulfilling Lifestyle</p>
                </div>
              </div>
            </div>
            <div className="benefits">&nbsp;
            <p className="benefits-text1">Benefits</p>&nbsp;
            <div className="benefits-div">
                <div className="benefits-frame1">
                  <img src={bene1} alt="frame"/>
                  <div className="benefits-frame1">
                  <p className="benefits-text2">Fast Delivery</p>
                  <p className="benefits-text3">Every Product Brings Joy and Functionality to Your Life</p>
                  </div>
                </div>
                <div className="benefits-frame2">
                  <img src={bene2} alt="frame"/>
                  <p className="benefits-text2">Easy Returns</p>
                  <p className="benefits-text3">Every Product Brings Joy and Functionality to Your Life</p>
                </div>
                <div className="benefits-frame3">
                  <img src={bene3} alt="frame"/>
                  <p className="benefits-text2">Gift Vouchers</p>
                  <p className="benefits-text3">Every Product Brings Joy and Functionality to Your Life</p>
                </div>
              </div>
            </div>
            <div className="partners">
              <p className="partner-text">Our Partners</p>
              <div className="partner-div">
                <img src={partner1} alt="img" />
                <img src={partner2} alt="img"/>
                <img src={partner3} alt="img"/>
                <img src={partner4} alt="img"/>
                <img src={partner5} alt="img"/>
              </div>
            </div>
            <div className="footer">
              <div className="footer-content">
                <div className="footer-left">
                  <div className="fl1">
                    <img src={Logo} alt="logo"/>
                  </div>
                  <div className="fl2">
                    <img src={Linked} alt="linkedin"/>
                    <img src={Fb} alt="Facebook"/>
                    <img src={Twitter} alt="Twitter"/>
                    <img src={Insta} alt="Ig"/>
                  </div>
                </div>
                <div className="footer-right">
                  <div className="fr1">
                            <Link className="navtextf" to="/">Home</Link>                       
                            <Link className="navtextf" to="/category">Category</Link>                        
                            <Link className="navtextf" to="/cart">Cart</Link>                        
                            <Link className="navtextf" to="/wishlist">Wishlist</Link>
                  </div>
                  <div className="fr2">
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </div>
              <p className="rights">All rights to receive ©2024</p>
            </div>
        </div>
    )
}

export default Home;