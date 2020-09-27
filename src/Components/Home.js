import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser1/GW/2_Desktop-Hero1x_1500x600._CB404635813_.jpg" 
            alt="home banner"
            className="home__image" />
            {/* products id, titles, price, rating, image */}
            <div className="home__row">
                <Product
                    id= "12344321"
                    title = "Amazon Brand - Solimo Delphi Single Seater Leatherette Recliner (Brown)"
                    price = {16.999}
                    rating = {4}
                    image = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/PC/Recliners_MSO_379x304._SY304_CB447481574_.jpg"
                />
                <Product
                    id= "12344351"
                    title = "Lenovo Tab M10 HD (2GB, 32GB, WiFi) Slate Black"
                    price = {10.999}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71BfmE16KqL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id= "1234432198"
                    title = "AASA Sun Protection Fedora Hat for Women and Men Bow Knot Hat Cap for Summer Beach Outdoor Fashion Accessory for Unisex 30Grams Pack of 1"
                    price = {999}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61MfD%2BBbg3L._UL1500_.jpg"
                />
                <Product
                    id= "1234432145"
                    title = "Mobvoi TicWatch Pro 2020 Smartwatch Dual Display with Long Battery Life 1GB RAM Memory Waterproof NFC Payments Available Smart Sleep Tracking 24h Heart Rate Monitor (Black)"
                    price = {23.249}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61NENjBu7LL._SL1000_.jpg"
                />
                <Product
                    id= "1234432165"
                    title = "Sony HT-S20R 5.1 Channel Dolby Digital Soundbar Home Theatre System with Bluetooth Connectivity - Black"
                    price = {17.999}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71%2Bs6K1eovL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                        id= "123443219"
                        title = "LG Ultragear 27 240Hz, 1ms, G-Sync Compatible, HDR 10, IPS Display Gaming Monitor, Height Adjust, Pivot Stand, Display Port, HDMI Port - 27GN750"
                        price = {30.999}
                        rating = {4}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71R0--YGwvL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;