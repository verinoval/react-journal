import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class forgotpassword extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><NavLink to="/loginakun">Account</NavLink></li>
                    <li><a>Forgotten Password</a></li>
                </ul>
                <h1 className="title page-title"><span>Forgot Your Password?</span></h1>

                <div id="account-forgotten" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-9">
                            <p>Enter the e-mail address associated with your account. Click submit to have a password
                                reset link e-mailed to you.</p>
                            <form action="https://www.journal-theme.com/1/index.php?route=account/forgotten"
                                  method="post" encType="multipart/form-data" className="form-horizontal">
                                <fieldset>
                                    <legend>Your E-Mail Address</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-email">E-Mail Address</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="email" defaultValue="" placeholder="E-Mail Address"
                                                   id="input-email" className="form-control"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons clearfix">
                                    <div className="pull-left">
                                        <NavLink to="/loginakun" className="btn btn-default">Back</NavLink>
                                    </div>
                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-primary"><span>Continue</span></button>
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
                                                                    <span className="links-text">Wishlist</span><span
                                                                    className="count-badge wishlist-badge count-zero">0</span>
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
                                                                <NavLink to="/productreturn"><span className="links-text">Returns</span></NavLink>
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
                                                                    <span className="open-menu collapsed" data-toggle="collapse"
                                                                          data-target="#collapse-5cd13e1f6ce8e" role="heading">
                                                                        <i className="fa fa-plus"/>
                                                                    </span>
                                                                </a>
                                                                <div className="collapse " id="collapse-5cd13e1f6ce8e">
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