import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Row3 extends Component{
    render() {
        return(
            <div className="grid-row grid-row-3">
                <div className="grid-cols">
                    <div className="grid-col grid-col-1">
                        <div className="grid-items">
                            <div className="grid-item grid-item-1">
                                <div className="links-menu links-menu-72">
                                    <h3 className="title module-title closed">About Us</h3>
                                    <ul className="module-body">
                                        <li className="menu-item links-menu-item links-menu-item-1">
                                            <NavLink to="/about"><span className="links-text">About Us</span></NavLink>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-2">
                                            <NavLink to="/delivery"><span className="links-text">Delivery</span></NavLink>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-3">
                                            <NavLink to="/privacypolicy"><span className="links-text">Privacy Policy</span></NavLink>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-4">
                                            <a><span className="links-text">Terms &amp; Conditions</span></a>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-5">
                                            <a><span className="links-text">Custom Links</span></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid-col grid-col-2">
                        <div className="grid-items">
                            <div className="grid-item grid-item-1">
                                <div className="links-menu links-menu-75">
                                    <h3 className="title module-title closed">Customer Service</h3>
                                    <ul className="module-body">
                                        <li className="menu-item links-menu-item links-menu-item-1">
                                            <NavLink to="/contact"><span className="links-text">Contact</span></NavLink>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-2">
                                            <NavLink to="/productreturn"><span className="links-text">Returns</span></NavLink>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-3">
                                            <a><span className="links-text">Site Map</span></a>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-4">
                                            <a><span className="links-text">Brands</span></a>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-5">
                                            <a><span className="links-text">Unlimited Links</span></a>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid-col grid-col-3">
                        <div className="grid-items">
                            <div className="grid-item grid-item-1">
                                <div className="links-menu links-menu-76">
                                    <h3 className="title module-title closed">My Account</h3>
                                    <ul className="module-body">
                                        <li className="menu-item links-menu-item links-menu-item-1">
                                            <NavLink to="/loginakun"><span className="links-text">My Account</span></NavLink>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-2">
                                            <a><span className="links-text">Order History</span></a>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-3">
                                            <a><span className="links-text">Affiliates</span></a>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-4">
                                            <a><span className="links-text">Newsletter</span></a>
                                        </li>

                                        <li className="menu-item links-menu-item links-menu-item-5">
                                            <a><span className="links-text">Gift Certificates</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-col grid-col-4">
                        <div className="grid-items">
                            <div className="grid-item grid-item-1">
                                <div className="module module-newsletter module-newsletter-67">
                                    <h3 className="title module-title">Newsletter</h3>
                                    <div className="module-body">
                                        <div className="newsletter-text">Stay up to date with news and promotions by signing up for our newsletter</div>
                                        <div className="newsletter-form">
                                            <form
                                                action="https://www.journal-theme.com/1/index.php?route=journal3/newsletter/newsletter&amp;module_id=67">
                                                <div className="input-group">
                                                    <input type="text" name="email" placeholder="Your email" className="form-control newsletter-email"/>
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-primary" data-loading-text="<span>Send</span>"><span>Send</span></button>
                                                    </span>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="agree" value="1"/>
                                                        I have read and agree to the <NavLink to="/privacypolicy" className="agree"><b>Privacy Policy</b></NavLink>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}