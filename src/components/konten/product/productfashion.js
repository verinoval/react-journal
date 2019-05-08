import React,{Component} from 'react';
import {NavLink} from "react-router-dom";


export default class Productfashion extends Component{
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
                    <li><a>Fashion</a></li>
                </ul>
                <h1 className="title page-title"><span>Fashion</span></h1>
                <div className="container">
                    <div className="row">
                        <aside id="column-left" className="side-column">
                            <div className="grid-rows">
                                <div className="grid-row grid-row-column-left-1">
                                    <div className="grid-cols">
                                        <div className="grid-col grid-col-column-left-1-1">
                                            <div className="grid-items">
                                                <div className="grid-item grid-item-column-left-1-1-1">
                                                    <div className="module module-blocks module-blocks-250 blocks-grid">
                                                        <div className="module-body">
                                                            <div className="module-item module-item-1 no-expand">
                                                                <div className="block-body expand-block">
                                                                    <div className="block-wrapper">
                                                                        <div className="block-content expand-content block-image">
                                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-230x230.jpg"
                                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-230x230.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-460x460.jpg 2x"
                                                                                alt="" width="230" height="230"/>
                                                                                <div className="block-expand-overlay">
                                                                                    <a className="block-expand btn"/>
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
                                        <div className="grid-col grid-col-column-left-1-2">
                                            <div className="grid-items">
                                                <div className="grid-item grid-item-column-left-1-2-1">
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
                                                                            <a href="#filter-5cd14c0de4847-collapse-1"
                                                                               className="accordion-toggle " data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="p">
                                                                                Price
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5cd14c0de4847-collapse-1">
                                                                        <div className="panel-body">
                                                                            <div className="filter-price" id="filter-filter-5cd14c0de4847-1">
                                                                                <div className="range-slider">
                                                                                    <span className="irs js-irs-0">
                                                                                        <span className="irs">
                                                                                            <span className="irs-line" tabIndex="0">
                                                                                                <span className="irs-line-left"/>
                                                                                                <span className="irs-line-mid"/>
                                                                                                <span className="irs-line-right"/>
                                                                                            </span>
                                                                                            <span className="irs-min" style={{visibility: 'hidden'}}>£54</span>
                                                                                            <span className="irs-max" style={{visibility: 'hidden'}}>£553</span>
                                                                                            <span className="irs-from" style={{visibility: 'visible', left: '-4.14847%'}}>£54</span>
                                                                                            <span className="irs-to" style={{visibility: 'visible', left: '87.5546%'}}>£553</span>
                                                                                            <span className="irs-single" style={{visibility: 'hidden', left: '32.7511%'}}>£54 — £553</span>
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
                                                                                    <span className="currency-symbol currency-left">£</span>

