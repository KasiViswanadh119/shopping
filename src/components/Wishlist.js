import React from "react";
import products from "./products"; // Import the products data

const Wishlist = () => {
    // Retrieve wishlist items from local storage
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    return (
        <div>
            <h2>Wishlist</h2>
            {wishlistItems.length > 0 ? (
                <ul>
                    {wishlistItems.map(productId => {
                        // Find the product in the products data using the product ID
                        const product = Object.values(products).flatMap(category => category).find(product => product.id === productId);
                        if (product) {
                            return (
                                <li key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    {product.name} - ${product.price}
                                    <button>Remove</button>
                                </li>
                            );
                        } else {
                            return null;
                        }
                    })}
                </ul>
            ) : (
                <p>Your wishlist is empty</p>
            )}
        </div>
    );
};

export default Wishlist;
