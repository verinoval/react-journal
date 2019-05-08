import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Contact extends Component{
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><a>Contact Us</a></li>
                </ul>
                <h1 className="title page-title"><span>Contact Us</span></h1>
                <div id="top" className="top top-row">
                    <div className="grid-rows">
                        <div className="grid-row grid-row-top-1">
                            <div className="grid-cols">
                                <div className="grid-col grid-col-top-1-1">
                                    <div className="grid-items">
                                        <div className="grid-item grid-item-top-1-1-1">
                                            <div className="module module-blocks module-blocks-104 blocks-grid">
                                                <div className="module-body">
                                                    <div className="module-item module-item-1 no-expand">
                                                        <div className="block-body expand-block">
                                                            <div className="block-wrapper">
                                                                <div className="block-content  block-map">
                                                                    <div className="journal-loading"
                                                                         style={{display: 'none'}}>
                                                                        <i className="fa fa-spinner fa-spin"/>
                                                                    </div>
                                                                    <iframe
                                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6803814444893!2d-0.12681944838379433!3d51.50073251891121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig+Ben!5e0!3m2!1sen!2sro!4v1528897605464"
                                                                        width="450" height="450" frameBorder="0"
                                                                        style={{border:0}} allowFullScreen=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-row grid-row-top-2">
                            <div className="grid-cols">
                                <div className="grid-col grid-col-top-2-1">
                                    <div className="grid-items">
                                        <div className="grid-item grid-item-top-2-1-1">
                                            <div className="module module-info_blocks module-info_blocks-194">
                                                <div className="module-body">
                                                    <div className="module-item module-item-1 info-blocks info-blocks-icon">
                                                        <div className="info-block">
                                                            <div className="info-block-content">
                                                                <div className="info-block-title">Store Address</div>
                                                                <div className="info-block-text">123 Main
                                                                    St, <br/> London, UK</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="module-item module-item-2 info-blocks info-blocks-icon">
                                                        <a href="tel:18005559090" className="info-block">
                                                            <div className="info-block-content">
                                                                <div className="info-block-title">Call Us</div>
                                                                <div className="info-block-text">Tel: 1.800.555.9090<br/>
                                                                    Fax: 1.800.555.9090</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="module-item module-item-3 info-blocks info-blocks-icon">
                                                        <div className="info-block">
                                                            <div className="info-block-content">
                                                                <div className="info-block-title">Store Hours</div>
                                                                <div className="info-block-text">Mon-Fri: 10:00 -
                                                                    20:00<br/>Weekend: 12:00 - 16:00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="module-item module-item-4 info-blocks info-blocks-icon">
                                                        <div className="info-block">
                                                            <div className="info-block-content">
                                                                <div className="info-block-title">Custom Blocks</div>
                                                                <div className="info-block-text">Create unlimited blocks
                                                                    with custom styles and add them on any page.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="grid-col grid-col-top-2-2">
                                    <div className="grid-items">
                                        <div className="grid-item grid-item-top-2-2-1">
                                            <div className="module module-form module-form-20">
                                                <h3 className="title module-title">Leave Us a Message</h3>
                                                <div className="module-body">
                                                    <form
                                                        action="https://www.journal-theme.com/1/index.php?route=journal3/form/send&amp;module_id=20"
                                                        method="post" encType="multipart/form-data"
                                                        className="form-horizontal">
                                                        <fieldset>


                                                            <div className="form-group custom-field required">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="field-5ccc01db83943-1">Your Name</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text" name="item[1]" defaultValue=""
                                                                           placeholder="Your Name"
                                                                           id="field-5ccc01db83943-1"
                                                                           className="form-control"/>
                                                                </div>
                                                            </div>


                                                            <div className="form-group custom-field required">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="field-5ccc01db83943-2">Your
                                                                    Email</label>
                                                                <div className="col-sm-10">
                                                                    <input type="email" name="item[2]" defaultValue=""
                                                                           placeholder="Your Email"
                                                                           id="field-5ccc01db83943-2"
                                                                           className="form-control"/>
                                                                </div>
                                                            </div>


                                                            <div className="form-group custom-field ">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="field-5ccc01db83943-3">Topic</label>
                                                                <div className="col-sm-10">
                                                                    <select name="item[3]" id="field-5ccc01db83943-3"
                                                                            className="form-control">
                                                                        <option defaultValue=""> --- Please Select ---</option>
                                                                        <option
                                                                            defaultValue="Capture the information you need">Capture
                                                                            the information you need
                                                                        </option>
                                                                        <option defaultValue="Add or remove any fields">Add or
                                                                            remove any fields
                                                                        </option>
                                                                        <option defaultValue="Your own custom criteria">Your
                                                                            own custom criteria
                                                                        </option>
                                                                        <option
                                                                            defaultValue="Make any field required or not">Make
                                                                            any field required or not
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>


                                                            <div className="form-group custom-field required">
                                                                <label className="col-sm-2 control-label"
                                                                       htmlFor="field-5ccc01db83943-4">Message</label>
                                                                <div className="col-sm-10">
                                                                    <textarea name="item[4]" rows="5"
                                                                              placeholder="Message"
                                                                              id="field-5ccc01db83943-4"
                                                                              className="form-control"/>
                                                                </div>
                                                            </div>


                                                        </fieldset>
                                                        <div className="buttons">
                                                            <div className="pull-right">
                                                                <button type="submit" className="btn btn-primary"
                                                                        data-loading-text="<span>Submit</span>">
                                                                    <span>Submit</span></button>
                                                            </div>
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

                </div>

                <div id="information-contact" className="container">
                    <div className="row">
                        <div id="content" className="col-sm-12">
                            <h2 className="title location-title">Our Location</h2>
                            <div className="panel panel-default our-location">
                                <div className="panel-body">
                                    <div className="row store-data">
                                        <div className="col-sm-3 store-address"><strong>Journal 3</strong><br/>
                                            <address>
                                                Address 1
                                            </address>
                                        </div>
                                        <div className="col-sm-3 store-tel"><strong>Telephone</strong><br/>
                                            123456789<br/>
                                            <br/>
                                        </div>
                                        <div className="col-sm-3 store-info"/>
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