                                                                                    <input type="text" className="filter-price-min" name="min" data-min="54" defaultValue="54"/>
                                                                                        <span className="currency-symbol currency-left">£</span>
                                                                                        <input type="text" className="filter-price-max" name="max" data-max="553" defaultValue="553"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-c panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-2" className="accordion-toggle "
                                                                               data-toggle="collapse" aria-expanded="true" data-filter="c">
                                                                                Subcategories
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5cd14c0de4847-collapse-2">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="105"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Accesories" title="Accesories" className="img-responsive"/>
                                                                                            <span className="links-text">Accesories</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="60"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Dresses" title="Dresses" className="img-responsive"/>
                                                                                            <span className="links-text">Dresses</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="113"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Pants" title="Pants" className="img-responsive"/>
                                                                                            <span className="links-text">Pants</span>
                                                                                            <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="112"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="T-Shirts" title="T-Shirts" className="img-responsive"/>
                                                                                            <span className="links-text">T-Shirts</span>
                                                                                            <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="108"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/sweater-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/sweater-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/sweater-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Tops" title="Tops" className="img-responsive"/>
                                                                                            <span className="links-text">Tops</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-m image-only panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-3"
                                                                               className="accordion-toggle " data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="m">
                                                                                Brands
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5cd14c0de4847-collapse-3">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="12"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/awesome-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/awesome-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/awesome-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Awesome Brand" title="" className="img-responsive" data-toggle="tooltip"
                                                                                             data-tooltip-class="filter-tooltip-36" data-placement="top" data-original-title="Awesome Brand"/>
                                                                                            <span className="links-text">Awesome Brand</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="13"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Chic D'or" title="" className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top" data-original-title="Chic D'or"/>
                                                                                            <span className="links-text">Chic D'or</span>
                                                                                            <span className="count-badge ">5</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="15"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/erikson-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/erikson-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/erikson-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Ericksson" title="" className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top" data-original-title="Ericksson"/>
                                                                                            <span className="links-text">Ericksson</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="17"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/FC-fashion-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/FC-fashion-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/FC-fashion-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="Fort Cane" title="" className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top" data-original-title="Fort Cane"/>
                                                                                            <span className="links-text">Fort Cane</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="16"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/fashion-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/fashion-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/fashion-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="NY Fashion" title="" className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top" data-original-title="NY Fashion"/>
                                                                                            <span className="links-text">NY Fashion</span>
                                                                                            <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="11"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/superbrand-38x38.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/superbrand-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/superbrand-76x76.jpg 2x"
                                                                                            width="38" height="38" alt="SuperBrand" title="" className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top" data-original-title="SuperBrand"/>
                                                                                            <span className="links-text">SuperBrand</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a15 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-4"
                                                                               className="accordion-toggle collapsed" data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="a15">
                                                                                Material
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5cd14c0de4847-collapse-4">
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
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="bio%20cotton"/>
                                                                                    <span className="links-text">bio cotton</span>
                                                                                    <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="cashmere"/>
                                                                                    <span className="links-text">cashmere</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="cotton"/>
                                                                                    <span className="links-text">cotton</span>
                                                                                    <span className="count-badge ">8</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="rayon"/>
                                                                                    <span className="links-text">rayon</span>
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
                                                                <div className="module-item module-item-a13 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-5"
                                                                               className="accordion-toggle collapsed" data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="a13">
                                                                                Style
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5cd14c0de4847-collapse-5">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="beachwear"/>
                                                                                    <span className="links-text">beachwear</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="casual"/>
                                                                                    <span className="links-text">casual</span>
                                                                                    <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="daytime"/>
                                                                                    <span className="links-text">daytime</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="riding"/>
                                                                                        <span className="links-text">riding</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a12 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-6"
                                                                               className="accordion-toggle collapsed" data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="a12">
                                                                                Occasion
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5cd14c0de4847-collapse-6">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="a12" defaultValue="party"/>
                                                                                    <span className="links-text">party</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-a14 panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-7"
                                                                               className="accordion-toggle collapsed" data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="a14">
                                                                                Dress Length
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse" id="filter-5cd14c0de4847-collapse-7">
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
                                                                            <a href="#filter-5cd14c0de4847-collapse-8"
                                                                               className="accordion-toggle " data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="o2">
                                                                                Color
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5cd14c0de4847-collapse-8">
                                                                        <div className="panel-body">
                                                                            <div className="filter-radio">
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="54"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-76x76.png 2x"
                                                                                            width="38" height="38"
                                                                                            alt="Burgundy" title="" className="img-responsive"
                                                                                            data-toggle="tooltip" data-tooltip-class="filter-tooltip-36"
                                                                                             data-placement="top" data-original-title="Burgundy"/>
                                                                                             <span className="links-text">Burgundy</span>
                                                                                    <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="53"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/9-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/9-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/9-76x76.png 2x"
                                                                                            width="38" height="38" alt="Dark Blue" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                                                            data-original-title="Dark Blue"/>
                                                                                            <span className="links-text">Dark Blue</span>
                                                                                            <span className="count-badge ">3</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="57"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/14-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/14-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/14-76x76.png 2x"
                                                                                            width="38" height="38" alt="Dark Gray" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                                                            data-original-title="Dark Gray"/>
                                                                                            <span className="links-text">Dark Gray</span>
                                                                                            <span className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="52"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/5-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/5-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/5-76x76.png 2x"
                                                                                            width="38" height="38" alt="Gold" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                                                            data-original-title="Gold"/>
                                                                                            <span className="links-text">Gold</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="50"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/6-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/6-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/6-76x76.png 2x"
                                                                                            width="38" height="38" alt="Light Blue" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                                                            data-original-title="Light Blue"/>
                                                                                            <span className="links-text">Light Blue</span>
                                                                                            <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="56"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/3-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/3-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/3-76x76.png 2x"
                                                                                            width="38" height="38" alt="Orange" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                                                            data-original-title="Orange"/>
                                                                                            <span className="links-text">Orange</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="58"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/13-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/13-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/13-76x76.png 2x"
                                                                                            width="38" height="38" alt="Yellow" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                                                            data-original-title="Yellow"/>
                                                                                            <span className="links-text">Yellow</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="23"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-76x76.png 2x"
                                                                                            width="38" height="38" alt="Turquoise" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top" data-original-title="Turquoise"/>
                                                                                            <span className="links-text">Turquoise</span>
                                                                                            <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="44"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-76x76.png 2x"
                                                                                            width="38" height="38" alt="Steel" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top" data-original-title="Steel"/>
                                                                                            <span className="links-text">Steel</span>
                                                                                            <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="45"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-38x38.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-76x76.png 2x"
                                                                                            width="38" height="38" alt="Red" title=""
                                                                                            className="img-responsive" data-toggle="tooltip"
                                                                                            data-tooltip-class="filter-tooltip-36"
                                                                                            data-placement="top" data-original-title="Red"/>
                                                                                            <span className="links-text">Red</span>
                                                                                            <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-o11 text-only panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-9" className="accordion-toggle "
                                                                               data-toggle="collapse" aria-expanded="true" data-filter="o11">
                                                                                Size
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5cd14c0de4847-collapse-9">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="59"/>
                                                                                        <span className="links-text">XS</span>
                                                                                        <span className="count-badge ">4</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="46"/>
                                                                                        <span className="links-text">S</span>
                                                                                    <span className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="47"/>
                                                                                        <span className="links-text">M</span>
                                                                                        <span className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="48"/>
                                                                                        <span className="links-text">L</span>
                                                                                        <span className="count-badge ">8</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="60"/>
                                                                                        <span className="links-text">XL</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="61"/>
                                                                                        <span className="links-text">XXL</span>
                                                                                        <span className="count-badge ">1</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-t panel">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-10"
                                                                               className="accordion-toggle collapsed" data-toggle="collapse"
                                                                               aria-expanded="false" data-filter="t">
                                                                                Tags
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse"
                                                                         id="filter-5cd14c0de4847-collapse-10">
                                                                        <div className="panel-body">
                                                                            <div className="filter-checkbox">
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="body"/>
                                                                                        <span className="links-text">body</span>
                                                                                    <span className="count-badge ">2</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="business"/>
                                                                                        <span className="links-text">business</span>
                                                                                    <span className="count-badge ">7</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="casual"/>
                                                                                        <span className="links-text">casual</span>
                                                                                    <span className="count-badge ">14</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="cool"/>
                                                                                        <span className="links-text">cool</span>
                                                                                        <span className="count-badge ">16</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="daily"/>
                                                                                        <span className="links-text">daily</span>
                                                                                        <span className="count-badge ">6</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="occasion"/>
                                                                                        <span className="links-text">occasion</span>
                                                                                    <span className="count-badge ">1</span>
                                                                                </label>
                                                                                <label>
                                                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="sport"/>
                                                                                        <span className="links-text">sport</span>
                                                                                    <span className="count-badge ">9</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="module-item module-item-q panel panel-active">
                                                                    <div className="panel-heading">
                                                                        <div className="panel-title">
                                                                            <a href="#filter-5cd14c0de4847-collapse-11"
                                                                               className="accordion-toggle "
                                                                               data-toggle="collapse"
                                                                               aria-expanded="true" data-filter="q">
                                                                                Availability
                                                                                <i className="fa fa-caret-down"/>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-collapse collapse in" id="filter-5cd14c0de4847-collapse-11">
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
                            <div id="content-top">
                                <div className="grid-rows">
                                    <div className="grid-row grid-row-content-top-1">
                                        <div className="grid-cols">
                                            <div className="grid-col grid-col-content-top-1-1">
                                                <div className="grid-items">
                                                    <div className="grid-item grid-item-content-top-1-1-1">
                                                        <div className="module module-blocks module-blocks-48 blocks-grid">
                                                            <div className="module-body">
                                                                <div className="module-item module-item-1">
                                                                    <div className="block-body expand-block">
                                                                        <div className="block-wrapper">
                                                                            <div className="block-content expand-content block-description">
                                                                                <p>The <b>category description</b> can
                                                                                    be positioned anywhere on the page
                                                                                    via the layout page builder inside
                                                                                    the Blocks module with full
                                                                                    typography control and advanced
                                                                                    container styling options.</p>

