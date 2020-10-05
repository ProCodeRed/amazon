import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket =() => {
        // removing item form basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <stong>{price}</stong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => <p><StarIcon></StarIcon></p>)
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
