import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Registrasi extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><a>Account</a></li>
                    <li><a>Register</a></li>
                </ul>
                <h1 className="title page-title"><span>Register Account</span></h1>

                <div id="account-register" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-9 register-page">

                            <p>If you already have an account with us, please login at the <a
                                href="https://www.journal-theme.com/1/index.php?route=account/login">login page</a>.</p>
                            <form action="https://www.journal-theme.com/1/index.php?route=account/register"
                                  method="post" encType="multipart/form-data" className="register-form form-horizontal">
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
                                            <input type="text" name="firstname" defaultValue="" placeholder="First Name"
                                                   id="input-firstname" className="form-control"/>
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
                                        <label className="col-sm-2 control-label" htmlFor="input-email">E-Mail</label>
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
                                            <input type="password" name="password" defaultValue="" placeholder="Password"
                                                   id="input-password" className="form-control"/>
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
                                    <div className="pull-right">I have read and agree to the <a
                                        href="https://www.journal-theme.com/1/index.php?route=information/information/agree&amp;information_id=3"
                                        className="agree"><b>Privacy Policy</b></a>
                                        <input type="checkbox" name="agree" defaultValue="1"/>
                                            <button type="submit" className="btn btn-primary"
                                                    data-loading-text="<span>Continue</span>"><span>Continue</span>
                                            </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <aside id="column-right" className="side-column">
                            <div className="grid-rows">
                                <div className="grid-row grid-row-column-right-1">
                                    <div className="grid-cols">
                                        <div className="grid-col grid-col-column-right-1-1">
                                            <div className="grid-items">
                                                <div className="grid-item grid-item-column-right-1-1-1">
                                                    <div className="accordion-menu accordion-menu-126">
                                                        <ul className="j-menu">
                                                            <li className="menu-item accordion-menu-item accordion-menu-item-1">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/account">
                                                                    <span className="links-text">My Account</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-2">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/address">
                                                                    <span className="links-text">Address Book</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-3">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/wishlist">
                                                                    <span className="links-text">Wishlist</span>
                                                                    {/*<span className="count-badge wishlist-badge">1</span>*/}
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-4">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/order">
                                                                    <span className="links-text">Order History</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-5">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/download">
                                                                    <span className="links-text">Downloads</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-6">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/recurring">
                                                                    <span
                                                                        className="links-text">Recurring Payments</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-7">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/reward">
                                                                    <span className="links-text">Reward Points</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-8">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/return/add">
                                                                    <span className="links-text">Returns</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-9">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/transaction">
                                                                    <span className="links-text">Transactions</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-10">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=account/newsletter">
                                                                    <span className="links-text">Newsletter</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-11 ">
                                                                <a>
                                                                    <span className="links-text">Custom Menus</span>
                                                                    <span className="open-menu collapsed"
                                                                          data-toggle="collapse"
                                                                          data-target="#collapse-5ccfec621e05d"
                                                                          role="heading"><i className="fa fa-plus"/></span>
                                                                </a>
                                                                <div className="collapse " id="collapse-5ccfec621e05d">
                                                                    <ul className="j-menu">
                                                                        <li className="menu-item accordion-menu-item-12">
                                                                            <a>
                                                                                <span className="links-text">All Menus Are</span>
                                                                            </a>
                                                                        </li>

                                                                        <li className="menu-item accordion-menu-item-13">
                                                                            <a>
                                                                                <span className="links-text">Fully Customizable</span>
                                                                            </a>
                                                                        </li>

                                                                        <li className="menu-item accordion-menu-item-14">
                                                                            <a>
                                                                                <span className="links-text">Add/Remove Links</span>
                                                                            </a>
                                                                        </li>

                                                                        <li className="menu-item accordion-menu-item-15">
                                                                            <a>
                                                                                <span className="links-text">As Needed</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}