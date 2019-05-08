import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class cart extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li>Shopping Cart</li>
                </ul>
                <h1 className="title page-title"><span>Shopping Cart</span></h1>

                <div id="error-not-found" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-12">
                            <p>Your shopping cart is empty!</p>
                            <div className="buttons clearfix">
                                <div className="pull-right">
                                    <NavLink to="/" className="btn btn-primary">Continue</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}