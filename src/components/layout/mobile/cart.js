import React, {Component} from 'react';

export default class Mobilecart extends Component{
    render() {
        return(
            <div className="mobile-container mobile-cart-content-container">
                <div className="mobile-wrapper-header">
                    <span>Your Cart</span>
                    <a className="x"/>
                </div>
                <div className="mobile-cart-content-wrapper cart-content">
                    <ul>
                        <li>
                            <p className="text-center cart-empty">Your shopping cart is empty!</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}