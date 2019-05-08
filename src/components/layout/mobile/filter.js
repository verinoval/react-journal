import React, {Component} from 'react';

export default class Mobilemilter extends Component{
    render() {
        return(
            <div className="mobile-container mobile-filter-container">
                <div className="mobile-wrapper-header"><span>Filter</span>
                    <button className="reset-filter btn">Clear</button>
                    <a className="x"/>
                </div>
                <div className="mobile-filter-wrapper">
                    <div className="module module-filter module-filter-36">
                        <h3 className="title module-title">

                        </h3>
                        <div className="module-body">
                            <div className="panel-group">
                                <div className="module-item module-item-p panel panel-active">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-1" className="accordion-toggle "
                                               data-toggle="collapse" aria-expanded="true" data-filter="p">
                                                Price
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" id="filter-5ccbd3a895edd-collapse-1">
                                        <div className="panel-body">
                                            <div className="filter-price" id="filter-filter-5ccbd3a895edd-1">
                                                <div className="range-slider">
                                                    <span className="irs js-irs-0">
                                                        <span className="irs">
                                                            <span className="irs-line" tabIndex="0">
                                                            <span className="irs-line-left"/>
                                                            <span className="irs-line-mid"/>
                                                            <span className="irs-line-right"/>
                                                        </span>
                                                        <span className="irs-min" style={{}}>$0</span>
                                                        <span className="irs-max" style={{}}>$7,450</span>
                                                        <span className="irs-from">0</span>
                                                        <span className="irs-to">0</span>
                                                        <span className="irs-single">0</span>
                                                    </span>
                                                        <span className="irs-grid"/>
                                                        <span className="irs-bar"/>
                                                        <span className="irs-shadow shadow-from"/>
                                                        <span className="irs-shadow shadow-to"/>
                                                        <span className="irs-slider from"/>
                                                        <span className="irs-slider to"/>
                                                    </span>
                                                    <input type="text"
                                                       className="js-range-slider irs-hidden-input"
                                                       defaultValue=""
                                                       tabIndex="-1"
                                                       readOnly=""/>
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
                                            <a href="#filter-5ccbd3a895edd-collapse-2" className="accordion-toggle " data-toggle="collapse" aria-expanded="true" data-filter="c">
                                                Subcategories
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" id="filter-5ccbd3a895edd-collapse-2">
                                        <div className="panel-body">
                                            <div className="filter-radio">
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="125"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-76x76.jpg 2x"
                                                            width="38" height="38" alt="Accessories" title="Accessories"
                                                            className="img-responsive"/>
                                                            <span className="links-text">Accessories</span>
                                                    <span className="count-badge ">4</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="164"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-76x76.jpg 2x"
                                                            width="38" height="38" alt="Body" title="Body"
                                                            className="img-responsive"/>
                                                            <span className="links-text">Body</span>
                                                    <span className="count-badge ">11</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="123"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-76x76.jpg 2x"
                                                            width="38" height="38" alt="Lipstick" title="Lipstick"
                                                            className="img-responsive"/>
                                                            <span className="links-text">Lipstick</span>
                                                            <span className="count-badge ">2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="216"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-76x76.jpg 2x"
                                                            width="38" height="38" alt="Makeup" title="Makeup"
                                                            className="img-responsive"/>
                                                            <span className="links-text">Makeup</span>
                                                    <span className="count-badge ">4</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="124/"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/28-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/28-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/28-76x76.jpg 2x"
                                                            width="38" height="38" alt="Mascara" title="Mascara"
                                                            className="img-responsive"/>
                                                            <span className="links-text">Mascara</span>
                                                            <span className="count-badge ">2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="c" defaultValue="122"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/basket4-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/basket4-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/basket4-76x76.jpg 2x"
                                                            width="38" height="38" alt="Spa" title="Spa"
                                                            className="img-responsive"/>
                                                            <span className="links-text">Spa</span>
                                                    <span className="count-badge ">4</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-m image-only panel panel-active"/>
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-3" className="accordion-toggle "
                                               data-toggle="collapse" aria-expanded="true" data-filter="m">
                                                Brands
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" id="filter-5ccbd3a895edd-collapse-3">
                                        <div className="panel-body">
                                            <div className="filter-radio">
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="13"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/chic-76x76.jpg 2x"
                                                            width="38" height="38" alt="Chic D'or" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Chic D'or"/>
                                                            <span className="links-text">Chic D'or</span>
                                                    <span className="count-badge ">4</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="7"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hp_logo-38x38w.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hp_logo-38x38w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/hp_logo-76x76w.jpg 2x"
                                                            width="38" height="38" alt="Hewlett-Packard" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Hewlett-Packard"/>
                                                            <span className="links-text">Hewlett-Packard</span>
                                                            <span className="count-badge ">1</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="18"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/mellisa-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/mellisa-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/mellisa-76x76.jpg 2x"
                                                            width="38" height="38" alt="Melissa Johnson" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Melissa Johnson"/>
                                                            <span className="links-text">Melissa Johnson</span>
                                                            <span className="count-badge ">6</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="19"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/olivia-fashion-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/olivia-fashion-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/olivia-fashion-76x76.jpg 2x"
                                                            width="38" height="38" alt="Olivia Smith" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Olivia Smith"/>
                                                            <span className="links-text">Olivia Smith</span>
                                                            <span className="count-badge ">5</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="20"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-beauty-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-beauty-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-beauty-76x76.jpg 2x"
                                                            width="38" height="38" alt="Sarah Bell" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Sarah Bell"/>
                                                            <span className="links-text">Sarah Bell</span>
                                                            <span className="count-badge ">6</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="m" defaultValue="21"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-cosmetics-38x38.jpg"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-cosmetics-38x38.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/brands/sarah-cosmetics-76x76.jpg 2x"
                                                            width="38" height="38" alt="Sarah Bloom" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Sarah Bloom"/>
                                                            <span className="links-text">Sarah Bloom</span>
                                                            <span className="count-badge ">4</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-a27 panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-4" className="accordion-toggle collapsed" data-toggle="collapse"
                                               aria-expanded="false" data-filter="a27">
                                                Attribute 2
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse" id="filter-5ccbd3a895edd-collapse-4">
                                        <div className="panel-body">
                                            <div className="filter-checkbox">
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a27" defaultValue="Example%201"/>
                                                        <span className="links-text">Example 1</span>
                                                        <span className="count-badge ">1</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-a13 panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-5" className="accordion-toggle collapsed" data-toggle="collapse"
                                               aria-expanded="false" data-filter="a13">
                                                Style
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse" id="filter-5ccbd3a895edd-collapse-5">
                                        <div className="panel-body">
                                            <div className="filter-checkbox">
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Formal"/>
                                                        <span className="links-text">Formal</span>
                                                    <span className="count-badge ">1</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="Fresh"/>
                                                        <span className="links-text">Fresh</span>
                                                    <span className="count-badge ">1</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="night"/>
                                                        <span className="links-text">night</span>
                                                        <span className="count-badge ">2</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a13" defaultValue="party"/>
                                                        <span className="links-text">party</span>
                                                        <span className="count-badge ">5</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-a15 panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-6" className="accordion-toggle collapsed" data-toggle="collapse"
                                               aria-expanded="false" data-filter="a15">
                                                Material
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse" id="filter-5ccbd3a895edd-collapse-6">
                                        <div className="panel-body">
                                            <div className="filter-checkbox">
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a15" defaultValue="pony%20hair"/>
                                                        <span className="links-text">pony hair</span><span
                                                        className="count-badge ">1</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-a26 panel">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-7"
                                               className="accordion-toggle collapsed" data-toggle="collapse"
                                               aria-expanded="false" data-filter="a26">
                                                Attribute 1
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse" id="filter-5ccbd3a895edd-collapse-7">
                                        <div className="panel-body">
                                            <div className="filter-checkbox">
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="a26" defaultValue="Sample%203"/>
                                                        <span className="links-text">Sample 3</span>
                                                    <span className="count-badge ">1</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-o2 image-only panel panel-active">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-8" className="accordion-toggle "
                                               data-toggle="collapse" aria-expanded="true" data-filter="o2">
                                                Color
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" id="filter-5ccbd3a895edd-collapse-8">
                                        <div className="panel-body">
                                            <div className="filter-radio">
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="54"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-38x38.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/12-76x76.png 2x"
                                                            width="38" height="38" alt="Burgundy" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Burgundy"/>
                                                            <span className="links-text">Burgundy</span>
                                                            <span className="count-badge ">6</span>
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
                                                    <span className="count-badge ">8</span>
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
                                                    <span className="count-badge ">9</span>
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
                                                    <span className="count-badge ">9</span>
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
                                                    <span className="count-badge ">6</span>
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
                                                            <span className="count-badge ">5</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="49"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/2-38x38.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/2-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/2-76x76.png 2x"
                                                            width="38" height="38" alt="Silver" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Silver"/>
                                                            <span className="links-text">Silver</span>
                                                            <span className="count-badge ">6</span>
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
                                                            <span className="count-badge ">8</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="23"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-38x38.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/1-76x76.png 2x"
                                                            width="38" height="38" alt="Turquoise" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Turquoise"/>
                                                            <span className="links-text">Turquoise</span>
                                                    <span className="count-badge ">1</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="24"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/10-38x38.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/10-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/10-76x76.png 2x"
                                                            width="38" height="38" alt="Violet" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Violet"/>
                                                            <span className="links-text">Violet</span>
                                                    <span className="count-badge ">2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="44"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-38x38.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/4-76x76.png 2x"
                                                            width="38" height="38" alt="Steel" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Steel"/>
                                                            <span className="links-text">Steel</span>
                                                    <span className="count-badge ">6</span>
                                                </label>
                                                <label>
                                                    <input type="radio" data-filter-trigger="" name="o2" defaultValue="45"/>
                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-38x38.png"
                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-38x38.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/colors/7-76x76.png 2x"
                                                            width="38" height="38" alt="Red" title=""
                                                            className="img-responsive" data-toggle="tooltip"
                                                            data-tooltip-class="filter-tooltip-36" data-placement="top"
                                                            data-original-title="Red"/>
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
                                            <a href="#filter-5ccbd3a895edd-collapse-9" className="accordion-toggle "
                                               data-toggle="collapse" aria-expanded="true" data-filter="o11">
                                                Size
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" id="filter-5ccbd3a895edd-collapse-9">
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
                                                        <span className="count-badge ">6</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="47"/>
                                                        <span className="links-text">M</span>
                                                    <span className="count-badge ">6</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="48"/>
                                                        <span className="links-text">L</span>
                                                    <span className="count-badge ">6</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="o11" defaultValue="60"/>
                                                        <span className="links-text">XL</span>
                                                    <span className="count-badge ">2</span>
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
                                            <a href="#filter-5ccbd3a895edd-collapse-10" className="accordion-toggle collapsed" data-toggle="collapse"
                                               aria-expanded="false" data-filter="t">
                                                Tags
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse" id="filter-5ccbd3a895edd-collapse-10">
                                        <div className="panel-body">
                                            <div className="filter-checkbox">
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="beauty"/>
                                                        <span className="links-text">beauty</span>
                                                        <span className="count-badge ">20</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="body"/>
                                                        <span className="links-text">body</span>
                                                    <span className="count-badge ">8</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="brush"/>
                                                        <span className="links-text">brush</span>
                                                    <span className="count-badge ">9</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="daily"/>
                                                        <span className="links-text">daily</span>
                                                    <span className="count-badge ">10</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="t"defaultValue="fresh"/>
                                                        <span className="links-text">fresh</span>
                                                    <span className="count-badge ">13</span>
                                                </label>
                                                <label>
                                                    <input type="checkbox" data-filter-trigger="" name="t" defaultValue="shampoo"/>
                                                        <span className="links-text">shampoo</span>
                                                        <span className="count-badge ">5</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-item module-item-q panel panel-active">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <a href="#filter-5ccbd3a895edd-collapse-11" className="accordion-toggle "
                                               data-toggle="collapse" aria-expanded="true" data-filter="q">
                                                Availability
                                                <i className="fa fa-caret-down"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel-collapse collapse in" id="filter-5ccbd3a895edd-collapse-11">
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

        );
    }

}