import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class Allproduct extends Component{
    constructor(props) {
        super(props);
        this.state = {value: '12'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <ul className="breadcrumb">
                    <li><NavLink to="/"><i className="fa fa-home"/></NavLink></li>
                    <li><a>All Products</a></li>
                </ul>
                <h1 className="title page-title"><span>All Products</span></h1>

                <div className="container">
                    <div className="row">
                        <aside id="column-left" className="side-column">
                            <div className="grid-rows">
                                <div className="grid-row grid-row-column-left-1">
                                    <div className="grid-cols">
                                        <div className="grid-col grid-col-column-left-1-1">
                                            <div className="grid-items">
                                                <div className="grid-item grid-item-column-left-1-1-1">
                                                    <div className="module module-filter module-filter-36">
                                                        <h3 className="title module-title">
                                                            <span>Filter</span>
                                                            <button className="reset-filter btn">Clear</button>
                                                            <a className="x"/>
                                                        </h3>
                                                        <div className="module-body">
                                                            <div className="panel-group">
                                                                <div className="module-item module-item-p panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-1"
                                                                               className="accordion-toggle "
                                                                               data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="p">
                                                                                Price
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5ccb82570b890-collapse-1">
                                                                        <div className="panel-body">
                                                                            <div className="filter-price" id="filter-filter-5ccb82570b890-1">
                                                                                <div className="range-slider">
                                                                                    <span className="irs js-irs-0">
                                                                                        <span className="irs">
                                                                                            <span className="irs-line" tabIndex="0">
                                                                                                <span className="irs-line-left"/>
                                                                                                <span className="irs-line-mid"/>
                                                                                                <span className="irs-line-right"/>
                                                                                            </span>
                                                                                            <span className="irs-min" style={{visibility: 'hidden'}}>$0</span>
                                                                                            <span className="irs-max" style={{visibility: 'hidden'}}>$7,450</span>
                                                                                            <span className="irs-from" style={{visibility: 'visible', left: '-2.40175%'}}>$0</span>
                                                                                            <span className="irs-to" style={{visibility: 'visible', left: '85.3712%'}}>$7,450</span>
                                                                                            <span className="irs-single" style={{visibility: 'hidden', left: '34.0611%'}}>$0 — $7,450</span>
                                                                                        </span>
                                                                                        <span className="irs-grid"/>
                                                                                        <span className="irs-bar" style={{left: '3.27511%', width: '93.4498%'}}/>
                                                                                        <span className="irs-shadow shadow-from" style={{display: 'none'}}/>
                                                                                        <span className="irs-shadow shadow-to" style={{display: 'none'}}/>
                                                                                        <span className="irs-slider from" style={{left: '0%'}}/>
                                                                                        <span className="irs-slider to" style={{left: '93.4498%'}}/>
                                                                                    </span>
                                                                                    <input type="text" className="js-range-slider irs-hidden-input" defaultValue="" tabIndex="-1" readOnly=""/>
                                                                                </div>
                                                                                <div className="extra-controls">
                                                                                    <span className="currency-symbol currency-left">$</span>
                                                                                    <input type="text" className="filter-price-min" name="min" data-min="0" defaultValue="0"/>
                                                                                    <span className="currency-symbol currency-left">$</span>
                                                                                    <input type="text" className="filter-price-max" name="max" data-max="7450" defaultValue="7450"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-c panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-2"
                                                                               className="accordion-toggle "
                                                                               data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="c">
                                                                                Subcategories
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5ccb82570b890-collapse-2">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="59"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Fashion"
                                                                                            title="Fashion"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Fashion</span>
                                                                                            <span className="count-badge ">19</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="107"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Bags" title="Bags"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Bags</span>
                                                                                            <span className="count-badge ">20</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="109"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Health &amp; Beauty"
                                                                                            title="Health &amp; Beauty"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                                            <span className="count-badge ">26</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="111"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Footwear"
                                                                                            title="Footwear"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Footwear</span>
                                                                                            <span className="count-badge ">30</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="175"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/acceso-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/acceso-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/acceso-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Home Decor"
                                                                                            title="Home Decor"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Home Decor</span>
                                                                                            <span className="count-badge ">30</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="69"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Electronics"
                                                                                            title="Electronics"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Electronics</span>
                                                                                            <span className="count-badge ">16</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="221"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/sports-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/sports-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/sports-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Sports" title="Sports"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Sports</span>
                                                                                            <span className="count-badge ">6</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-m image-only panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-3"
                                                                               className="accordion-toggle "
                                                                               data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="m">
                                                                                Brands
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5ccb82570b890-collapse-3">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="8"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/apple_logo-38x38h.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/apple_logo-38x38h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/apple_logo-76x76h.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Apple" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Apple"/>
                                                                                            <span className="links-text">Apple</span>
                                                                                            <span className="count-badge ">14</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="12"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/awesome-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/awesome-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/awesome-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Awesome Brand" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Awesome Brand"/>
                                                                                            <span className="links-text">Awesome Brand</span>
                                                                                    <span className="count-badge ">15</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="9"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/canon_logo-38x38w.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/canon_logo-38x38w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/canon_logo-76x76w.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Canon" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Canon"/>
                                                                                            <span className="links-text">Canon</span>
                                                                                    <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="13"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Chic D'or" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Chic D'or"/>
                                                                                            <span className="links-text">Chic D'or</span>
                                                                                            <span className="count-badge ">14</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="15"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/erikson-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/erikson-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/erikson-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Ericksson" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Ericksson"/>
                                                                                            <span className="links-text">Ericksson</span>
                                                                                    <span className="count-badge ">11</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="17"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/FC-fashion-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/FC-fashion-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/FC-fashion-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Fort Cane" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Fort Cane"/>
                                                                                            <span className="links-text">Fort Cane</span>
                                                                                            <span className="count-badge ">19</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="7"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hp_logo-38x38w.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hp_logo-38x38w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hp_logo-76x76w.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Hewlett-Packard"
                                                                                            title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Hewlett-Packard"/>
                                                                                            <span className="links-text">Hewlett-Packard</span>
                                                                                    <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="14"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hipster-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hipster-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hipster-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Hipster" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Hipster"/>
                                                                                            <span className="links-text">Hipster</span>
                                                                                    <span className="count-badge ">10</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="5"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/htc_logo-38x38w.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/htc_logo-38x38w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/htc_logo-76x76w.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="HTC" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="HTC"/>
                                                                                            <span className="links-text">HTC</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="18"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/mellisa-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/mellisa-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/mellisa-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Melissa Johnson"
                                                                                            title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Melissa Johnson"/>
                                                                                            <span
                                                                                                className="links-text">Melissa Johnson</span><span
                                                                                            className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="16"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/fashion-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/fashion-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/fashion-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="NY Fashion" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="NY Fashion"/>
                                                                                            <span className="links-text">NY Fashion</span>
                                                                                    <span className="count-badge ">17</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="19"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/olivia-fashion-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/olivia-fashion-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/olivia-fashion-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Olivia Smith" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Olivia Smith"/>
                                                                                            <span className="links-text">Olivia Smith</span>
                                                                                            <span className="count-badge ">9</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="20"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-beauty-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-beauty-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-beauty-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Sarah Bell" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Sarah Bell"/>
                                                                                            <span className="links-text">Sarah Bell</span>
                                                                                            <span className="count-badge ">8</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="21"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-cosmetics-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-cosmetics-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-cosmetics-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Sarah Bloom" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Sarah Bloom"/>
                                                                                            <span className="links-text">Sarah Bloom</span>
                                                                                            <span className="count-badge ">14</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="22"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sunglasses-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sunglasses-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sunglasses-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Scandinavian Sunglasses"
                                                                                            title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Scandinavian Sunglasses"/>
                                                                                            <span className="links-text">Scandinavian Sunglasses</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="10"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sony_logo-38x38w.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sony_logo-38x38w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sony_logo-76x76w.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Sony" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Sony"/>
                                                                                            <span className="links-text">Sony</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="11"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/superbrand-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/superbrand-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/superbrand-76x76.jpg 2x"
                                                                                            width="38" height="38"
                                                                                            alt="SuperBrand" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="SuperBrand"/>
                                                                                            <span className="links-text">SuperBrand</span>
                                                                                            <span className="count-badge ">13</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a2 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-4" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a2">
                                                                                No. of Cores
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-4">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="1"/>
                                                                                        <span className="links-text">1</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="2"/>
                                                                                        <span className="links-text">2</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="4"/>
                                                                                        <span className="links-text">4</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="5"/>
                                                                                        <span className="links-text">5</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="6"/>
                                                                                        <span className="links-text">6</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="20"/>
                                                                                        <span className="links-text">20</span>
                                                                                    <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a2" defaultValue="processor"/>
                                                                                        <span className="links-text">processor</span>
                                                                                        <span className="count-badge ">3</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a15 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-5" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a15">
                                                                                Material
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-5">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="100%25%20cotton"/>
                                                                                        <span className="links-text">100% cotton</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Bamboo"/>
                                                                                        <span className="links-text">Bamboo</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Carbon%20Fiber"/>
                                                                                        <span className="links-text">Carbon Fiber</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Leather"/>
                                                                                        <span className="links-text">Leather</span>
                                                                                        <span className="count-badge ">12</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Linen"/>
                                                                                        <span className="links-text">Linen</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Marble"/>
                                                                                        <span className="links-text">Marble</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Microfiber"/>
                                                                                        <span className="links-text">Microfiber</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Nanoparticles"/>
                                                                                        <span className="links-text">Nanoparticles</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Non%20Leather"/>
                                                                                        <span className="links-text">Non Leather</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Polyester"/>
                                                                                        <span className="links-text">Polyester</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Porcelain"/>
                                                                                        <span className="links-text">Porcelain</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Steel"/>
                                                                                        <span className="links-text">Steel</span>
                                                                                    <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Stone"/>
                                                                                        <span className="links-text">Stone</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="Wood"/>
                                                                                        <span className="links-text">Wood</span>
                                                                                        <span className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="bio%20cotton"/>
                                                                                        <span className="links-text">bio cotton</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="canvas"/>
                                                                                        <span className="links-text">canvas</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="cashmere"/>
                                                                                        <span className="links-text">cashmere</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="cotton"/>
                                                                                        <span className="links-text">cotton</span>
                                                                                        <span className="count-badge ">9</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="faux%20leather"/>
                                                                                        <span className="links-text">faux leather</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="patent%20leather"/>
                                                                                        <span className="links-text">patent leather</span>
                                                                                        <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="pony%20hair"/>
                                                                                        <span className="links-text">pony hair</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="rayon"/>
                                                                                        <span className="links-text">rayon</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="suede%20leather"/>
                                                                                        <span className="links-text">suede leather</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="viscose"/>
                                                                                        <span className="links-text">viscose</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a3 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-6" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a3">
                                                                                Clockspeed
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-6">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a3" defaultValue="100mhz"/>
                                                                                        <span className="links-text">100mhz</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a3" defaultValue="processor"/>
                                                                                        <span className="links-text">processor</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a4 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-7" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a4">
                                                                                test 1
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-7">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a4" defaultValue="8%20GB"/>
                                                                                        <span className="links-text">8 GB</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a4" defaultValue="8gb"/>
                                                                                        <span className="links-text">8gb</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a4" defaultValue="16%20GB"/>
                                                                                        <span className="links-text">16 GB</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a4" defaultValue="16GB"/>
                                                                                        <span className="links-text">16GB</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a4" defaultValue="30GB"/>
                                                                                        <span className="links-text">30GB</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a5 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-8" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a5">
                                                                                test 2
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-8">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a5" defaultValue="16%20GB"/>
                                                                                        <span className="links-text">16 GB</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a1 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-9" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a1">
                                                                                Description
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-9">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a1" defaultValue="7%20processors"/>
                                                                                        <span className="links-text">7 processors</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a1" defaultValue="loud%20music"/>
                                                                                        <span className="links-text">loud music</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a1" defaultValue="processor"/>
                                                                                        <span className="links-text">processor</span>
                                                                                    <span className="count-badge ">3</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a13 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-10" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a13">
                                                                                Style
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-10">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Chic"/>
                                                                                        <span className="links-text">Chic</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Daytime"/>
                                                                                        <span className="links-text">Daytime</span>
                                                                                        <span className="count-badge ">8</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Formal"/>
                                                                                        <span className="links-text">Formal</span>
                                                                                    <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Fresh"/>
                                                                                        <span className="links-text">Fresh</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Hike"/>
                                                                                        <span className="links-text">Hike</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Party"/>
                                                                                        <span className="links-text">Party</span>
                                                                                        <span className="count-badge ">12</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Sleek"/>
                                                                                        <span className="links-text">Sleek</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="beachwear"/>
                                                                                        <span className="links-text">beachwear</span>
                                                                                    <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="casual"/>
                                                                                        <span className="links-text">casual</span>
                                                                                    <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="night"/>
                                                                                        <span className="links-text">night</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="riding"/>
                                                                                        <span className="links-text">riding</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="sport"/>
                                                                                        <span className="links-text">sport</span>
                                                                                        <span className="count-badge ">8</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="trainers"/>
                                                                                        <span className="links-text">trainers</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="training"/>
                                                                                        <span className="links-text">training</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="travel"/>
                                                                                        <span className="links-text">travel</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a32 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-11" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a32">
                                                                                Room &gt; Room
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-11">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a32" defaultValue="Bedroom"/>
                                                                                        <span className="links-text">Bedroom</span>
                                                                                        <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a32" defaultValue="Dining"/>
                                                                                        <span className="links-text">Dining</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a32" defaultValue="Entry"/>
                                                                                        <span className="links-text">Entry</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a32" defaultValue="Kitchen"/>
                                                                                        <span className="links-text">Kitchen</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a32" defaultValue="Living"/>
                                                                                        <span className="links-text">Living</span>
                                                                                        <span className="count-badge ">17</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a32" defaultValue="TV"/>
                                                                                        <span className="links-text">TV</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a12 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-12" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a12">
                                                                                Occasion
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse"
                                                                         id="filter-5ccb82570b890-collapse-12">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="casual"/>
                                                                                        <span className="links-text">casual</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="daytime"/>
                                                                                        <span className="links-text">daytime</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="formal"/>
                                                                                        <span className="links-text">formal</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="hiking"/>
                                                                                        <span className="links-text">hiking</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="night"/>
                                                                                        <span className="links-text">night</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="party"/>
                                                                                        <span className="links-text">party</span>
                                                                                        <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="sport"/>
                                                                                        <span className="links-text">sport</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a27 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-13" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a27">
                                                                                Attribute 2
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-13">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a27" defaultValue="Example%201"/>
                                                                                        <span className="links-text">Example 1</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a27" defaultValue="Example%202"/>
                                                                                        <span className="links-text">Example 2</span>
                                                                                        <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a27" defaultValue="Example%203"/>
                                                                                        <span className="links-text">Example 3</span>
                                                                                        <span className="count-badge ">7</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a28 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-14" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a28">
                                                                                Material &gt; Upholstery
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-14">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a28" defaultValue="Faux%20Leather"/>
                                                                                        <span className="links-text">Faux Leather</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a28" defaultValue="Faux%20Velvet"/>
                                                                                        <span className="links-text">Faux Velvet</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a28" defaultValue="Leather"/>
                                                                                        <span className="links-text">Leather</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a28" defaultValue="Microfiber"/>
                                                                                        <span className="links-text">Microfiber</span>
                                                                                        <span className="count-badge ">3</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a26 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-15" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a26">
                                                                                Attribute 1
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-15">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a26" defaultValue="Sample%201"/>
                                                                                        <span className="links-text">Sample 1</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a26" defaultValue="Sample%202"/>
                                                                                        <span className="links-text">Sample 2</span>
                                                                                        <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a26" defaultValue="Sample%203"/>
                                                                                        <span className="links-text">Sample 3</span>
                                                                                    <span className="count-badge ">5</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a14 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-16" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="a14">
                                                                                Dress Length
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-16">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a14" defaultValue="short"/>
                                                                                        <span className="links-text">short</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-o2 image-only panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-17" className="accordion-toggle "
                                                                               data-toggle="collapse" aria-expanded="true" data-filter="o2">
                                                                                Color
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5ccb82570b890-collapse-17">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="54"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Burgundy" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Burgundy"/>
                                                                                            <span className="links-text">Burgundy</span>
                                                                                            <span className="count-badge ">18</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="53"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/9-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/9-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/9-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Dark Blue" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Dark Blue"/>
                                                                                            <span className="links-text">Dark Blue</span>
                                                                                            <span className="count-badge ">26</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="57"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/14-38x38.png"
                                                                                             // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/14-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/14-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Dark Gray" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Dark Gray"/>
                                                                                            <span className="links-text">Dark Gray</span>
                                                                                            <span className="count-badge ">59</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="52"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/5-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/5-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/5-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Gold" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Gold"/>
                                                                                            <span className="links-text">Gold</span>
                                                                                            <span className="count-badge ">21</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="51"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/8-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/8-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/8-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Green" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Green"/>
                                                                                            <span className="links-text">Green</span>
                                                                                            <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="50"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/6-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/6-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/6-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Light Blue" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Light Blue"/>
                                                                                            <span className="links-text">Light Blue</span>
                                                                                            <span className="count-badge ">18</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="55"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/11-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/11-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/11-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Light Green" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Light Green"/>
                                                                                            <span className="links-text">Light Green</span>
                                                                                            <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="56"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/3-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/3-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/3-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Orange" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Orange"/>
                                                                                            <span className="links-text">Orange</span>
                                                                                        <span className="count-badge ">12</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="49"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/2-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/2-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/2-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Silver" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Silver"/>
                                                                                            <span className="links-text">Silver</span>
                                                                                            <span className="count-badge ">25</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="58"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/13-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/13-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/13-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Yellow" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Yellow"/>
                                                                                            <span className="links-text">Yellow</span>
                                                                                            <span className="count-badge ">49</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="23"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Turquoise" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Turquoise"/>
                                                                                            <span className="links-text">Turquoise</span>
                                                                                    <span className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="24"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/10-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/10-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/10-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Violet" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Violet"/>
                                                                                            <span className="links-text">Violet</span>
                                                                                            <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="44"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Steel" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Steel"/>
                                                                                            <span className="links-text">Steel</span>
                                                                                            <span className="count-badge ">50</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="45"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Red" title=""
                                                                                            className="img-responsive"
                                                                                            data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top"
                                                                                            data-original-title="Red"/>
                                                                                            <span className="links-text">Red</span>
                                                                                            <span className="count-badge ">11</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-o5 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-18"
                                                                               className="accordion-toggle collapsed"
                                                                               data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="o5">
                                                                                Select
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-18">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o5" defaultValue="39"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Red" title="Red"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Red</span>
                                                                                            <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o5" defaultValue="40"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Blue" title="Blue"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Blue</span>
                                                                                            <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o5" defaultValue="41"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Green" title="Green"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Green</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o5" defaultValue="42"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Yellow" title="Yellow"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Yellow</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-o1 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-19"
                                                                               className="accordion-toggle collapsed"
                                                                               data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="o1">
                                                                                Radio
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-19">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o1" defaultValue="32"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            //srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Small" title="Small"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Small</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o1" defaultValue="31"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Medium" title="Medium"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Medium</span><span
                                                                                            className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o1" defaultValue="43"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/placeholder-38x38.png 1x, https://www.journal-theme.com/1/image/cache/placeholder-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Large" title="Large"
                                                                                            className="img-responsive"/>
                                                                                            <span className="links-text">Large</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="module-item module-item-o11 text-only panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-20" className="accordion-toggle "
                                                                               data-toggle="collapse" aria-expanded="true" data-filter="o11">
                                                                                Size
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5ccb82570b890-collapse-20">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="59"/>
                                                                                        <span className="links-text">XS</span>
                                                                                        <span className="count-badge ">25</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="46"/>
                                                                                        <span className="links-text">S</span>
                                                                                        <span className="count-badge ">69</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="47"/>
                                                                                        <span className="links-text">M</span>
                                                                                        <span className="count-badge ">70</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="48"/>
                                                                                        <span className="links-text">L</span>
                                                                                        <span className="count-badge ">73</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="60"/>
                                                                                        <span className="links-text">XL</span>
                                                                                        <span className="count-badge ">35</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="61"/>
                                                                                        <span className="links-text">XXL</span>
                                                                                        <span className="count-badge ">20</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-t panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-21" className="accordion-toggle collapsed"
                                                                               data-toggle="collapse" aria-expanded="false" data-filter="t">
                                                                                Tags
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5ccb82570b890-collapse-21">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="armchair"/>
                                                                                        <span className="links-text">armchair</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="beauty"/>
                                                                                        <span className="links-text">beauty</span>
                                                                                        <span className="count-badge ">22</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="body"/>
                                                                                        <span className="links-text">body</span>
                                                                                        <span className="count-badge ">11</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="brush"/>
                                                                                        <span className="links-text">brush</span>
                                                                                        <span className="count-badge ">9</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="business"/>
                                                                                        <span className="links-text">business</span>
                                                                                        <span className="count-badge ">23</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="casual"/>
                                                                                        <span className="links-text">casual</span>
                                                                                        <span className="count-badge ">40</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="chair"/>
                                                                                        <span className="links-text">chair</span>
                                                                                        <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="chrome"/>
                                                                                        <span className="links-text">chrome</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="classic"/>
                                                                                        <span className="links-text">classic</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="coffee"/>
                                                                                        <span className="links-text">coffee</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="comfortable"/>
                                                                                        <span className="links-text">comfortable</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="cool"/>
                                                                                        <span className="links-text">cool</span>
                                                                                        <span className="count-badge ">52</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="corner"/>
                                                                                        <span className="links-text">corner</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="daily"/>
                                                                                        <span className="links-text">daily</span>
                                                                                        <span className="count-badge ">30</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="decor"/>
                                                                                        <span className="links-text">decor</span>
                                                                                        <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="fireplace"/>
                                                                                        <span className="links-text">fireplace</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="flame"/>
                                                                                        <span className="links-text">flame</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="flat"/>
                                                                                        <span className="links-text">flat</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="fresh"/>
                                                                                        <span className="links-text">fresh</span>
                                                                                        <span className="count-badge ">13</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="gray"/>
                                                                                        <span className="links-text">gray</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="heels"/>
                                                                                        <span className="links-text">heels</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="lamp"/>
                                                                                        <span className="links-text">lamp</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="lazy"/>
                                                                                        <span className="links-text">lazy</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="leather"/>
                                                                                        <span className="links-text">leather</span>
                                                                                        <span className="count-badge ">10</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="light"/>
                                                                                        <span className="links-text">light</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="linen"/>
                                                                                        <span className="links-text">linen</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="microfiber"/>
                                                                                        <span className="links-text">microfiber</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="modern"/>
                                                                                        <span className="links-text">modern</span>
                                                                                        <span className="count-badge ">19</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="occasion"/>
                                                                                        <span className="links-text">occasion</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="polyester"/>
                                                                                        <span className="links-text">polyester</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="porcelain"/>
                                                                                        <span className="links-text">porcelain</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="round"/>
                                                                                        <span className="links-text">round</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="shampoo"/>
                                                                                        <span className="links-text">shampoo</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="simple"/>
                                                                                        <span className="links-text">simple</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="sofa"/>
                                                                                        <span className="links-text">sofa</span>
                                                                                        <span className="count-badge ">8</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="sport"/>
                                                                                        <span className="links-text">sport</span>
                                                                                        <span className="count-badge ">24</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="statue"/>
                                                                                        <span className="links-text">statue</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="steel"/>
                                                                                        <span className="links-text">steel</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="stone"/>
                                                                                        <span className="links-text">stone</span>
                                                                                        <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="table"/>
                                                                                        <span className="links-text">table</span>
                                                                                        <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="wood"/>
                                                                                        <span className="links-text">wood</span>
                                                                                    <span className="count-badge ">11</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="yellow"/>
                                                                                        <span className="links-text">yellow</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-q panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5ccb82570b890-collapse-22" className="accordion-toggle "
                                                                               data-toggle="collapse" aria-expanded="true" data-filter="q">
                                                                                Availability
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5ccb82570b890-collapse-22">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="q" defaultValue="1"/>
                                                                                        <span className="links-text">In Stock</span>
                                                                                        <span className="count-badge count-zero "/>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="q" defaultValue="0"/>
                                                                                        <span className="links-text">Out of Stock</span>
                                                                                        <span className="count-badge count-zero "/>
                                                                                </label>
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
                                </div>
                            </div>

                        </aside>
                        <div id="content">
                            <div className="main-products-wrapper">
                                <div className="products-filter">
                                    <div className="grid-list">
                                        <button id="btn-grid-view" className="view-btn active" data-toggle="tooltip" title="" data-view="grid" data-original-title="Grid"/>
                                        <button id="btn-list-view" className="view-btn " data-toggle="tooltip" title="" data-view="list" data-original-title="List"/>
                                        <a href="https://www.journal-theme.com/1/index.php?route=product/compare" id="compare-total" className="compare-btn">
                                            <span className="links-text">Product Compare</span>
                                            <span className="count-badge count-zero ">0</span>
                                        </a>
                                    </div>
                                    <div className="select-group">
                                        {/*<div className="input-group input-group-sm sort-by">*/}
                                        {/*    <label className="input-group-addon" htmlFor="input-sort">Sort By:</label>*/}
                                        {/*    <select id="input-sort" className="form-control" >*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=p.sort_order&amp;order=ASC"*/}
                                        {/*            >Default*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=pd.name&amp;order=ASC">Name*/}
                                        {/*            (A - Z)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=pd.name&amp;order=DESC">Name*/}
                                        {/*            (Z - A)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=p.price&amp;order=ASC">Price*/}
                                        {/*            (Low &gt; High)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=p.price&amp;order=DESC">Price*/}
                                        {/*            (High &gt; Low)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=rating&amp;order=DESC">Rating*/}
                                        {/*            (Highest)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=rating&amp;order=ASC">Rating*/}
                                        {/*            (Lowest)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=p.model&amp;order=ASC">Model*/}
                                        {/*            (A - Z)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;sort=p.model&amp;order=DESC">Model*/}
                                        {/*            (Z - A)*/}
                                        {/*        </option>*/}
                                        {/*    </select>*/}
                                        {/*</div>*/}
                                        <div className="input-group input-group-sm per-page">
                                            <label className="input-group-addon" htmlFor="input-limit">Show:</label>
                                            <select id="input-limit" className="form-control" value={this.state.value} onChange={this.handleChange}>
                                                <option value="12">12</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="75">75</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-products product-grid">
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip" data-tooltip-class="product-grid quickview-tooltip" data-placement="top" title="" 
                                                        //onClick="quickview('360')" 
                                                        data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-500x500.jpg 2x"
                                                            width="250" height="250" alt="Headphones" title="Headphones"
                                                            className="img-responsive img-first"/>
                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-500x500.png 2x"
                                                                width="250" height="250" alt="Headphones"
                                                                title="Headphones"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                    <span className="product-label product-label-146 product-label-diagonal"><b>Custom Labels</b></span>
                                                    <span className="product-label product-label-28 product-label-default"><b>-70 %</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 519</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360">Headphones</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-new">$1,200.80</span>
                                                        <span className="price-old">$3,960.80</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$999.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="360"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('360')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('360')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="360"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('42')"
                                                       data-original-title="Quickview"><span
                                                        className="btn-text">Quickview</span></a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-500x500w.jpg 2x"
                                                            width="250" height="250" alt="Apple Cinema 30&quot;"
                                                            title="Apple Cinema 30&quot;"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-500x500w.jpg 2x"
                                                                width="250" height="250" alt="Apple Cinema 30&quot;"
                                                                title="Apple Cinema 30&quot;"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-28 product-label-default"><b>-10 %</b></span>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 15</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42">Apple Cinema 30"</a>
                                                </div>

                                                <div className="description">The 30-inch Apple Cinema HD Display
                                                    delivers an amazing 2560 x 1600 pixel resolution. Designed
                                                    specifically for the creative professional, this display provides
                                                    more space for easier access to all the tools and palettes needed to
                                                    edit, format and composite your work. Combine this display with a
                                                    Mac ..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-new">$110.00</span>
                                                        <span className="price-old">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$90.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="2"
                                                                       data-minimum="2" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="42"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                className="btn-text">Add to Cart</span></a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('42')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('42')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="42"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('30')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=30" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/canon_eos_5d_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/canon_eos_5d_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/canon_eos_5d_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="Canon EOS 5D"
                                                            title="Canon EOS 5D" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/canon_eos_5d_3-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/canon_eos_5d_3-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/canon_eos_5d_3-500x500w.jpg 2x"
                                                                width="250" height="250" alt="Canon EOS 5D"
                                                                title="Canon EOS 5D"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=9">Canon</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2">
                                                        <span className="stats-label">Model:</span>
                                                        <span>Product 3</span>
                                                    </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=30">Canon EOS 5D</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="30"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('30', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('30')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('30')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('30', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="30"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=30"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  out-of-stock has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('418')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=418"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/5-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/5-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/5-500x500.png 2x"
                                                            width="250" height="250" alt="Classic Armchair"
                                                            title="Classic Armchair"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                                width="250" height="250" alt="Classic Armchair"
                                                                title="Classic Armchair"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-30 product-label-diagonal"><b>Out Of Stock</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=21">Sarah Bloom</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 289</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=418">Classic Armchair</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$4,418.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$3,680.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="418"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('418', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                className="btn-text">Add to Cart</span></a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('418')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('418')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('418', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="418"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=418"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('419')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=419" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/7-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/7-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/7-500x500.png 2x"
                                                            width="250" height="250" alt="Comfortable Armchair"
                                                            title="Comfortable Armchair"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                                width="250" height="250" alt="Comfortable Armchair"
                                                                title="Comfortable Armchair"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=19">Olivia Smith</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 1899</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=419">Comfortable Armchair</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$4,418.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$3,680.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="419"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('419', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('419')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('419')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('419', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="419"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=419"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-countdown has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('420')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-500x500.png 2x"
                                                            width="250" height="250" alt="Gray Armchair "
                                                            title="Gray Armchair " className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                                width="250" height="250" alt="Gray Armchair "
                                                                title="Gray Armchair "
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                </div>

                                                <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                    <div>273 <span>Day</span></div>
                                                    <div>17 <span>Hour</span></div>
                                                    <div>55 <span>Min</span></div>
                                                    <div>52 <span>Sec</span></div>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=20">Sarah Bell</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 889</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420">Gray Armchair </a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-new">$120.80</span>
                                                        <span className="price-old">$818.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$99.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="420"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('420', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('420')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('420')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('420', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="420"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('47')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=47"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/hp_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="HP LP3065" title="HP LP3065"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-500x500w.jpg 2x"
                                                                width="250" height="250" alt="HP LP3065"
                                                                title="HP LP3065" className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=7">Hewlett-Packard</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 21</span></span>
                                                </div>

                                                <div className="name">
                                                    <a
                                                    href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=47">HP
                                                    LP3065</a></div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="47"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('47', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('47')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('47')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('47', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="47"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=47"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('28')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=28"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/htc_touch_hd_1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/htc_touch_hd_1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/htc_touch_hd_1-500x500.jpg 2x"
                                                            width="250" height="250" alt="HTC Touch HD"
                                                            title="HTC Touch HD" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/htc_touch_hd_3-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/htc_touch_hd_3-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/htc_touch_hd_3-500x500.jpg 2x"
                                                                width="250" height="250" alt="HTC Touch HD"
                                                                title="HTC Touch HD"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span> <span><a
                                                        href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=5">HTC</a></span></span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 1</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=28">HTC Touch HD</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="28"/>
                                                                    <span>
                                                                        <i className="fa fa-angle-up"/>
                                                                        <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('28', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('28')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('28')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('28', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="28"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=28"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('41')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=41" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/imac_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/imac_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/imac_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="iMac" title="iMac"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/imac_3-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/imac_3-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/imac_3-500x500w.jpg 2x"
                                                                width="250" height="250" alt="iMac" title="iMac"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 14</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=41">iMac</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="41"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('41', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('41')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('41')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('41', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="41"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=41"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('40')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=40"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-250x250h.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-500x500h.jpg 2x"
                                                            width="250" height="250" alt="iPhone" title="iPhone"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_4-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_4-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_4-500x500w.jpg 2x"
                                                                width="250" height="250" alt="iPhone" title="iPhone"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>product 11</span>
                                                </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=40">iPhone</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$123.20</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$101.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="40"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('40', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('40')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('40')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('40', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="40"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=40"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('48')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=48"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_classic_1-250x250h.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_classic_1-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_classic_1-500x500h.jpg 2x"
                                                            width="250" height="250" alt="iPod Classic"
                                                            title="iPod Classic" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_classic_2-250x250h.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_classic_2-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_classic_2-500x500h.jpg 2x"
                                                                width="250" height="250" alt="iPod Classic"
                                                                title="iPod Classic"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>product 20</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=48">iPod Classic</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="48"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('48', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('48')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('48')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('48', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="48"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=48"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('36')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=36"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_nano_1-250x250h.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_nano_1-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_nano_1-500x500h.jpg 2x"
                                                            width="250" height="250" alt="iPod Nano" title="iPod Nano"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_nano_3-250x250h.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_nano_3-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_nano_3-500x500h.jpg 2x"
                                                                width="250" height="250" alt="iPod Nano"
                                                                title="iPod Nano" className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 9</span>
                                                    </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=36">iPod Nano</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="36"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('36', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('36')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('36')"
                                                               data-original-title="Compare this Product"><span
                                                                className="btn-text">Compare this Product</span></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('36', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="36"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=36"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('34')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=34" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_shuffle_1-250x250h.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_shuffle_1-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_shuffle_1-500x500h.jpg 2x"
                                                            width="250" height="250" alt="iPod Shuffle"
                                                            title="iPod Shuffle" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_shuffle_3-250x250h.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_shuffle_3-250x250h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_shuffle_3-500x500h.jpg 2x"
                                                                width="250" height="250" alt="iPod Shuffle"
                                                                title="iPod Shuffle"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span><a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 7</span>
                                                    </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=34">iPod Shuffle</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="34"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('34', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title="" //onClick="wishlist.add('34')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('34')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('34', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="34"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=34"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('32')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=32"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_touch_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_touch_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_touch_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="iPod Touch" title="iPod Touch"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_touch_7-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_touch_7-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/ipod_touch_7-500x500w.jpg 2x"
                                                                width="250" height="250" alt="iPod Touch"
                                                                title="iPod Touch"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 5</span>
                                                    </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=32">iPod Touch</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$122.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$100.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="32"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('32', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('32')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('32')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('32', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="32"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=32"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('421')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=421" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                            width="250" height="250" alt="Lazy Armchair"
                                                            title="Lazy Armchair" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/10-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/10-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/10-500x500.png 2x"
                                                                width="250" height="250" alt="Lazy Armchair"
                                                                title="Lazy Armchair"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 989</span>
                                                </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=421">Lazy Armchair</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$4,418.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$3,680.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="421"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('421', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('421')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('421')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('421', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="421"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=421"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('43')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=43" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="MacBook" title="MacBook"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_3-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_3-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_3-500x500w.jpg 2x"
                                                                width="250" height="250" alt="MacBook" title="MacBook"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>


                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 16</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=43">MacBook</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$602.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$500.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="43"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('43', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('43')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('43')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('43', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="43"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=43"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('44')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=44"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_air_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_air_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_air_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="MacBook Air"
                                                            title="MacBook Air" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_air_3-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_air_3-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_air_3-500x500w.jpg 2x"
                                                                width="250" height="250" alt="MacBook Air"
                                                                title="MacBook Air"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 17</span></span>
                                                </div>

                                                <div className="name">
                                                    <a
                                                    href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=44">MacBook Air</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$1,202.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$1,000.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x"/>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="44"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('44', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('44')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('44')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('44', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="44"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=44"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('45')"
                                                       data-original-title="Quickview"><span
                                                        className="btn-text">Quickview</span></a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=45"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_pro_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_pro_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_pro_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="MacBook Pro"
                                                            title="MacBook Pro" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_pro_4-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_pro_4-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/macbook_pro_4-500x500w.jpg 2x"
                                                                width="250" height="250" alt="MacBook Pro"
                                                                title="MacBook Pro"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 18</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=45">MacBook Pro</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$2,402.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$2,000.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="45"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('45', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('45')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('45')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('45', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="45"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=45"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('422')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=422"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/4-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/4-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/4-500x500.png 2x"
                                                            width="250" height="250" alt="Modern Chair "
                                                            title="Modern Chair " className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-500x500.png 2x"
                                                                width="250" height="250" alt="Modern Chair "
                                                                title="Modern Chair "
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=17">Fort Cane</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 339</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=422">Modern Chair </a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$2,018.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$1,680.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="422"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('422', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('422')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('422')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('422', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="422"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=422"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('31')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=31"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/nikon_d300_1-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/nikon_d300_1-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/nikon_d300_1-500x500w.jpg 2x"
                                                            width="250" height="250" alt="Nikon D300" title="Nikon D300"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/nikon_d300_5-250x250w.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/nikon_d300_5-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/nikon_d300_5-500x500w.jpg 2x"
                                                                width="250" height="250" alt="Nikon D300"
                                                                title="Nikon D300"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 4</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=31">Nikon D300</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$98.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$80.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="31"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('31', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('31')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('31')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('31', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="31"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=31"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('33')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=33" className="product-img ">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/samsung_syncmaster_941bw-250x250w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/samsung_syncmaster_941bw-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/samsung_syncmaster_941bw-500x500w.jpg 2x"
                                                            width="250" height="250" alt="Samsung SyncMaster 941BW"
                                                            title="Samsung SyncMaster 941BW"
                                                            className="img-responsive img-first"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Product 6</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=33">Samsung SyncMaster 941BW</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$242.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$200.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="33"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('33', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('33')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title="" //onClick="compare.add('33')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('33', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="33"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=33"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('423')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=423"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/9-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/9-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/9-500x500.png 2x"
                                                            width="250" height="250" alt="Yellow Modern Armchair"
                                                            title="Yellow Modern Armchair"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-500x500.png 2x"
                                                                width="250" height="250" alt="Yellow Modern Armchair"
                                                                title="Yellow Modern Armchair"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span
                                                        className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=21">Sarah Bloom</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 189</span></span>
                                                </div>

                                                <div className="name"><a
                                                    href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=423">Yellow
                                                    Modern Armchair</a></div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$4,418.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$3,680.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="423"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('423', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('423')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('423')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('423', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="423"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=423"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-countdown has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('280')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280" className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-500x500.jpg 2x"
                                                            width="250" height="250" alt="Anti-Dandruff Shampoo"
                                                            title="Anti-Dandruff Shampoo"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Anti-Dandruff Shampoo"
                                                                title="Anti-Dandruff Shampoo"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                </div>

                                                <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                    <div>273 <span>Day</span></div>
                                                    <div>17 <span>Hour</span></div>
                                                    <div>55 <span>Min</span></div>
                                                    <div>51 <span>Sec</span></div>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=20">Sarah Bell</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 88</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280">Anti-Dandruff Shampoo</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-new">$120.80</span> <span
                                                        className="price-old">$818.00</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$99.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="280"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('280', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('280')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('280')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('280', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="280"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  has-extra-button" style={{}}>
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title="" //onClick="quickview('378')"
                                                       data-original-title="Quickview"><span
                                                        className="btn-text">Quickview</span></a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=378"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-250x250.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-500x500.png 2x"
                                                            width="250" height="250" alt="Apple Watch"
                                                            title="Apple Watch" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-500x500.jpg 2x"
                                                                width="250" height="250" alt="Apple Watch"
                                                                title="Apple Watch"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 601</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=378">Apple Watch</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">$1,440.80</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:$1,199.00</span>
                                                </div>

                                                <div className="rating no-rating ">
                                                    <div className="rating-stars">
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                        <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"/></span>
                                                    </div>
                                                </div>

                                                <div className="buttons-wrapper">
                                                    <div className="button-group">
                                                        <div className="cart-group">
                                                            <div className="stepper">
                                                                <input type="text" name="quantity" defaultValue="1"
                                                                       data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="378"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               //onClick="cart.add('378', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="wishlist.add('378')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               //onClick="compare.add('378')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           //onClick="cart.add('378', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="378"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=378"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ias-spinner" id="ias_spinner_1556841604000" style={{}}>
                                        <i className="fa fa-spinner fa-spin"/>
                                    </div>
                                </div>
                                <div className="row pagination-results" style={{display: 'none'}}>
                                    <div className="row pagination-results">
                                        <div className="col-sm-6 text-left">
                                            <ul className="pagination">
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog">|&lt;</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog" className="prev">&lt;</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog">1</a>
                                                </li>
                                                <li className="active"><span>2</span></li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=3">3</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=4">4</a>
                                                </li>
                                                <li><a
                                                    href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=5">5</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=6">6</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=7">7</a>
                                                </li>
                                                <li><a
                                                    href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=8">8</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=9">9</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=3" className="next">&gt;</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/catalog&amp;page=14">&gt;|</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 text-right">Showing 13 to 24 of 168 (14 Pages)</div>
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