                                                                                <p>The <b>category image</b> can also be
                                                                                    added to the Category layouts
                                                                                    automatically via the Blocks module.
                                                                                    This allows for more creative
                                                                                    placements on the page. It can also
                                                                                    be enabled/disabled on any device
                                                                                    and comes with custom image
                                                                                    dimensions, including fit or fill
                                                                                    (crop) options for all system images
                                                                                    such as products, categories,
                                                                                    banners, sliders, etc.&nbsp;</p>

                                                                                <p><b>Advanced Product Filter</b> module
                                                                                    included. This is the most
                                                                                    comprehensive set of filtering tools
                                                                                    rivaling the top paid extensions. It
                                                                                    supports Opencart filters, price,
                                                                                    availability, category, brands,
                                                                                    options, attributes, tags, all
                                                                                    included in the same Journal 3
                                                                                    package.</p>

                                                                                <p><b>Ajax Infinite Scroll</b> with Load
                                                                                    More / Load Previous and browser <b>back
                                                                                        button support.</b> Load
                                                                                    products in category pages as you
                                                                                    scroll down or by clicking the Load
                                                                                    More button, or disable this feature
                                                                                    entirely and display the default
                                                                                    pagination.</p>

                                                                                <div className="block-expand-overlay">
                                                                                    <a className="block-expand btn"/>
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
                            </div>

