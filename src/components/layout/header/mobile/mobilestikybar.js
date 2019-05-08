import React, {Component} from 'react';
import logo1 from '../../../../assets/image/logo/journal-logo1x-185x32.png';

export default class Mobilestikybar extends Component{
    render() {
        return(
            <div className="mobile-bar sticky-bar ">
                <div className="mobile-logo-wrapper">

                </div>
                <div className="mobile-bar-group">
                    <div className="menu-trigger"/>
                    <div className="mobile-search-wrapper mini-search">

                    </div>
                    <div className="mobile-cart-wrapper mini-cart">

                    </div>
                </div>
            </div>
        );
    }
}