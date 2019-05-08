import React, {Component} from 'react';
import logo1 from '../../../../assets/image/logo/journal-logo1x-185x32.png';
// import logo2 from '../../../../assets/image/cache/catalog/journal3/logo/journal-logo-600x315h.png';
import {NavLink} from "react-router-dom";
import Modal from 'react-responsive-modal';



export default class Headermid extends Component{
    state = {
        openlogin: false,
        openregister: false,
    };

    loginOpenModal = () => {
        this.setState({ openlogin: true });
    };

    loginCloseModal = () => {
        this.setState({ openlogin: false });
    };

    registerOpenModal = () => {
        this.setState({ openregister: true });
    };

    registerCloseModal = () => {
        this.setState({ openregister: false });
    };
    render(){
        const { openlogin } = this.state;
        const { openregister } = this.state;
        return(
            <div className="mid-bar navbar-nav">
                <div className="desktop-logo-wrapper">
                    <div id="logo">
                        <NavLink to="/">
                            <img src={logo1} width="185" height="32" alt="Journal 3" title="Journal 3"/>
                        </NavLink>
                    </div>
                </div>
                <div className="desktop-search-wrapper full-search default-search-wrapper">
                    <div id="search" className="dropdown">
                        <button className="dropdown-toggle search-trigger" data-toggle=""
                                aria-expanded="false"/>
                        <div className="dropdown-menu j-dropdown">
                            <div className="header-search">
                                <div className="search-categories dropdown drop-menu">
                                    <div className="search-categories-button dropdown-toggle"
                                         data-toggle="dropdown">All
                                    </div>

                                    <div className="dropdown-menu j-dropdown">
                                        <ul className="j-menu">
                                            <li data-category_id="0" className="category-level-1"><a>All</a></li>
                                            <li data-category_id="59" className=" category-level-1"><a>Fashion</a></li>

                                            <li data-category_id="107" className=" category-level-1"><a>Bags</a></li>

                                            <li data-category_id="109" className=" category-level-1">
                                                <a>Health &amp; Beauty</a></li>

                                            <li data-category_id="111" className=" category-level-1"><a>Footwear</a>
                                            </li>

                                            <li data-category_id="175" className=" category-level-1"><a>Home Decor</a>
                                            </li>

                                            <li data-category_id="69" className=" category-level-1"><a>Electronics</a>
                                            </li>

                                            <li data-category_id="205" className=" category-level-1"><a>Appliances</a>
                                            </li>

                                            <li data-category_id="166" className=" category-level-1">
                                                <a>Baby &amp; Kids</a></li>

                                            <li data-category_id="196" className=" category-level-1"><a>Flowers</a></li>

                                            <li data-category_id="155" className=" category-level-1"><a>Food</a></li>

                                            <li data-category_id="221" className=" category-level-1"><a>Sports</a></li>


                                        </ul>
                                    </div>
                                </div>
                                <span className="twitter-typeahead"
                                      style={{position: 'relative', display: 'inline-block', backgroundColor: 'white'}}>
                                    <input type="text"
                                           defaultValue=""
                                        className="search-input tt-hint"
                                        data-category_id="0"
                                           // onChange=""
                                        readOnly=""
                                        placeholder="search"
                                        autoComplete="off"
                                        spellCheck="false"
                                        tabIndex="-1" dir="ltr"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            borderColor: 'transparent',
                                            boxShadow: 'none',
                                            opacity: 1,
                                            background: 'none 0% 0%'
                                        }}
                                    /><input
                                    type="text" name="search"  placeholder="Search here..."
                                    className="search-input tt-input" data-category_id="0" autoComplete="off"
                                    spellCheck="false" dir="auto"
                                    style={{
                                        position: 'relative',
                                        textAlignVertical: 'top',
                                        backgroundColor: 'transparent',
                                        height:37,
                                        width:410
                                    }}/><pre
                                    aria-hidden="true"
                                    style={{
                                        position: 'absolute',
                                        visibility: 'hidden',
                                        whiteSpace: 'pre',
                                        fontFamily: 'Roboto',
                                        fontSize: 14,
                                        fontStyle: 'normal',
                                        fontVariant: 'normal',
                                        fontWeight: 400,
                                        wordSpacing: 0,
                                        letterSpacing: 0,
                                        textIndent: 0,
                                        textRendering: 'auto',
                                        textTransform: 'none'
                                    }}/><div
                                    className="tt-menu .tt-empty"
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        zIndex: 100,
                                        display: 'none'
                                    }}/>
                                    <div className="tt-dataset tt-dataset-0"/></span>
                                <button type="button" className="search-button" data-search-url=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="classic-cart-wrapper">
                    <div className="top-menu secondary-menu">
                        <div className="top-menu top-menu-240">
                            <ul className="j-menu">
                                <li className="menu-item top-menu-item top-menu-item-1">
                                   <a type="Button" onClick={this.loginOpenModal}><span className="links-text">Login</span></a>
                                </li>
                                <Modal open={openlogin} onClose={this.loginCloseModal} center>
                                    <h2 className="title">Returning Customer</h2>

                                    <form
                                        id="loginmodal" action="https://www.journal-theme.com/1/index.php?route=account/login"
                                        method="post" encType="multipart/form-data"
                                        className="form-horizontal login-form" style={{width: 500}}>
                                        <div className="form-group">
                                            <label className="control-label" htmlFor="input-email">E-Mail
                                                Address</label>
                                            <input type="text" name="email" defaultValue=""
                                                   placeholder="E-Mail Address" id="input-email"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label"
                                                   htmlFor="input-password">Password</label>
                                            <input type="password" name="password" defaultValue=""
                                                   placeholder="Password" id="input-password"
                                                   className="form-control"/>
                                                <div><NavLink to="/forgotpassword" onClick={this.loginCloseModal}>Forgotten Password</NavLink></div>
                                        </div>
                                        <div className="buttons">
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-primary"
                                                        data-loading-text="<span>Login</span>">
                                                    <span>Login</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal>
                                <li className="menu-item top-menu-item top-menu-item-2">
                                    <a type="Button" onClick={this.registerOpenModal}><span
                                        className="links-text">Register</span></a>
                                </li>
                                <Modal open={openregister} onClose={this.registerCloseModal} center>
                                    <form action="https://www.journal-theme.com/1/index.php?route=account/register"
                                          method="post" encType="multipart/form-data"
                                          className="register-form form-horizontal" style={{width: 500}}>
                                        <fieldset id="account">
                                            <legend>Your Personal Details</legend>
                                            <div className="form-group required account-customer-group"
                                                 style={{display:  'none'}}>
                                                <label className="col-sm-2 control-label">Customer Group</label>
                                                <div className="col-sm-10"/>
                                            </div>
                                            <div className="form-group required account-firstname">
                                                <label className="col-sm-2 control-label" htmlFor="input-firstname">First
                                                    Name</label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="firstname" defaultValue=""
                                                           placeholder="First Name" id="input-firstname"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group required account-lastname">
                                                <label className="col-sm-2 control-label" htmlFor="input-lastname">Last
                                                    Name</label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="lastname" defaultValue="" placeholder="Last Name"
                                                           id="input-lastname" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group required account-email">
                                                <label className="col-sm-2 control-label"
                                                       htmlFor="input-email">E-Mail</label>
                                                <div className="col-sm-10">
                                                    <input type="email" name="email" defaultValue="" placeholder="E-Mail"
                                                           id="input-email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group required account-telephone">
                                                <label className="col-sm-2 control-label"
                                                       htmlFor="input-telephone">Telephone</label>
                                                <div className="col-sm-10">
                                                    <input type="tel" name="telephone" defaultValue="" placeholder="Telephone"
                                                           id="input-telephone" className="form-control"/>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend>Your Password</legend>
                                            <div className="form-group required">
                                                <label className="col-sm-2 control-label account-pass"
                                                       htmlFor="input-password">Password</label>
                                                <div className="col-sm-10">
                                                    <input type="password" name="password" defaultValue=""
                                                           placeholder="Password" id="input-password"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group required account-pass2">
                                                <label className="col-sm-2 control-label" htmlFor="input-confirm">Password
                                                    Confirm</label>
                                                <div className="col-sm-10">
                                                    <input type="password" name="confirm" defaultValue=""
                                                           placeholder="Password Confirm" id="input-confirm"
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend>Newsletter</legend>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Subscribe</label>
                                                <div className="col-sm-10"><label className="radio-inline">
                                                    <input type="radio" name="newsletter" defaultValue="1"/>
                                                        Yes</label>
                                                    <label className="radio-inline">
                                                        <input type="radio" name="newsletter" defaultValue="0" defaultChecked="checked"/>
                                                        No</label>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <div className="buttons">
                                            <div className="pull-right">I have read and agree to the
                                                <NavLink to="/privacypolicy" onClick={this.registerCloseModal}><b>Privacy Policy</b></NavLink>
                                                <input type="checkbox" name="agree" defaultValue="1"/>
                                                    <button type="submit" className="btn btn-primary"
                                                            data-loading-text="<span>Continue</span>">
                                                        <span>Continue</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal>

                                <li className="menu-item top-menu-item top-menu-item-5">
                                    <NavLink to="/loginakun">
                                        <span className="links-text">Wishlist</span>
                                        <span className="count-badge wishlist-badge count-zero">0</span>
                                    </NavLink>
                                </li>

                                <li className="menu-item top-menu-item top-menu-item-6">
                                    <NavLink to="/compare">
                                        <span className="links-text">Compare</span>
                                        <span className="count-badge compare-badge count-zero">0</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="desktop-cart-wrapper default-cart-wrapper">
                        <div id="cart" className="dropdown">
                            <NavLink data-toggle="dropdown" data-loading-text="Loading..."
                               className="dropdown-toggle cart-heading" to="/cart">
                                <span id="cart-total">0 item(s) - $0.00</span>
                                <i className="fa fa-shopping-cart">
                                </i>
                                <span id="cart-items" className="count-badge count-zero">0</span>
                            </NavLink>
                            <div id="cart-content" className="dropdown-menu cart-content j-dropdown">
                                <ul>
                                    <li>
                                        <p className="text-center cart-empty">Your shopping cart is empty!</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}