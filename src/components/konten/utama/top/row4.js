import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class TopRow4 extends Component{
    render() {
        return(
            <div className="grid-row grid-row-top-4">
                <div className="grid-cols">
                    <div className="grid-col grid-col-top-4-1">
                        <div className="grid-items">
                            <div className="grid-item grid-item-top-4-1-1">
                                <div className="module title-module module-title-145">
                                    <div className="title-wrapper">
                                        <h3>Featured Products</h3>
                                        <div className="title-divider"/>
                                        <div className="subtitle">Display any products as tabs or accordions
                                            with optional grid or carousel mode. Custom products per row per
                                            module and per breakpoint. Each module can display products in
                                            either grid or list view with different styles per module.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid-col grid-col-top-4-2">
                        <div className="grid-items">
                            <div className="grid-item grid-item-top-4-2-1">
                                <div className="module module-products module-products-27 module-products-grid carousel-mode">
                                    <div className="module-body">
                                        <div className="tab-container">
                                            <ul className="nav nav-tabs">
                                                <li className="tab-1 active">
                                                    <a href="#products-5cca534f9f6c9-tab-1"
                                                       data-toggle="tab">Featured</a>
                                                </li>
                                                <li className="tab-2">
                                                    <a href="#products-5cca534f9f6c9-tab-2"
                                                       data-toggle="tab">Latest</a>
                                                </li>
                                                <li className="tab-3">
                                                    <a href="#products-5cca534f9f6c9-tab-3"
                                                       data-toggle="tab">Bestsellers</a>
                                                </li>
                                                <li className="tab-4">
                                                    <a href="#products-5cca534f9f6c9-tab-4"
                                                       data-toggle="tab">Specials</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="module-item module-item-1 tab-pane active"
                                                     id="products-5cca534f9f6c9-tab-1">
                                                    <div className="swiper swiper-has-pages"
                                                         data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:4,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}}}"
                                                         data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                                        <div className="swiper-container swiper-container-horizontal">
                                                            <div className="swiper-wrapper product-grid"
                                                                 style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                                                <div className="product-layout swiper-slide has-extra-button swiper-slide-visible swiper-slide-active"
                                                                    style={{width: '294px', marginRight: '20px'}}>
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
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
                                                                                        width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-500x500.png 2x"
                                                                                            width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-second"/>
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
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 519</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360">Headphones</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('360')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="360"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="product-layout swiper-slide out-of-stock has-extra-button swiper-slide-visible swiper-slide-next"
                                                                    style={{width: '294px', marginRight: '20px'}}>
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('342')"
                                                                                   data-original-title="Quickview"><span
                                                                                    className="btn-text">Quickview</span></a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=342"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Women's Maria Pump" title="Women's Maria Pump" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/airmax_2-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/airmax_2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/airmax_2-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Women's Maria Pump" title="Women's Maria Pump" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>
                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-217 product-label-default"><b>Top Brand</b></span>
                                                                                <span className="product-label product-label-30 product-label-diagonal"><b>2-3 Days</b></span>
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
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 206</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=342">Women's Maria Pump</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$512.00</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$425.00</span>
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
                                                                                                <input type="hidden" name="product_id" defaultValue="342"/>
                                                                                                    <span>
                                                                                                        <i className="fa fa-angle-up"/>
                                                                                                        <i className="fa fa-angle-down"/>
                                                                                                    </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('342', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                            <span className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('342')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('342')"
                                                                                           data-original-title="Compare this Product"><span
                                                                                            className="btn-text">Compare this Product</span></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('342', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="342"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=342"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-zero-price has-extra-button swiper-slide-visible"
                                                                    style={{width: '294px', marginRight: '20px'}}>
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('365')"
                                                                                   data-original-title="Quickview"><span
                                                                                    className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=365" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/ks9500-curved-4k-suhd-tv-by-samsung-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/ks9500-curved-4k-suhd-tv-by-samsung-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/ks9500-curved-4k-suhd-tv-by-samsung-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Toshiba 5009 Smart TV" title="Toshiba 5009 Smart TV" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/curved-oled-tv-55ec9300-by-lg-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/curved-oled-tv-55ec9300-by-lg-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/curved-oled-tv-55ec9300-by-lg-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Toshiba 5009 Smart TV" title="Toshiba 5009 Smart TV" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                <span className="product-label product-label-133 product-label-diagonal"><b>Free</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 995</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=365">Toshiba 5009 Smart TV</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$2.00</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$0.00</span>
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
                                                                                                <input type="hidden" name="product_id" defaultValue="365"/>
                                                                                                    <span>
                                                                                                        <i className="fa fa-angle-up"/>
                                                                                                        <i className="fa fa-angle-down"/>
                                                                                                    </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('365', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                            <span className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('365')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('365')"
                                                                                           data-original-title="Compare this Product">
                                                                                            <span className="btn-text">Compare this Product</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('365', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="365"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=365"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="product-layout swiper-slide has-extra-button swiper-slide-visible"
                                                                    style={{width: '294px', marginRight: '20px'}}>
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('366')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=366" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/leica-m9-digital-camera-by-leica-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/leica-m9-digital-camera-by-leica-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/leica-m9-digital-camera-by-leica-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Leica Digital Camera" title="Leica Digital Camera" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-black-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-black-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-black-500x500.png 2x"
                                                                                            width="250" height="250" alt="Leica Digital Camera" title="Leica Digital Camera" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-270 product-label-diagonal"><b>Online Only</b></span>
                                                                                <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 994</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=366">Leica Digital Camera</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$2,628.80</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$2,189.00</span>
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
                                                                                            <input type="hidden" name="product_id" defaultValue="366"/>
                                                                                                    <span>
                                                                                                        <i className="fa fa-angle-up"/>
                                                                                                        <i className="fa fa-angle-down"/>
                                                                                                    </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('366', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                                            className="btn-text">Add to Cart</span></a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('366')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('366')"
                                                                                           data-original-title="Compare this Product">
                                                                                            <span className="btn-text">Compare this Product</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('366', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="366"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=366"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-extra-button"
                                                                    style={{width: '294px', marginRight: '20px'}}>
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('378')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=378" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-250x250.png"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-500x500.png 2x"
                                                                                        width="250" height="250" alt="Apple Watch" title="Apple Watch" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Apple Watch" title="Apple Watch" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 601</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=378">Apple Watch</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$1,440.80</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$1,199.00</span>
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('378')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="378"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=378"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="product-layout swiper-slide has-countdown has-extra-button"
                                                                    style={{width: '294px', marginright: '20px'}}>
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('287')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=287" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/28-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/28-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/28-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Mascara Curved Brush" title="Mascara Curved Brush" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/muller-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/muller-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/muller-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Mascara Curved Brush" title="Mascara Curved Brush" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-28 product-label-default"><b>-72 %</b></span>
                                                                            </div>

                                                                            <div className="countdown" data-date="Tue May 09 2023 00:00:00 +0000">
                                                                                <div>06 <span>Day</span></div>
                                                                                <div>20 <span>Hour</span></div>
                                                                                <div>30 <span>Min</span></div>
                                                                                <div>12 <span>Sec</span></div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=18">Melissa Johnson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 65</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=287">Mascara Curved Brush</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-new">$72.80</span>
                                                                                    <span className="price-old">$252.80</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$59.00</span>
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
                                                                                        <div
                                                                                            className="stepper">
                                                                                            <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                                            <input type="hidden" name="product_id" defaultValue="287"/>
                                                                                                <span>
                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('287', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                            <span className="btn-text">Add to Cart</span></a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('287')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('287')"
                                                                                           data-original-title="Compare this Product">
                                                                                            <span className="btn-text">Compare this Product</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('287', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="287"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=287"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
                                                        </div>
                                                        <div className="swiper-buttons">
                                                            <div className="swiper-button-prev swiper-button-disabled" tabIndex="0" role="button"
                                                                aria-label="Previous slide" aria-disabled="true"/>
                                                            <div className="swiper-button-next" tabIndex="0" role="button"
                                                                 aria-label="Next slide" aria-disabled="false"/>
                                                        </div>
                                                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                                                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                                tabIndex="0" role="button"
                                                                aria-label="Go to slide 1"/>
                                                                <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"/>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="module-item module-item-2 tab-pane" id="products-5cca534f9f6c9-tab-2">
                                                    <div className="swiper swiper-has-pages"
                                                         data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:4,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}}}"
                                                         data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                                        <div className="swiper-container swiper-container-horizontal">
                                                            <div className="swiper-wrapper product-grid" style={{transitionDuration: '0ms'}}>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('423')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=423"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/9-250x250.png"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/9-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/9-500x500.png 2x"
                                                                                        width="250" height="250" alt="Yellow Modern Armchair" title="Yellow Modern Armchair" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-500x500.png 2x"
                                                                                            width="250" height="250" alt="Yellow Modern Armchair" title="Yellow Modern Armchair" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=21">Sarah Bloom</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 189</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=423">Yellow
                                                                                Modern Armchair</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                            <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                                            <input type="hidden" name="product_id" defaultValue="423"/>
                                                                                                <span>
                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('423', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                                            className="btn-text">Add to Cart</span
                                                                                        ></a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('423')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="423"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=423"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('422')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=422" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/4-250x250.png"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/4-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/4-500x500.png 2x"
                                                                                        width="250" height="250" alt="Modern Chair " title="Modern Chair " className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/8-500x500.png 2x"
                                                                                            width="250" height="250" alt="Modern Chair " title="Modern Chair " className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-29 product-label-default"><b>New</b></span>
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
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 339</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=422">Modern Chair </a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$2,018.00</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$1,680.00</span>
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('422')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="422"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=422"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('421')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=421"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                                                        width="250" height="250" alt="Lazy Armchair" title="Lazy Armchair" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/10-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/10-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/10-500x500.png 2x"
                                                                                            width="250" height="250" alt="Lazy Armchair" title="Lazy Armchair" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1"><span
                                                                                    className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 989</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=421">Lazy Armchair</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                            <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('421')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="421"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=421"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-countdown has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('420')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-500x500.png 2x"
                                                                                        width="250" height="250" alt="Gray Armchair " title="Gray Armchair " className="img-responsive img-first"/>
                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                                                            width="250" height="250" alt="Gray Armchair " title="Gray Armchair " className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                            </div>

                                                                            <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                <div>274 <span>Day</span></div>
                                                                                <div>14 <span>Hour</span></div>
                                                                                <div>30 <span>Min</span></div>
                                                                                <div>12 <span>Sec</span></div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=20">Sarah Bell</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 889</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420">Gray Armchair </a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                            <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('420')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="420"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
                                                        </div>
                                                        <div className="swiper-buttons">
                                                            <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="false"/>
                                                            <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false"/>
                                                        </div>
                                                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"/>
                                                    </div>

                                                </div>
                                                <div className="module-item module-item-3 tab-pane" id="products-5cca534f9f6c9-tab-3">
                                                    <div className="swiper swiper-has-pages"
                                                         data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:4,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}}}"
                                                         data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                                        <div className="swiper-container swiper-container-horizontal">
                                                            <div className="swiper-wrapper product-grid" style={{transitionDuration: '0ms'}}>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
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
                                                                                        width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-500x500.png 2x"
                                                                                            width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-second"/>
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
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 519</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360">Headphones</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                                            className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist"
                                                                                           data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top"
                                                                                           title=""
                                                                                           //onClick="wishlist.add('360')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare"
                                                                                           data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top"
                                                                                           title=""
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="360"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview"
                                                                                   data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('300')"
                                                                                   data-original-title="Quickview"><span
                                                                                    className="btn-text">Quickview</span></a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=300"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-250x250.jpg"
                                                                                        srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Black Lace Dress" title="Black Lace Dress" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-250x250.jpg"
                                                                                            srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8337480771_2358b04366_o-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Black Lace Dress" title="Black Lace Dress" className="img-responsive img-second"/>
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
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 30</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=300">Black Lace Dress</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$708.80</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$589.00</span>
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
                                                                                            <input type="hidden" name="product_id" defaultValue="300"/>
                                                                                                <span>
                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('300', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>"><span
                                                                                            className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('300')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('300')"
                                                                                           data-original-title="Compare this Product">
                                                                                            <span className="btn-text">Compare this Product</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('300', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="300"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=300"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('299')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=299"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Bodycorn Dress" title="Bodycorn Dress" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f2-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f2-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Bodycorn Dress" title="Bodycorn Dress" className="img-responsive img-second"/>
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
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=12">Awesome Brand</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 48</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=299">Bodycorn Dress</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$480.80</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$399.00</span>
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
                                                                                            <input type="hidden" name="product_id" defaultValue="299"/>
                                                                                                <span>
                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('299', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                            <span className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('299')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('299')"
                                                                                           data-original-title="Compare this Product">
                                                                                            <span className="btn-text">Compare this Product</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('299', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="299"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=299"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('310')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=310" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Applique T-Shirt" title="Applique T-Shirt" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d2-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d2-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Applique T-Shirt" title="Applique T-Shirt" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1"><span
                                                                                    className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=17">Fort Cane</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 76</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=310">Applique T-Shirt</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                            </div>

                                                                            <div className="price">
                                                                                <div>
                                                                                    <span className="price-normal">$252.80</span>
                                                                                </div>
                                                                                <span className="price-tax">Ex Tax:$209.00</span>
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
                                                                                            <input type="hidden" name="product_id" defaultValue="310"/>
                                                                                                <span>
                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('310', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                            <span className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('310')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('310')"
                                                                                           data-original-title="Compare this Product">
                                                                                            <span className="btn-text">Compare this Product</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="extra-group">
                                                                                <div>
                                                                                    <a className="btn btn-extra btn-extra-46"
                                                                                       //onClick="cart.add('310', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                       data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                        <span className="btn-text">Buy Now</span>
                                                                                    </a>
                                                                                    <a className="btn btn-extra btn-extra-93"
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="310"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=310"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/></div>
                                                        <div className="swiper-buttons">
                                                            <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="false"/>
                                                            <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false"/>
                                                        </div>
                                                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"/>
                                                    </div>

                                                </div>
                                                <div className="module-item module-item-4 tab-pane" id="products-5cca534f9f6c9-tab-4">
                                                    <div className="swiper swiper-has-pages"
                                                         data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:4,&quot;spacing&quot;:20},&quot;1024&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:3,&quot;spacing&quot;:20},&quot;980&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20},&quot;470&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:20}}}"
                                                         data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                                        <div className="swiper-container swiper-container-horizontal">
                                                            <div className="swiper-wrapper product-grid" style={{transitionDuration: '0ms'}}>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('360')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/additional/apple-rose-500x500.png 2x"
                                                                                            width="250" height="250"
                                                                                            alt="Headphones" title="Headphones" className="img-responsive img-second"/>

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
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">Ericksson</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 519</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360">Headphones</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('360')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="360"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('42')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-250x250w.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-500x500w.jpg 2x"
                                                                                        width="250" height="250" alt="Apple Cinema 30&quot;" title="Apple Cinema 30&quot;" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-250x250w.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-500x500w.jpg 2x"
                                                                                            width="250" height="250" alt="Apple Cinema 30&quot;" title="Apple Cinema 30&quot;" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-28 product-label-default"><b>-10 %</b></span>
                                                                            </div>

                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">Apple</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Product 15</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42">Apple Cinema 30"</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution.
                                                                                Designed specifically for the creative professional, this displa..
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
                                                                                            <input type="text" name="quantity" defaultValue="2" data-minimum="2" className="form-control"/>
                                                                                            <input type="hidden" name="product_id" defaultValue="42"/>
                                                                                                <span>
                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                </span>
                                                                                        </div>
                                                                                        <a className="btn btn-cart"
                                                                                           //onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                           data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                            <span className="btn-text">Add to Cart</span>
                                                                                        </a>
                                                                                    </div>

                                                                                    <div className="wish-group">
                                                                                        <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('42')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="compare.add('42')"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="42"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="product-layout swiper-slide has-countdown has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('420')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420" className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-500x500.png 2x"
                                                                                        width="250" height="250" alt="Gray Armchair " title="Gray Armchair " className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/additional/qq-500x500.png 2x"
                                                                                            width="250" height="250" alt="Gray Armchair " title="Gray Armchair " className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                            </div>

                                                                            <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                <div>274 <span>Day</span></div>
                                                                                <div>14 <span>Hour</span></div>
                                                                                <div>30 <span>Min</span></div>
                                                                                <div>12 <span>Sec</span></div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=20">Sarah Bell</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 889</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420">Gray Armchair </a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                            <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('420')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="420"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-layout swiper-slide has-countdown has-extra-button">
                                                                    <div className="product-thumb">
                                                                        <div className="image">
                                                                            <div className="quickview-button">
                                                                                <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                   data-tooltip-class="module-products-27 module-products-grid quickview-tooltip"
                                                                                   data-placement="top" title=""
                                                                                   //onClick="quickview('280')"
                                                                                   data-original-title="Quickview">
                                                                                    <span className="btn-text">Quickview</span>
                                                                                </a>
                                                                            </div>

                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280"
                                                                               className="product-img has-second-image">
                                                                                <div>
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-250x250.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-500x500.jpg 2x"
                                                                                        width="250" height="250" alt="Anti-Dandruff Shampoo" title="Anti-Dandruff Shampoo" className="img-responsive img-first"/>

                                                                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-250x250.jpg"
                                                                                            // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-500x500.jpg 2x"
                                                                                            width="250" height="250" alt="Anti-Dandruff Shampoo" title="Anti-Dandruff Shampoo" className="img-responsive img-second"/>
                                                                                </div>
                                                                            </a>

                                                                            <div className="product-labels">
                                                                                <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                            </div>

                                                                            <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                <div>274 <span>Day</span></div>
                                                                                <div>14 <span>Hour</span></div>
                                                                                <div>30 <span>Min</span></div>
                                                                                <div>12 <span>Sec</span></div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="caption">
                                                                            <div className="stats">
                                                                                <span className="stat-1">
                                                                                    <span className="stats-label">Brand:</span>
                                                                                    <span>
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=20">Sarah Bell</a>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="stat-2">
                                                                                    <span className="stats-label">Model:</span>
                                                                                    <span>Model 88</span>
                                                                                </span>
                                                                            </div>

                                                                            <div className="name">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280">Anti-Dandruff Shampoo</a>
                                                                            </div>

                                                                            <div className="description">
                                                                                Product description, along with any other tab can be displayed as tabs,
                                                                                accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
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
                                                                                            <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
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
                                                                                           data-tooltip-class="module-products-27 module-products-grid wishlist-tooltip"
                                                                                           data-placement="top" title=""
                                                                                           //onClick="wishlist.add('280')"
                                                                                           data-original-title="Add to Wish List">
                                                                                            <span className="btn-text">Add to Wish List</span>
                                                                                        </a>

                                                                                        <a className="btn btn-compare" data-toggle="tooltip"
                                                                                           data-tooltip-class="module-products-27 module-products-grid compare-tooltip"
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
                                                                                       href="javascript:open_popup(22)"
                                                                                       data-product_id="280"
                                                                                       data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280"
                                                                                       data-loading-text="<span class='btn-text'>Question</span>">
                                                                                        <span className="btn-text">Question</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
                                                        </div>
                                                        <div className="swiper-buttons">
                                                            <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="false"/>
                                                            <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false"/>
                                                        </div>
                                                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-col grid-col-top-4-3">
                        <div className="grid-items">
                            <div className="grid-item grid-item-top-4-3-1">
                                <div className="module module-button module-button-263">
                                    <NavLink to="/allproduct" className="btn">See all products</NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}