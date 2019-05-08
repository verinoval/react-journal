import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class compare extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><a>Product Comparison</a>
                    </li>
                </ul>
                <h1 className="title page-title"><span>Product Comparison</span></h1>

                <div id="product-compare" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-12">
                            <p>You have not chosen any products to compare.</p>
                            <div className="buttons">
                                <div className="pull-right"><NavLink to="/" className="btn btn-default"><span>Continue</span></NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}