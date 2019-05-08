import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Header from "./layout/header/mainheader";

export default class loginAkun extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><a>Account</a></li>
                    <li><a>Login</a></li>
                </ul>
                <h1 className="title page-title"><span>Account Login</span></h1>

                <div id="account-login" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-9">
                            <div className="row login-box">
                                <div className="col-sm-6">
                                    <div className="well">
                                        <h2 className="title">New Customer</h2>
                                        <p><strong>Register Account</strong></p>
                                        <p>By creating an account you will be able to shop faster, be up to date on an
                                            order's status, and keep track of the orders you have previously made.</p>
                                        <div className="buttons">
                                            <div className="pull-right">
                                                <NavLink to="/register" className="btn btn-primary">Continue</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="well">
                                        <h2 className="title">Returning Customer</h2>
                                        <p><strong>I am a returning customer</strong></p>
                                        <form id="login" action="https://www.journal-theme.com/1/index.php?route=account/login"
                                              method="post" encType="multipart/form-data" className="form-horizontal login-form">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="input-email">E-Mail Address</label>
                                                <input type="text" name="email" defaultValue="" placeholder="E-Mail Address"
                                                       id="input-email" className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label"
                                                       htmlFor="input-password">Password</label>
                                                <input type="password" name="password" defaultValue="" placeholder="Password"
                                                       id="input-password" className="form-control"/>
                                                    <div>
                                                        <NavLink to="/forgotpassword" target="_top">Forgotten Password</NavLink>
                                                    </div>
                                            </div>
                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <button type="submit" className="btn btn-primary"
                                                            data-loading-text="<span>Login</span>"><span>Login</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <input type="hidden" name="redirect"
                                                   defaultValue="indexe223.html?route=account/wishlist"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
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
                                                                <a href="indexe223.html?route=account/account">
                                                                    <span className="links-text">My Account</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-2">
                                                                <a href="indexe223.html?route=account/address">
                                                                    <span className="links-text">Address Book</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-3">
                                                                <a href="indexe223.html?route=account/wishlist">
                                                                    <span className="links-text">Wishlist</span><span
                                                                    className="count-badge wishlist-badge count-zero">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-4">
                                                                <a href="indexe223.html?route=account/order">
                                                                    <span className="links-text">Order History</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-5">
                                                                <a href="indexe223.html?route=account/download">
                                                                    <span className="links-text">Downloads</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-6">
                                                                <a href="indexe223.html?route=account/recurring">
                                                                    <span
                                                                        className="links-text">Recurring Payments</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-7">
                                                                <a href="indexe223.html?route=account/reward">
                                                                    <span className="links-text">Reward Points</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-8">
                                                                <NavLink to="/productreturn"><span className="links-text">Returns</span></NavLink>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-9">
                                                                <a href="indexe223.html?route=account/transaction">
                                                                    <span className="links-text">Transactions</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-10">
                                                                <a href="indexe223.html?route=account/newsletter">
                                                                    <span className="links-text">Newsletter</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-11 ">
                                                                <a>
                                                                    <span className="links-text">Custom Menus</span>
                                                                    <span className="open-menu collapsed"
                                                                          data-toggle="collapse"
                                                                          data-target="#collapse-5cc2e1330bfed"
                                                                          role="heading"><i className="fa fa-plus"/></span>
                                                                </a>
                                                                <div className="collapse " id="collapse-5cc2e1330bfed">
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