                            <div className="refine-categories refine-carousel">
                                <div className="swiper"
                                     data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:9,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:6,&quot;spacing&quot;:20},&quot;760&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:7,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:4,&quot;spacing&quot;:20},&quot;760&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:5,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:10}}}"
                                     data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                    <div className="swiper-container swiper-container-horizontal">
                                        <div className="swiper-wrapper" style={{transform: 'translate3d(0, 0, 0)'}}>
                                            <div className="refine-item swiper-slide swiper-slide-visible swiper-slide-active"
                                                style={{width: 124.286, marginRight: 20}}>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105">
                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-120x120.jpg"
                                                        data-srcset="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-120x120.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-240x240.jpg 2x"
                                                        alt="Accesories"/>
                                                        <span className="refine-name">
                                                            <span className="links-text">Accesories</span>
                                                            <span className="count-badge ">3</span>
                                                        </span>
                                                </a>
                                            </div>
                                            <div className="refine-item swiper-slide swiper-slide-visible swiper-slide-next"
                                                style={{width: 124.286, marginRight: 20}}>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60">
                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-120x120.jpg"
                                                        data-srcset="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-120x120.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-240x240.jpg 2x"
                                                        alt="Dresses"/>
                                                        <span className="refine-name">
                                                            <span className="links-text">Dresses</span>
                                                            <span className="count-badge ">3</span>
                                                        </span>
                                                </a>
                                            </div>
                                            <div className="refine-item swiper-slide swiper-slide-visible"
                                                 style={{width: 124.286, marginRight: 20}}>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113">
                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-120x120.jpg"
                                                        data-srcset="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-120x120.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-240x240.jpg 2x"
                                                        alt="Pants"/>
                                                        <span className="refine-name">
                                                            <span className="links-text">Pants</span>
                                                            <span className="count-badge ">2</span>
                                                        </span>
                                                </a>
                                            </div>
                                            <div className="refine-item swiper-slide swiper-slide-visible"
                                                 style={{width: 124.286, marginRight: 20}}>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_112">
                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-120x120.jpg"
                                                        data-srcset="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-120x120.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-240x240.jpg 2x"
                                                        alt="T-Shirts"/>
                                                        <span className="refine-name">
                                                            <span className="links-text">T-Shirts</span>
                                                            <span className="count-badge ">5</span>
                                                        </span>
                                                </a>
                                            </div>
                                            <div className="refine-item swiper-slide swiper-slide-visible"
                                                 style={{width: 124.286, marginRight: 20}}>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108">
                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/sweater-120x120.jpg"
                                                        data-srcset="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/sweater-120x120.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/sweater-240x240.jpg 2x"
                                                        alt="Tops"/>
                                                        <span className="refine-name">
                                                            <span className="links-text">Tops</span>
                                                            <span className="count-badge ">4</span>
                                                        </span>
                                                </a>
                                            </div>
                                        </div>
                                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
                                        </div>
                                    <div className="swiper-buttons">
                                        <div className="swiper-button-prev swiper-button-disabled" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="true"/>
                                        <div className="swiper-button-next swiper-button-disabled" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="true"/>
                                    </div>
                                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                              tabIndex="0" role="button" aria-label="Go to slide 1"/>
                                    </div>
                                </div>
                            </div>
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
                                        {/*    <select id="input-sort" className="form-control">*/}
                                        {/*        <option*/}
                                        {/*            value=""*/}
                                        {/*            selected="selected">Default*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=pd.name&amp;order=ASC">Name*/}
                                        {/*            (A - Z)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=pd.name&amp;order=DESC">Name*/}
                                        {/*            (Z - A)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=p.price&amp;order=ASC">Price*/}
                                        {/*            (Low &gt; High)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=p.price&amp;order=DESC">Price*/}
                                        {/*            (High &gt; Low)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=rating&amp;order=DESC">Rating*/}
                                        {/*            (Highest)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=rating&amp;order=ASC">Rating*/}
                                        {/*            (Lowest)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=p.model&amp;order=ASC">Model*/}
                                        {/*            (A - Z)*/}
                                        {/*        </option>*/}
                                        {/*        <option*/}
                                        {/*            value="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;sort=p.model&amp;order=DESC">Model*/}
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
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title=""
                                                       // onClick="quickview('310')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=310"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Applique T-Shirt"
                                                            title="Applique T-Shirt"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Applique T-Shirt"
                                                                title="Applique T-Shirt"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=17">Fort Cane</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 76</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=310">Applique T-Shirt</a>
                                                </div>

                                                <div className="description">Product descrptioin, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£154.84</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£128.01</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="310"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('310', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('310')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('310')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('310', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="310"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=310"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('300')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=300"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-500x500.jpg 2x"
                                                            width="250" height="250" alt="Black Lace Dress"
                                                            title="Black Lace Dress"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-500x500.jpg 2x"
                                                                width="250" height="250" alt="Black Lace Dress"
                                                                title="Black Lace Dress"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=13">Chic D'or</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 30</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=300">Black Lace Dress</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£434.14</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£360.76</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="300"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('300', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                className="btn-text">Add to Cart</span></a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('300')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('300')"
                                                               data-original-title="Compare this Product"><span
                                                                className="btn-text">Compare this Product</span></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('300', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="300"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=300"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('304')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=304"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/j1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/j1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/j1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Black Vintage T-Shirt"
                                                            title="Black Vintage T-Shirt"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/j2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/j2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/j2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Black Vintage T-Shirt"
                                                                title="Black Vintage T-Shirt"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-217 product-label-default"><b>Top Brand</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=16">NY Fashion</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 56</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=304">Black Vintage T-Shirt</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£289.35</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£240.10</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="304"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('304', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('304')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('304')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('304', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="304"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=304"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('299')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=299"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Bodycorn Dress"
                                                            title="Bodycorn Dress" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Bodycorn Dress"
                                                                title="Bodycorn Dress"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=12">Awesome Brand</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2">
                                                        <span className="stats-label">Model:</span>
                                                        <span>Model 48</span>
                                                    </span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=299">Bodycorn Dress</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£294.49</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£244.39</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="299"/>
                                                                    <span>
                                                                        <i className="fa fa-angle-up"/>
                                                                        <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('299', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('299')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('299')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('299', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="299"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=299"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('301')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=301"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Cashmere Pullover"
                                                            title="Cashmere Pullover"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Cashmere Pullover"
                                                                title="Cashmere Pullover"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=11">SuperBrand</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 59</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=301">Cashmere Pullover</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£507.64</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£422.01</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="301"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('301', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('301')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('301')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('301', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="301"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=301"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('305')"
                                                       data-original-title="Quickview"><span
                                                        className="btn-text">Quickview</span></a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=305"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-500x500.jpg 2x"
                                                            width="250" height="250" alt="Elegant Silk Pants"
                                                            title="Elegant Silk Pants"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8536633275_c894e8cee5_o-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8536633275_c894e8cee5_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8536633275_c894e8cee5_o-500x500.jpg 2x"
                                                                width="250" height="250" alt="Elegant Silk Pants"
                                                                title="Elegant Silk Pants"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                    <span className="product-label product-label-217 product-label-default"><b>Top Brand</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1"><span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=16">NY Fashion</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 99</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=305">Elegant Silk Pants</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£394.45</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£327.69</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="305"/>
                                                                    <span>
                                                                        <i className="fa fa-angle-up"/>
                                                                        <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('305', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('305')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('305')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('305', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="305"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=305"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('317')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=317"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/a1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/a1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/a1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Jackson Hat"
                                                            title="Jackson Hat" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/b2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Jackson Hat"
                                                                title="Jackson Hat"
                                                                className="img-responsive img-second"/>

                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-28 product-label-default"><b>-67 %</b></span>
                                                </div>

                                                <div className="countdown" data-date="Sun Jan 10 2021 00:00:00 +0000">
                                                    <div>248 <span>Day</span></div>
                                                    <div>08 <span>Hour</span></div>
                                                    <div>45 <span>Min</span></div>
                                                    <div>02 <span>Sec</span></div>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=17">Fort Cane</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 84</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=317">Jackson Hat</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-new">£73.99</span>
                                                        <span className="price-old">£220.99</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£60.64</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="317"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('317', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('317')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('317')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('317', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="317"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=317"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('303')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=303"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/r2-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/r2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/r2-500x500.jpg 2x"
                                                            width="250" height="250" alt="Jacob Turtleneck Sweater"
                                                            title="Jacob Turtleneck Sweater"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/r1-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/r1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/r1-500x500.jpg 2x"
                                                                width="250" height="250" alt="Jacob Turtleneck Sweater"
                                                                title="Jacob Turtleneck Sweater"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                    <span className="product-label product-label-217 product-label-default"><b>Top Brand</b></span>
                                                </div>

                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=16">NY Fashion</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 55</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=303">Jacob Turtleneck Sweater</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£272.44</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£226.01</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="303"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('303', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('303')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('303')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('303', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="303"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=303"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('308')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=308"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/n1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/n1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/n1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Journal T-Shirt"
                                                            title="Journal T-Shirt"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/n2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/n2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/n2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Journal T-Shirt"
                                                                title="Journal T-Shirt"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>


                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=11">SuperBrand</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 90</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=308">Journal T-Shirt</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£235.69</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£195.39</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="308"/>
                                                                        <span>
                                                                            <i className="fa fa-angle-up"/>
                                                                            <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('308', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('308')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('308')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('308', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="308"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=308"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-layout  out-of-stock has-countdown has-extra-button">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <div className="quickview-button">
                                                    <a className="btn btn-quickview" data-toggle="tooltip"
                                                       data-tooltip-class="product-grid quickview-tooltip"
                                                       data-placement="top" title=""
                                                       // onClick="quickview('307')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=307"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/k1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/k1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/k1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Nick Graphic Tee"
                                                            title="Nick Graphic Tee"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/k2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/k2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/k2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Nick Graphic Tee"
                                                                title="Nick Graphic Tee"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>

                                                <div className="product-labels">
                                                    <span className="product-label product-label-28 product-label-default"><b>-52 %</b></span>
                                                    <span className="product-label product-label-30 product-label-diagonal"><b>Out Of Stock</b></span>
                                                </div>

                                                <div className="countdown" data-date="Thu Jun 13 2024 00:00:00 +0000">
                                                    <div>37 <span>Day</span></div>
                                                    <div>08 <span>Hour</span></div>
                                                    <div>45 <span>Min</span></div>
                                                    <div>02 <span>Sec</span></div>
                                                </div>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=13">Chic D'or</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 66</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=307">Nick Graphic Tee</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-new">£294.49</span>
                                                        <span className="price-old">£610.54</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£244.39</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="307"/>
                                                                    <span>
                                                                        <i className="fa fa-angle-up"/>
                                                                        <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('307', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('307')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('307')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('307', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="307"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=307"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('376')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=376"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/l1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/l1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/l1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Office Jacket"
                                                            title="Office Jacket" className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/l2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/l2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/l2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Office Jacket"
                                                                title="Office Jacket"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=17">Fort Cane</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 930</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=376">Office Jacket</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£147.49</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£121.89</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="376"/>
                                                                    <span>
                                                                        <i className="fa fa-angle-up"/>
                                                                        <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('376', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('376')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('376')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('376', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="376"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=376"
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
                                                       data-placement="top" title=""
                                                       // onClick="quickview('312')"
                                                       data-original-title="Quickview">
                                                        <span className="btn-text">Quickview</span>
                                                    </a>
                                                </div>

                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=312"
                                                   className="product-img has-second-image">
                                                    <div>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/g1-250x250.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/g1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/g1-500x500.jpg 2x"
                                                            width="250" height="250" alt="Ophelia Loose Blouse"
                                                            title="Ophelia Loose Blouse"
                                                            className="img-responsive img-first"/>

                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/g2-250x250.jpg"
                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/g2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/g2-500x500.jpg 2x"
                                                                width="250" height="250" alt="Ophelia Loose Blouse"
                                                                title="Ophelia Loose Blouse"
                                                                className="img-responsive img-second"/>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="caption">
                                                <div className="stats">
                                                    <span className="stat-1">
                                                        <span className="stats-label">Brand:</span>
                                                        <span>
                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=11">SuperBrand</a>
                                                        </span>
                                                    </span>
                                                    <span className="stat-2"><span className="stats-label">Model:</span> <span>Model 85</span></span>
                                                </div>

                                                <div className="name">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=312">Ophelia Loose Blouse</a>
                                                </div>

                                                <div className="description">Product description, along with any other
                                                    tab can be displayed as tabs, accordion or all-visible blocks in
                                                    grid format or one under the other.&nbsp; You can mix and match tabs
                                                    and blocks in any order and any position. Each tab can also be set
                                                    up as a link and point to other pages or open popup modul..
                                                </div>

                                                <div className="price">
                                                    <div>
                                                        <span className="price-normal">£154.84</span>
                                                    </div>
                                                    <span className="price-tax">Ex Tax:£128.01</span>
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
                                                                <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                    <input type="hidden" name="product_id" defaultValue="312"/>
                                                                    <span>
                                                                        <i className="fa fa-angle-up"/>
                                                                        <i className="fa fa-angle-down"/>
                                                                    </span>
                                                            </div>
                                                            <a className="btn btn-cart"
                                                               // onClick="cart.add('312', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                               data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                <span className="btn-text">Add to Cart</span>
                                                            </a>
                                                        </div>

                                                        <div className="wish-group">
                                                            <a className="btn btn-wishlist" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid wishlist-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="wishlist.add('312')"
                                                               data-original-title="Add to Wish List">
                                                                <span className="btn-text">Add to Wish List</span>
                                                            </a>

                                                            <a className="btn btn-compare" data-toggle="tooltip"
                                                               data-tooltip-class="product-grid compare-tooltip"
                                                               data-placement="top" title=""
                                                               // onClick="compare.add('312')"
                                                               data-original-title="Compare this Product">
                                                                <span className="btn-text">Compare this Product</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="extra-group">
                                                    <div>
                                                        <a className="btn btn-extra btn-extra-46"
                                                           // onClick="cart.add('312', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                           data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                            <span className="btn-text">Buy Now</span>
                                                        </a>
                                                        <a className="btn btn-extra btn-extra-93"
                                                           href="javascript:open_popup(22)" data-product_id="312"
                                                           data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;path=59&amp;product_id=312"
                                                           data-loading-text="<span class='btn-text'>Question</span>">
                                                            <span className="btn-text">Question</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pagination-results" style={{display: 'none'}}>
                                    <div className="col-sm-6 text-left">
                                        <ul className="pagination">
                                            <li className="active"><span>1</span></li>
                                            <li>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;page=2">2</a>
                                            </li>
                                            <li>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;page=2" className="next">&gt;</a>
                                            </li>
                                            <li>
                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59&amp;page=2">&gt;|</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 text-right">Showing 1 to 12 of 19 (2 Pages)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}