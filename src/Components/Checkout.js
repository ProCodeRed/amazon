import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="check out banner" />

                {basket?.length === 0 ? (
                        <div>
                            <h1>Your Shopping Basket is Empty</h1>
                            <p>You have no items in your basket. To buy one or many go to "Add to basket" next to the item.</p>
                        </div>
                    ):(
                        <div>
                            <h1 className="checkout__title">Your Shopping Basket</h1>
                            {/* List of all of the checkout products */}
                            {basket.map(item => (
                                <CheckoutProduct 
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))}
                        </div>
                    )}      
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}    
        </div>
    )
}

export default Checkout;
