import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Headertop extends Component{

    render(){
        return(
            <div className="top-bar navbar-nav">
                <div className="top-menu top-menu-2">
                    <ul className="j-menu">
                        <li className="menu-item top-menu-item top-menu-item-1">
                            <NavLink to="/"><span className="links-text">Home</span></NavLink>
                        </li>

                        <li className="menu-item top-menu-item top-menu-item-2">
                            <NavLink to="/about"><span>About Us</span></NavLink>
                        </li>

                        <li className="menu-item top-menu-item top-menu-item-3">
                            <NavLink to="/contact"><span className="links-text">Contact</span></NavLink>
                        </li>

                        <li className="menu-item top-menu-item top-menu-item-4 dropdown drop-menu">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <span className="links-text">FAQ</span>
                            </a>
                                <div className="dropdown-menu j-dropdown">
                                    <ul className="j-menu">
                                        <li className="menu-item top-menu-item-5">
                                            <a href="#"><span className="links-text">Create</span><span className="count-badge compare-badge count-zero">0</span></a>
                                        </li>
                                        <li className="menu-item top-menu-item-6">
                                            <a><span className="links-text">Unlimited</span></a>
                                        </li>
                                        <li className="menu-item top-menu-item-7">
                                            <a><span className="links-text">Menus</span></a>
                                        </li>
                                    </ul>
                                </div>
                        </li>
                    </ul>
                </div>

                <div className="language-currency top-menu">
                    <div className="desktop-language-wrapper">

                    </div>
                    <div className="desktop-currency-wrapper">
                        <div id="currency" className="currency">
                            <form action="#" method="post" encType="multipart/form-data" id="form-currency">
                                <div className="dropdown drop-menu">
                                    <button type="button" className="dropdown-toggle" data-toggle="" aria-expanded="false">
                                        <span className="currency-symbol-title">
                                            <span className="symbol">$</span>
                                            <span className="currency-title">US Dollar</span>
                                            <span className="currency-code">USD</span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu j-dropdown">
                                        <ul className="j-menu">
                                            <li>
                                                <a className="currency-select" data-name="EUR">
                                                    <span className="currency-symbol">€</span>
                                                    <span className="currency-title-dropdown">Euro</span>
                                                    <span className="currency-code-dropdown">EUR</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="currency-select" data-name="GBP">
                                                    <span className="currency-symbol">£</span>
                                                    <span className="currency-title-dropdown">Pound Sterling</span>
                                                    <span className="currency-code-dropdown">GBP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="currency-select" data-name="USD">
                                                    <span className="currency-symbol">$</span>
                                                    <span className="currency-title-dropdown">US Dollar</span>
                                                    <span className="currency-code-dropdown">USD</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <input type="hidden" name="code" value=""/>
                                    <input type="hidden" name="redirect" value=""/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="third-menu">
                    <div className="top-menu top-menu-14">
                        <ul className="j-menu">
                            <li className="menu-item top-menu-item top-menu-item-1 dropdown drop-menu">
                                <a href="#" className="dropdown-toggle"
                                   data-toggle="" aria-expanded="false"><span
                                    className="links-text">More Menus</span></a>
                                <div className="dropdown-menu j-dropdown">
                                    <ul className="j-menu">
                                        <li className="menu-item top-menu-item-2">
                                            <a><span className="links-text">The Best Menu</span></a>
                                        </li>

                                        <li className="menu-item top-menu-item-3">
                                            <a><span className="links-text">Options You Will</span></a>
                                        </li>

                                        <li className="menu-item top-menu-item-4">
                                            <a><span className="links-text">Ever Find</span></a>
                                        </li>

                                        <li className="menu-item top-menu-item-5">
                                            <a><span className="links-text">In a Theme</span></a>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li className="menu-item top-menu-item top-menu-item-6">
                                <NavLink to="/delivery"><span className="links-text">Delivery</span></NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}