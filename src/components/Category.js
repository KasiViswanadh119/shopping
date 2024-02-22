import React from "react";
import productsData from './products';
import wishlistIcon from '../images/wishicon.png';
import star from '../images/star.png';

const Category = () => {
    const addToWishlist = (product) => {
        // Get existing wishlist from local storage
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        // Add the new product to the wishlist
        existingWishlist.push(product);
        
        // Update the local storage with the new wishlist
        localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
    };
    
    return (
        <div className="products">
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
                                    <div>
                                        <span className="product-col">₹&nbsp;{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Category;
