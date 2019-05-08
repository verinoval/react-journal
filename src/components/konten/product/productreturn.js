import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Productreturn extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><NavLink to="/loginakun">Account</NavLink></li>
                    <li><a>Product Returns</a></li>
                </ul>
                <h1 className="title page-title"><span>Product Returns</span></h1>

                <div id="account-return" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-9">
                            <p>Please complete the form below to request an RMA number.</p>
                            <form action="https://www.journal-theme.com/1/index.php?route=account/return/add"
                                  method="post" encType="multipart/form-data" className="form-horizontal">
                                <fieldset>
                                    <legend>Order Information</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-firstname">First Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="firstname" defaultValue="" placeholder="First Name"
                                                   id="input-firstname" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-lastname">Last Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="lastname" defaultValue="" placeholder="Last Name"
                                                   id="input-lastname" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-email">E-Mail</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="email" defaultValue="" placeholder="E-Mail"
                                                   id="input-email" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-telephone">Telephone</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="telephone" defaultValue="" placeholder="Telephone"
                                                   id="input-telephone" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-order-id">Order ID</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="order_id" defaultValue="" placeholder="Order ID"
                                                   id="input-order-id" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="input-date-ordered">Order Date</label>
                                        <div className="col-sm-3">
                                            <div className="input-group date">
                                                <input type="text" name="date_ordered" defaultValue="" placeholder="Order Date"
                                                       data-date-format="YYYY-MM-DD" id="input-date-ordered"
                                                       className="form-control"/>
                                               <span className="input-group-btn">
                                                   <button type="button" className="btn btn-default"><i className="fa fa-calendar"/></button>
                                               </span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Product Information</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-product">Product Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="product" defaultValue="" placeholder="Product Name"
                                                   id="input-product" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-model">Product Code</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="model" defaultValue="" placeholder="Product Code"
                                                   id="input-model" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="input-quantity">Quantity</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="quantity" defaultValue="1" placeholder="Quantity"
                                                   id="input-quantity" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label">Reason for Return</label>
                                        <div className="col-sm-10">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="return_reason_id" defaultValue="1"/>Dead On Arrival
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="return_reason_id" defaultValue="4"/>Faulty, please supply details
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="return_reason_id" defaultValue="3"/>Order Error
                                                    </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="return_reason_id" defaultValue="5"/>Other, please supply details
                                                    </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="return_reason_id" defaultValue="2"/>Received Wrong Item
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label">Product is opened</label>
                                        <div className="col-sm-10">
                                            <label className="radio-inline">
                                                <input type="radio" name="opened" defaultValue="1"/>Yes
                                            </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="opened" defaultValue="0" defaultChecked="checked"/>No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="input-comment">Faulty or other details</label>
                                        <div className="col-sm-10">
                                            <textarea name="comment" rows="10" placeholder="Faulty or other details"
                                                      id="input-comment" className="form-control"/>
                                        </div>
                                    </div>

                                </fieldset>
                                <div className="buttons clearfix">
                                    <div className="pull-left">
                                        <a href="https://www.journal-theme.com/1/index.php?route=account/account"
                                        className="btn btn-default">Back</a>
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
                                                                <NavLink to="/loginakun"><span className="links-text">My Account</span></NavLink>
                                                            </li>

                                                            <li className="menu-item accordion-menu-item accordion-menu-item-2">
                                                                <a><span className="links-text">Address Book</span></a>
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
                                                                <NavLink> to="/productreturn"><span className="links-text">Returns</span></NavLink>
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
                                                                    <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cd1386d83dc0" role="heading">
                                                                        <i className="fa fa-plus"/>
                                                                    </span>
                                                                </a>
                                                                <div className="collapse " id="collapse-5cd1386d83dc0">
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
                                                                                <span
                                                                                    className="links-text">As Needed</span>
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