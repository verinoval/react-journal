import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import banner1 from '../../../../assets/image/banners/sale-240x375h.jpg';
import product1 from '../../../../assets/image/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg';
import catalog1 from '../../../../assets/image/cache/catalog/demo/apple_cinema_30-250x250w.jpg';
import catalog2 from '../../../../assets/image/cache/catalog/journal3/products/home/armchair/1-250x250.png';

export default class Mainmenu extends Component{
    render(){
        return(
            <div className="desktop-main-menu-wrapper menu-default has-menu-2 navbar-nav">
                <div className="menu-trigger menu-item main-menu-item">
                    <ul className="j-menu">
                        <li>Menu</li>
                    </ul>
                </div>
                <div id="main-menu" className="main-menu main-menu-3">
                    <ul className="j-menu">
                        <li className="menu-item main-menu-item main-menu-item-1 dropdown flyout drop-menu  first-dropdown"
                            data-is-open="">
                            <a href="#" className="dropdown-toggle" data-toggle="" aria-expanded="false">
                                <span className="links-text">All Departments</span>
                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e8ff2">
                                    <i className="fa fa-plus"/>
                                </span>
                                <span className="menu-label">Sale</span>
                            </a>
                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e8ff2">
                                <div id="flyout-menu-5cc67722e4e3e" className="flyout-menu flyout-menu-7">
                                    <ul className="j-menu">
                                        <li className="menu-item flyout-menu-item flyout-menu-item-1 dropdown mega-menu">
                                            <a href="#" className="dropdown-toggle" data-toggle="" aria-expanded="false">
                                                <span className="links-text">Shop by Category</span>
                                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e5e44">
                                                    <i className="fa fa-plus"/>
                                                </span>
                                            </a>
                                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e5e44">
                                                <div className="mega-menu-content">
                                                    <div className="grid-rows">
                                                        <div className="grid-row grid-row-1">
                                                            <div className="grid-cols">
                                                                <div className="grid-col grid-col-1">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="module module-catalog module-catalog-119 image-on-hover">
                                                                                <div className="module-body">
                                                                                    <div className="module-item module-item-1">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Fashion</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-150x150.jpg">
                                                                                                        <a href="#"><span>Accesories</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-150x150.jpg">
                                                                                                        <a href="#"><span>Dresses</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-150x150.jpg">
                                                                                                        <a href="#"><span>Pants</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-150x150.jpg">
                                                                                                        <a href="#"><span>T-Shirts</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-2">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Electronics</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-150x150h.jpg">
                                                                                                        <a href="#"><span>Desktops</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-150x150h.jpg">
                                                                                                        <a href="#"><span>Laptops &amp; Notebooks</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-150x150.jpg">
                                                                                                        <a href="#"><span>Components</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_2-150x150h.jpg">
                                                                                                        <a href="#"><span>Phones &amp; PDAs</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-3">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Bags</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/backpacks/3-150x150.jpg">
                                                                                                        <a href="#"><span>Backpacks</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/purse-150x150.jpg">
                                                                                                        <a href="#"><span>Clutches</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/bag-150x150.jpg">
                                                                                                        <a href="#"><span>Formal</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/straw-bag-150x150.jpg">
                                                                                                        <a href="#"><span>Purses</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-4">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Health &amp; Beauty</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-150x150.jpg">
                                                                                                        <a href="#"><span>Accessories</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-150x150.jpg">
                                                                                                        <a href="#"><span>Body</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-150x150.jpg">
                                                                                                        <a href="#"><span>Lipstick</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-150x150.jpg">
                                                                                                        <a href="#"><span>Makeup</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-5">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Footwear</a>
                                                                                            <div
                                                                                                className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/slippers-150x150.jpg">
                                                                                                        <a href="#"><span>Flats</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/flip-flops-150x150.jpg">
                                                                                                        <a href="#"><span>Flip Flops</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-150x150.jpg">
                                                                                                        <a href="#"><span>Heels</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/9-150x150.jpg">
                                                                                                        <a href="#"><span>Running</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-6">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Food</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/cakes-150x150.jpg">
                                                                                                        <a href="#"><span>Breakfast</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/sweets-150x150.jpg">
                                                                                                        <a href="#"><span>Dessert</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/grill-150x150.jpg">
                                                                                                        <a href="#"><span>Grill</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/pasta-150x150.jpg">
                                                                                                        <a href="#"><span>Pasta</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
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
                                            </div>
                                        </li>
                                        <li className="menu-item flyout-menu-item flyout-menu-item-2 dropdown mega-menu ">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <span className="links-text">Shop by Brand</span>
                                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e5ec0">
                                                    <i className="fa fa-plus"/></span>
                                            </a>
                                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e5ec0">
                                                <div className="mega-menu-content">
                                                    <div className="grid-rows">
                                                        <div className="grid-row grid-row-1">
                                                            <div className="grid-cols">
                                                                <div className="grid-col grid-col-1">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="module module-catalog module-catalog-262 image-on-hover">
                                                                                <div className="module-body">
                                                                                    <div className="module-item module-item-1">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Apple</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-200x200w.jpg">
                                                                                                        <a href="#"><span>Apple Cinema 30"</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-white-2-200x200.png">
                                                                                                        <a href="#"><span>Apple Watch</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/apple-black-200x200.png">
                                                                                                        <a href="#"><span>Bluetooth Smart Watch</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sports/2-200x200.jpg">
                                                                                                        <a href="#"><span>Gym Headphones</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-2">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Awesome Brand</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-200x200.jpg">
                                                                                                        <a href="#"><span>Bodycorn Dress</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/lamps/6-200x200.png">
                                                                                                        <a href="#"><span>Ceiling Lamp</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/bag-200x200.jpg">
                                                                                                        <a href="#"><span>City Handbag</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/backpacks/2-200x200.jpg">
                                                                                                        <a href="#"><span>Computer Bag Casual Bookbag</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-3">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Chic D'or</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-200x200.jpg">
                                                                                                        <a href="#"><span>Black Lace Dress</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/33-200x200.jpg">
                                                                                                        <a href="#"><span>Eau de Parfum</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/tote2-200x200.jpg">
                                                                                                        <a href=""><span>Large Fashion Tote Bag</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/purse-200x200.jpg">
                                                                                                        <a href=""><span>Large Wallet</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-4">
                                                                                        <div className="item-content">
                                                                                            <a href="" className="catalog-title">Ericksson</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/h1-200x200.jpg">
                                                                                                        <a href="#"><span>Canvas Tote Bag</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/bluetooth-gramophone-by-gramovox-200x200.jpg">
                                                                                                        <a href="#"><span>Flame Wireless Portable Speaker</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-200x200.jpg">
                                                                                                        <a href="#"><span>Headphones</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-200x200.jpg">
                                                                                                        <a href="#"><span>Home Bluetooth Speaker</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-5">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Melissa Johnson</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/22-200x200.jpg">
                                                                                                        <a href="#"><span>Bio Butter</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/brush2-200x200.jpg">
                                                                                                        <a href="#"><span>Bronzer Brush</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/decor/3-200x200.png">
                                                                                                        <a href="#"><span>Chrome Statue</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/13-200x200.jpg">
                                                                                                        <a href="#"><span>Fresh Ginger Perfume</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="module-item module-item-6">
                                                                                        <div className="item-content">
                                                                                            <a href="#" className="catalog-title">Hipster</a>
                                                                                            <div className="item-assets image-left">
                                                                                                <div className="subitems">
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/5-200x200.png">
                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;manufacturer_id=14&amp;product_id=334"><span>Breathable Running Sneakers</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/hiking-shoes-3054634_1920-200x200.jpg">
                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;manufacturer_id=14&amp;product_id=267"><span>Brown Suede Shoes</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/boot-2558324_1920-200x200w.jpg">
                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;manufacturer_id=14&amp;product_id=269"><span>Cool Boots</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem"
                                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/winter-boots-795706_1920-200x200.jpg">
                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;manufacturer_id=14&amp;product_id=263"><span>Hiking Boots</span></a>
                                                                                                    </div>
                                                                                                    <div className="subitem view-more">
                                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
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
                                            </div>
                                        </li>
                                        <li className="menu-item flyout-menu-item flyout-menu-item-3 dropdown mega-menu ">
                                            <a href="https://www.journal-theme.com/1/index.php?route=product/special"
                                               className="dropdown-toggle" data-toggle="dropdown">
                                                <span className="links-text">Special Deals</span>
                                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e5f31">
                                                    <i className="fa fa-plus"/>
                                                </span>
                                                <span className="menu-label">Sale</span>
                                            </a>
                                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e5f31">
                                                <div className="mega-menu-content">
                                                    <div className="grid-rows">
                                                        <div className="grid-row grid-row-1">
                                                            <div className="grid-cols">
                                                                <div className="grid-col grid-col-1">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div id="banners-5cc6772305947" className="module module-banners module-banners-201">
                                                                                <div className="module-body">
                                                                                    <div className="module-item module-item-1">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/special">
                                                                                            <img src={banner1}
                                                                                                // srcSet={`${banner1} 1x, ${banner2} 2x`}
                                                                                                 alt="" width="240" height="375"/>
                                                                                            <div className="banner-text banner-caption">
                                                                                                <span>See all specials</span>
                                                                                            </div>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="grid-col grid-col-2">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="module module-products module-products-227 module-products-grid">
                                                                                <div className="module-body">
                                                                                    <div className="module-item module-item-1">
                                                                                        <div className="product-grid">
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // // onClick="quickview('360')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src={product1}
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                            <span className="product-label product-label-146 product-label-diagonal"><b>Custom Labels</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-70 %</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">

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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="360"/>
                                                                                                                        <span>
                                                                                                                        <i className="fa fa-angle-up"/>
                                                                                                                        <i className="fa fa-angle-down"/>
                                                                                                                      </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>"
                                                                                                                       data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // // onClick="wishlist.add('360')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // // onClick="compare.add('360')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('42')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src={catalog1}
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-250x250w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-500x500w.jpg 2x"
                                                                                                                    width="250" height="250" alt="Apple Cinema 30&quot;" title="Apple Cinema 30&quot;" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-10 %</b></span>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
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
                                                                                                                        <input type="text" name="quantity" defaultValue="2" data-minimum="2" className="form-control"/>
                                                                                                                        <input type="hidden" name="product_id" defaultValue="42"/>
                                                                                                                        <span>
                                                                                                                        <i className="fa fa-angle-up"/>
                                                                                                                        <i className="fa fa-angle-down"/>
                                                                                                                      </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('42')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('42')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-countdown has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('420')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src={catalog2}
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-500x500.png 2x"
                                                                                                                    width="250" height="250" alt="Gray Armchair " title="Gray Armchair " className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                                            <div>277 <span>Day</span></div>
                                                                                                            <div>11 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="420"/>
                                                                                                                        <span>
                                                                                                                        <i className="fa fa-angle-up"/>
                                                                                                                        <i className="fa fa-angle-down"/>
                                                                                                                      </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('420', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('420')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('420')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('420', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-countdown has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('280')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Anti-Dandruff Shampoo" title="Anti-Dandruff Shampoo" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                                            <div>277 <span>Day</span></div>
                                                                                                            <div>11 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="280"/>
                                                                                                                        <span>
                                                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                                                </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('280', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('280')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('280')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('280', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-countdown has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('274')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=274" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Body Oil" title="Body Oil" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-78 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sat Aug 08 2026 00:00:00 +0000">
                                                                                                            <div>100 <span>Day</span></div>
                                                                                                            <div>23 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=274">Body Oil</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-new">$122.00</span>
                                                                                                                <span className="price-old">$554.00</span>
                                                                                                            </div>
                                                                                                            <span className="price-tax">Ex Tax:$100.00</span>
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="274"/>
                                                                                                                        <span>
                                                                                                                                    <i className="fa fa-angle-up"/>
                                                                                                                                    <i className="fa fa-angle-down"/>
                                                                                                                                </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('274', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('274')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('274')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('274', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                   href="javascript:open_popup(22)"
                                                                                                                   data-product_id="274"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=274"
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
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('338')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=338" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/9-250x250.png"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/9-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/9-500x500.png 2x"
                                                                                                                     width="250" height="250" alt="Boston M509" title="Boston M509" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-217 product-label-default"><b>Top Brand</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-100 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 10 2021 00:00:00 +0000">
                                                                                                            <div>256 <span>Day</span></div>
                                                                                                            <div>11 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=338">Boston M509</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-new">$372.80</span>
                                                                                                                <span className="price-old">$2.00</span>
                                                                                                            </div>
                                                                                                            <span className="price-tax">Ex Tax:$309.00</span>
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="338"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('338', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('338')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('338')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('338', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                   href="javascript:open_popup(22)"
                                                                                                                   data-product_id="338"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=338"
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
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('334')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=334" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/5-250x250.png"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/5-250x250.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/5-500x500.png 2x"
                                                                                                                     width="250" height="250" alt="Breathable Running Sneakers" title="Breathable Running Sneakers" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-53 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 10 2021 00:00:00 +0000">
                                                                                                            <div>256 <span>Day</span></div>
                                                                                                            <div>11 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">

                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=334">Breathable Running Sneakers</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-new">$264.80</span>
                                                                                                                <span className="price-old">$564.80</span>
                                                                                                            </div>
                                                                                                            <span className="price-tax">Ex Tax:$219.00</span>
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="334"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('334', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('334')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('334')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('334', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                   href="javascript:open_popup(22)"
                                                                                                                   data-product_id="334"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=334"
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
                                                                                                               data-tooltip-class="module-products-227 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('297')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=297" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/brush2-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/brush2-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/brush2-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Bronzer Brush" title="Bronzer Brush" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-68 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 10 2021 00:00:00 +0000">
                                                                                                            <div>256 <span>Day</span></div>
                                                                                                            <div>11 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=297">Bronzer Brush</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-new">$120.80</span>
                                                                                                                <span className="price-old">$370.40</span>
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
                                                                                                                        <input type="text" name="quantity" defaultValue="1" data-minimum="1" className="form-control"/>
                                                                                                                        <input type="hidden" name="product_id" defaultValue="297"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('297', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('297')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-227 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('297')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('297', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                   href="javascript:open_popup(22)"
                                                                                                                   data-product_id="297"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=297"
                                                                                                                   data-loading-text="<span class='btn-text'>Question</span>">
                                                                                                                    <span className="btn-text">Question</span>
                                                                                                                </a>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item flyout-menu-item flyout-menu-item-4 dropdown mega-menu ">
                                            <a className="dropdown-toggle" data-toggle="dropdown">
                                                <span className="links-text">Bestsellers</span>
                                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e5fa7">
                                                    <i className="fa fa-plus"/>
                                                </span>
                                            </a>
                                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e5fa7">
                                                <div className="mega-menu-content">
                                                    <div className="grid-rows">
                                                        <div className="grid-row grid-row-1">
                                                            <div className="grid-cols">
                                                                <div className="grid-col grid-col-1">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="module module-products module-products-213 module-products-grid">
                                                                                <div className="module-body">
                                                                                    <div className="module-item module-item-1">
                                                                                        <div className="product-grid">
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('360')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Headphones" title="Headphones" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                            <span className="product-label product-label-146 product-label-diagonal"><b>Custom Labels</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-70 %</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">

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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="360"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('360')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('360')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('300')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=300" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Black Lace Dress" title="Black Lace Dress" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
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
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('300', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('300')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('300')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
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
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('299')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=299" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Bodycorn Dress" title="Bodycorn Dress" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
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
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('299', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>"
                                                                                                                       data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('299')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
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
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('310')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=310" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/d1-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Applique T-Shirt" title="Applique T-Shirt" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
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
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('310', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('310')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
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
                                                                                            <div className="product-layout  has-countdown has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('356')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=356" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/accessories/phone-case-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/accessories/phone-case-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/accessories/phone-case-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Wallet Phone Case" title="Wallet Phone Case" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-58 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Tue May 02 2023 00:00:00 +0000">
                                                                                                            <div>02 <span>Day</span></div>
                                                                                                            <div>17 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">

                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=356">Wallet Phone Case</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-new">$240.80</span>
                                                                                                                <span className="price-old">$576.80</span>
                                                                                                            </div>
                                                                                                            <span className="price-tax">Ex Tax:$199.00</span>
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="356"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('356', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('356')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('356')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('356', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                   href="javascript:open_popup(22)"
                                                                                                                   data-product_id="356"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=356"
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
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('366')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=366" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/leica-m9-digital-camera-by-leica-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/leica-m9-digital-camera-by-leica-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/leica-m9-digital-camera-by-leica-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Leica Digital Camera" title="Leica Digital Camera" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-270 product-label-diagonal"><b>Online Only</b></span>
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">

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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="366"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('366', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('366')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('366')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('366', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-zero-price has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('365')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=365" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/ks9500-curved-4k-suhd-tv-by-samsung-250x250.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/ks9500-curved-4k-suhd-tv-by-samsung-250x250.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/ks9500-curved-4k-suhd-tv-by-samsung-500x500.jpg 2x"
                                                                                                                     width="250" height="250" alt="Toshiba 5009 Smart TV" title="Toshiba 5009 Smart TV" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                            <span className="product-label product-label-133 product-label-diagonal"><b>Free</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=365">Toshiba 5009 Smart TV</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="365"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // // onClick="cart.add('365', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('365')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('365')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('365', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout  has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-213 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('273')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=273" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/pexels-photo-280250-250x250.jpeg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/pexels-photo-280250-250x250.jpeg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/pexels-photo-280250-500x500.jpeg 2x"
                                                                                                                     width="250" height="250" alt="Sport Watch" title="Sport Watch" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">

                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=273">Sport Watch</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-normal">$252.98</span>
                                                                                                            </div>
                                                                                                            <span className="price-tax">Ex Tax:$209.15</span>
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="273"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid cart-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="cart.add('273', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>" data-original-title="Add to Cart"><span
                                                                                                                        className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('273')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-213 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('273')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('273', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                   href="javascript:open_popup(22)"
                                                                                                                   data-product_id="273"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=273"
                                                                                                                   data-loading-text="<span class='btn-text'>Question</span>">
                                                                                                                    <span className="btn-text">Question</span>
                                                                                                                </a>
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
                                                                <div className="grid-col grid-col-2">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="module module-blocks module-blocks-212 blocks-grid">
                                                                                <div className="module-body">
                                                                                    <div className="module-item module-item-1 no-expand">
                                                                                        <div className="block-body expand-block">
                                                                                            <h3 className="title module-title block-title">CMS Blocks</h3>
                                                                                            <div className="block-header">
                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/ban4-200x120w.jpg"
                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/ban4-200x120w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/ban4-400x240w.jpg 2x"
                                                                                                     alt="" className="block-image" width="200" height="120"/>
                                                                                            </div>
                                                                                            <div className="block-wrapper">
                                                                                                <div className="block-content  block-html">
                                                                                                    <p>The mega menus use the page builder interface and this means you can add any layout
                                                                                                        module in your menus to build the desired layout in any rows and columns combination.</p>
                                                                                                </div>
                                                                                                <div className="block-footer">
                                                                                                    <a className="btn" href="">Shop Now</a>
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
                                        </li>
                                        <li className="menu-item flyout-menu-item flyout-menu-item-5 dropdown mega-menu ">
                                            <a href="https://www.journal-theme.com/1/index.php?route=journal3/blog" className="dropdown-toggle" data-toggle="dropdown">
                                                <span className="links-text">Custom Links</span>
                                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e6020">
                                                    <i className="fa fa-plus"/>
                                                </span>
                                            </a>
                                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e6020">
                                                <div className="mega-menu-content">
                                                    <div className="grid-rows">
                                                        <div className="grid-row grid-row-1">
                                                            <div className="grid-cols">
                                                                <div className="grid-col grid-col-1">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="links-menu links-menu-206">
                                                                                <h3 className="title module-title closed">Top Categories</h3>
                                                                                <ul className="module-body">
                                                                                    <li className="menu-item links-menu-item links-menu-item-1">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                                            <span className="links-text">Fashion</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-2">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107">
                                                                                            <span className="links-text">Bags</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-3">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-4">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                                            <span className="links-text">Footwear</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-5">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                                            <span className="links-text">Home</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-6">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                                            <span className="links-text">Electronics</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-7">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                                            <span className="links-text">Food</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-8">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-9">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                                            <span className="links-text">Flowers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-10">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                                            <span className="links-text">Appliances</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="grid-col grid-col-2">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="links-menu links-menu-208">
                                                                                <h3 className="title module-title closed">Top Brands</h3>
                                                                                <ul className="module-body">
                                                                                    <li className="menu-item links-menu-item links-menu-item-1">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=8">
                                                                                            <span className="links-text">Apple</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-2">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=12">
                                                                                            <span className="links-text">Awesome Brand</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-3">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=13">
                                                                                            <span className="links-text">Chic D'or</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-4">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">
                                                                                            <span className="links-text">Ericksson</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-5">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=17">
                                                                                            <span className="links-text">Fort Cane</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-6">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=14">
                                                                                            <span className="links-text">Hipster</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-7">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=18">
                                                                                            <span className="links-text">Melissa Johnson</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-8">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=16">
                                                                                            <span className="links-text">NY Fashion</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-9">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=19">
                                                                                            <span className="links-text">Olivia Smith</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-10">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=16">
                                                                                            <span className="links-text">NY Fashion</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-11">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/manufacturer/info&amp;manufacturer_id=15">
                                                                                            <span className="links-text">Ericksson</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="grid-col grid-col-3">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="links-menu links-menu-207">
                                                                                <h3 className="title module-title closed">Custom Links</h3>
                                                                                <ul className="module-body">
                                                                                    <li className="menu-item links-menu-item links-menu-item-1">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-2">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                                            <span className="links-text">Footwear</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-3">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                                            <span className="links-text">Home</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-4">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                                            <span className="links-text">Electronics</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-5">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                                            <span className="links-text">Food</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-6">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-7">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                                            <span className="links-text">Flowers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-8">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                                            <span className="links-text">Appliances</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-9">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                                            <span className="links-text">Food</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-10">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                                            <span className="links-text">Flowers</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="grid-col grid-col-4">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="icons-menu icons-menu-209">
                                                                                <h3 className="title module-title">Icons Menus</h3>
                                                                                <ul>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-1 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                                            <span className="links-text">Fashion</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-2 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107">
                                                                                            <span className="links-text">Bags</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-3 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-4 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                                            <span className="links-text">Footwear</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-5 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                                            <span className="links-text">Home</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-6 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                                            <span className="links-text">Electronics</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-7 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                                            <span className="links-text">Food</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-8 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="menu-item icons-menu-item icons-menu-item-9 icon-menu-icon">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                                            <span className="links-text">Appliances</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="grid-row grid-row-2">
                                                            <div className="grid-cols">
                                                                <div className="grid-col grid-col-1">
                                                                    <div className="grid-items">
                                                                        <div className="grid-item grid-item-1">
                                                                            <div className="links-menu links-menu-205">
                                                                                <ul className="module-body">
                                                                                    <li className="menu-item links-menu-item links-menu-item-1">
                                                                                        <a><span className="links-text">Don't Miss:</span></a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-2">
                                                                                        <a href="#"><span className="links-text">Create</span></a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-3">
                                                                                        <a href="#"><span className="links-text">Any Links</span></a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-4">
                                                                                        <a href="#"><span className="links-text">Vertical</span></a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-5">
                                                                                        <a href="#"><span className="links-text">Horizontal</span></a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-6">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                                            <span className="links-text">Fashion</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-7">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                                            <span className="links-text">Electronics</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="menu-item links-menu-item links-menu-item-8">
                                                                                        <a href="javascript:open_popup(22)">
                                                                                            <span className="links-text">Custom Popups</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item flyout-menu-item flyout-menu-item-6 multi-level ">
                                            <NavLink to="/allproduct"><span className="links-text">See All Products</span></NavLink>
                                            <span className="menu-label">New</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </li>
                        <li className="menu-item main-menu-item main-menu-item-2 multi-level dropdown drop-menu ">
                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="links-text">Multilevel</span>
                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e907a">
                                    <i className="fa fa-plus"/>
                                </span>
                            </a>
                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e907a">
                                <ul className="j-menu">
                                    <li className="menu-item menu-item-c105 dropdown">
                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105" className="dropdown-toggle" data-toggle="dropdown">
                                            <span className="links-text">Accesories</span><span
                                            className="count-badge ">3</span>
                                            <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e90df">
                                                <i className="fa fa-plus"/>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu j-dropdown" id="collapse-5cc68728e90df">
                                            <ul className="j-menu">
                                                <li className="menu-item menu-item-c152">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_152">
                                                        <span className="links-text">Belts</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c116">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_116">
                                                        <span className="links-text">Hats</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c110 dropdown">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_110"
                                                       className="dropdown-toggle" data-toggle="dropdown">
                                                        <span className="links-text">Jewelry</span><span
                                                        className="count-badge count-zero ">0</span>
                                                        <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e91fc">
                                                            <i className="fa fa-plus"/>
                                                        </span>
                                                    </a>
                                                    <div className="dropdown-menu j-dropdown" id="collapse-5cc68728e91fc">
                                                        <ul className="j-menu">
                                                            <li className="menu-item menu-item-c117">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_110_117">
                                                                    <span className="links-text">Bracelets</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item menu-item-c146">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_110_146">
                                                                    <span className="links-text">Earrings</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item menu-item-c114">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_110_114">
                                                                    <span className="links-text">Necklaces</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item menu-item-c115">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_110_115">
                                                                    <span className="links-text">Rings</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-c151">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_151">
                                                        <span className="links-text">Scarves</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c153">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105_153">
                                                        <span className="links-text">Sunglasses</span>
                                                        <span className="count-badge ">1</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-item menu-item-c60 dropdown">
                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60" className="dropdown-toggle" data-toggle="dropdown">
                                            <span className="links-text">Dresses</span>
                                            <span className="count-badge ">3</span>
                                            <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e9476">
                                                <i className="fa fa-plus"/>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu j-dropdown" id="collapse-5cc68728e9476">
                                            <ul className="j-menu">
                                                <li className="menu-item menu-item-c147">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60_147">
                                                        <span className="links-text">Casual</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c149">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60_149">
                                                        <span className="links-text">Evening</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c148">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60_148">
                                                        <span className="links-text">Occasion</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c154">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60_154">
                                                        <span className="links-text">Skirt</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c150">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60_150">
                                                        <span className="links-text">Summer</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-item menu-item-c113 dropdown">
                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113" className="dropdown-toggle" data-toggle="dropdown">
                                            <span className="links-text">Pants</span>
                                            <span className="count-badge ">2</span>
                                            <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e9699">
                                                <i className="fa fa-plus"/>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu j-dropdown" id="collapse-5cc68728e9699">
                                            <ul className="j-menu">
                                                <li className="menu-item menu-item-c137">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113_137">
                                                        <span className="links-text">Formal</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c135">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113_135">
                                                        <span className="links-text">Jeans</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c136">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113_136">
                                                        <span className="links-text">Leggings</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c126">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113_126">
                                                        <span className="links-text">Training</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-item menu-item-c112">
                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_112">
                                            <span className="links-text">T-Shirts</span>
                                            <span className="count-badge ">5</span>
                                        </a>
                                    </li>

                                    <li className="menu-item menu-item-c108 dropdown">
                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108" className="dropdown-toggle" data-toggle="dropdown">
                                            <span className="links-text">Tops</span>
                                            <span className="count-badge ">4</span>
                                            <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e98c7">
                                                <i className="fa fa-plus"/>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu j-dropdown" id="collapse-5cc68728e98c7">
                                            <ul className="j-menu">
                                                <li className="menu-item menu-item-c106 dropdown">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_106" className="dropdown-toggle" data-toggle="dropdown">
                                                        <span className="links-text">Jackets</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                        <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e9929">
                                                            <i className="fa fa-plus"/>
                                                        </span>
                                                    </a>
                                                    <div className="dropdown-menu j-dropdown" id="collapse-5cc68728e9929">
                                                        <ul className="j-menu">
                                                            <li className="menu-item menu-item-c144">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_106_144">
                                                                    <span className="links-text">Blazers</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item menu-item-c145">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_106_145">
                                                                    <span className="links-text">Coats</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item menu-item-c143">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_106_143">
                                                                    <span className="links-text">Leather</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                            <li className="menu-item menu-item-c142">
                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_106_142">
                                                                    <span className="links-text">Suit</span>
                                                                    <span className="count-badge count-zero ">0</span>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>

                                                <li className="menu-item menu-item-c130">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_130">
                                                        <span className="links-text">Shirts</span>
                                                        <span className="count-badge ">1</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c129">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_129">
                                                        <span className="links-text">Sleeveless</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>

                                                <li className="menu-item menu-item-c127">
                                                    <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_108_127">
                                                        <span className="links-text">Summer</span>
                                                        <span className="count-badge count-zero ">0</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-item main-menu-item main-menu-item-3 dropdown mega-menu mega-fullwidth ">
                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="links-text">Mega Menu</span>
                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e9c35">
                                    <i className="fa fa-plus"/>
                                </span>
                                <span className="menu-label">New</span>
                            </a>
                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e9c35">
                                <div className="mega-menu-content">
                                    <div className="grid-rows">
                                        <div className="grid-row grid-row-1">
                                            <div className="grid-cols">
                                                <div className="grid-col grid-col-1">
                                                    <div className="grid-items">
                                                        <div className="grid-item grid-item-1">
                                                            <div className="links-menu links-menu-210">
                                                                <h3 className="title module-title closed">Top Categories</h3>
                                                                <ul className="module-body">
                                                                    <li className="menu-item links-menu-item links-menu-item-1">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                            <span className="links-text">Fashion</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-2">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107">
                                                                            <span className="links-text">Bags</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-3">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-4">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                            <span className="links-text">Footwear</span>
                                                                            <span className="menu-label">Sale</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-5">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                            <span className="links-text">Home Decor</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-6">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                            <span className="links-text">Electronics</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-7">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                            <span className="links-text">Food</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-8">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-9">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                            <span className="links-text">Flowers</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-10">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                            <span className="links-text">Appliances</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-11">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=221">
                                                                            <span className="links-text">Sports</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-12">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                            <span className="links-text">Fashion</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-13">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107">
                                                                            <span className="links-text">Bags</span>
                                                                            <span className="menu-label">Unlimited</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-14">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-15">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                            <span className="links-text">Footwear</span>
                                                                            <span className="menu-label">Custom</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-16">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                            <span className="links-text">Home Decor</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-17">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                            <span className="links-text">Electronics</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-18">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                            <span className="links-text">Food</span>
                                                                            <span className="menu-label">Labels</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-19">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-20">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                            <span className="links-text">Flowers</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-21">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                            <span className="links-text">Appliances</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-22">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=221">
                                                                            <span className="links-text">Sports</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-23">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                            <span className="links-text">Fashion</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-24">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107">
                                                                            <span className="links-text">Bags</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-25">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-26">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                            <span className="links-text">Footwear</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-27">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                            <span className="links-text">Home Decor</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-28">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                            <span className="links-text">Electronics</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-29">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                            <span className="links-text">Food</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-30">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-31">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                            <span className="links-text">Flowers</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-32">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                            <span className="links-text">Appliances</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-33">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=221">
                                                                            <span className="links-text">Sports</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-34">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                                            <span className="links-text">Fashion</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-35">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107">
                                                                            <span className="links-text">Bags</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-36">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109">
                                                                            <span className="links-text">Health &amp; Beauty</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-37">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111">
                                                                            <span className="links-text">Footwear</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-38">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=175">
                                                                            <span className="links-text">Home Decor</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-39">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69">
                                                                            <span className="links-text">Electronics</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-40">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155">
                                                                            <span className="links-text">Food</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-41">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=166">
                                                                            <span className="links-text">Baby &amp; Kids</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-42">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=196">
                                                                            <span className="links-text">Flowers</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-43">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=205">
                                                                            <span className="links-text">Appliances</span>
                                                                        </a>
                                                                    </li>

                                                                    <li className="menu-item links-menu-item links-menu-item-44">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=221">
                                                                            <span className="links-text">Sports</span>
                                                                        </a>
                                                                    </li>

                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-col grid-col-2">
                                                    <div className="grid-items">
                                                        <div className="grid-item grid-item-1">
                                                            <div id="banners-5cc677233e6aa" className="module module-banners module-banners-98">
                                                                <div className="module-body">
                                                                    <div className="module-item module-item-1">
                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/catalog">
                                                                            <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/17-tall-220x280w.jpg"
                                                                                // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/17-tall-220x280w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/17-tall-440x560w.jpg 2x"
                                                                                 alt="" width="220" height="280"/>
                                                                            <div className="banner-text banner-caption">
                                                                                <span>Shop Fashion</span>
                                                                            </div>
                                                                        </a>
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
                        </li>
                        <li className="menu-item main-menu-item main-menu-item-4 dropdown mega-menu menu-fullwidth mega-fullwidth ">
                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="links-text">Fullwidth</span>
                                <span className="open-menu collapsed" data-toggle="collapse" data-target="#collapse-5cc68728e9c9a">
                                    <i className="fa fa-plus"/>
                                </span>
                            </a>
                            <div className="dropdown-menu j-dropdown " id="collapse-5cc68728e9c9a">
                                <div className="mega-menu-content">
                                    <div className="grid-rows">
                                        <div className="grid-row grid-row-1">
                                            <div className="grid-cols">
                                                <div className="grid-col grid-col-1">
                                                    <div className="grid-items">
                                                        <div className="grid-item grid-item-1">
                                                            <div className="module module-catalog module-catalog-264 image-on-hover">
                                                                <div className="module-body">
                                                                    <div className="module-item module-item-1">
                                                                        <div className="item-content">
                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59" className="catalog-title">Fashion</a>
                                                                            <div className="item-assets image-left">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59" className="catalog-image">
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-150x150.jpg"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-150x150.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-300x300.jpg 2x"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-300x300.jpg"
                                                                                         alt="Fashion" width="150" height="150"/>
                                                                                </a>
                                                                                <div className="subitems">
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/sunglasses/glasses3-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_105">
                                                                                            <span>Accesories</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/misc/assorted-blurred-background-boutique-994523-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_60">
                                                                                            <span>Dresses</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/c-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_113">
                                                                                            <span>Pants</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/t2-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59_112">
                                                                                            <span>T-Shirts</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem view-more">
                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="module-item module-item-2">
                                                                        <div className="item-content">
                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69" className="catalog-title">Electronics</a>
                                                                            <div className="item-assets image-left">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69"
                                                                                   className="catalog-image">
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-150x150.jpg"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-150x150.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-300x300.jpg 2x"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-300x300.jpg"
                                                                                         alt="Electronics" width="150" height="150"/>
                                                                                </a>
                                                                                <div className="subitems">
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-150x150h.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-150x150h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/compaq_presario-300x300h.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69_20">
                                                                                            <span>Desktops</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-150x150h.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-150x150h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/hp_2-300x300h.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69_18">
                                                                                            <span>Laptops &amp; Notebooks</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beolab-19-by-bang-olufsen-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69_25">
                                                                                            <span>Components</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_2-150x150h.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_2-150x150h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_2-300x300h.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=69_24"><span>Phones &amp; PDAs</span></a>
                                                                                    </div>
                                                                                    <div className="subitem view-more">
                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="module-item module-item-3">
                                                                        <div className="item-content">
                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107" className="catalog-title">Bags</a>
                                                                            <div className="item-assets image-left">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107" className="catalog-image">
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-150x150.jpg"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-150x150.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-300x300.jpg 2x"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-300x300.jpg"
                                                                                         alt="Bags" width="150" height="150"/>
                                                                                </a>
                                                                                <div className="subitems">
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/backpacks/3-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/backpacks/3-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/backpacks/3-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107_165">
                                                                                            <span>Backpacks</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/purse-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/purse-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/purse-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107_120"><span>Clutches</span></a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/bag-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/bag-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/bag-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107_118">
                                                                                            <span>Formal</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/straw-bag-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/straw-bag-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/bags/straw-bag-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=107_121">
                                                                                            <span>Purses</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem view-more">
                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="module-item module-item-4">
                                                                        <div className="item-content">
                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109" className="catalog-title">Health &amp; Beauty</a>
                                                                            <div className="item-assets image-left">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109" className="catalog-image">
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-150x150.jpg"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-150x150.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-300x300.jpg 2x"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-300x300.jpg"
                                                                                         alt="Health &amp; Beauty" width="150" height="150"/>
                                                                                </a>
                                                                                <div className="subitems">
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/set6-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109_125">
                                                                                            <span>Accessories</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/14-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109_164">
                                                                                            <span>Body</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/25-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109_123">
                                                                                            <span>Lipstick</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/additional/brush-case-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=109_216">
                                                                                            <span>Makeup</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem view-more">
                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="module-item module-item-5">
                                                                        <div className="item-content">
                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111" className="catalog-title">Footwear</a>
                                                                            <div className="item-assets image-left">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111" className="catalog-image">
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-150x150.jpg"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-150x150.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-300x300.jpg 2x"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-300x300.jpg"
                                                                                         alt="Footwear" width="150" height="150"/>
                                                                                </a>
                                                                                <div className="subitems">
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/slippers-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/slippers-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/slippers-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111_133">
                                                                                            <span>Flats</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/flip-flops-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/flip-flops-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/flip-flops-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111_215">
                                                                                            <span>Flip Flops</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/shoe-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111_132">
                                                                                            <span>Heels</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/9-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/9-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/footwear/additional/9-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=111_134">
                                                                                            <span>Running</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem view-more">
                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="module-item module-item-6">
                                                                        <div className="item-content">
                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155" className="catalog-title">Food</a>
                                                                            <div className="item-assets image-left">
                                                                                <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155" className="catalog-image">
                                                                                    <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f-150x150.jpg"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f-150x150.jpg"
                                                                                        // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f-300x300.jpg 2x"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f-300x300.jpg"
                                                                                         alt="Food" width="150" height="150"/>
                                                                                </a>
                                                                                <div className="subitems">
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/cakes-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/cakes-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/cakes-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155_156">
                                                                                            <span>Breakfast</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/sweets-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/sweets-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/sweets-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155_157"><span>Dessert</span></a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/grill-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/grill-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/grill-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155_158">
                                                                                            <span>Grill</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem"
                                                                                         data-image="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/pasta-150x150.jpg"
                                                                                         data-image2x="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/pasta-150x150.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/food/pasta-300x300.jpg 2x">
                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=155_159">
                                                                                            <span>Pasta</span>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="subitem view-more">
                                                                                        <NavLink to="/allproduct"><span>See all products</span></NavLink>
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
                                                <div className="grid-col grid-col-2">
                                                    <div className="grid-items">
                                                        <div className="grid-item grid-item-1">
                                                            <div className="module module-products module-products-186 module-products-grid carousel-mode">
                                                                <div className="module-body">
                                                                    <div className="tab-container">
                                                                        <ul className="nav nav-tabs">
                                                                            <li className="tab-1 active">
                                                                                <a href="#" data-toggle="tab">Top Sellers</a>
                                                                            </li>
                                                                            <li className="tab-2">
                                                                                <a href="#" data-toggle="tab">Special Deals</a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="tab-content">
                                                                            <div className="module-item module-item-1 tab-pane active" id="products-5cc677234756c-tab-1">
                                                                                <div className="swiper swiper-has-pages"
                                                                                     data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:0}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:0}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:0}}}"
                                                                                     data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                                                                    <div className="swiper-container swiper-container-horizontal">
                                                                                        <div className="swiper-wrapper product-grid" style={{transitionDuration:'0ms'}}>
                                                                                            <div className="product-layout swiper-slide has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('360')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                                                                           className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-190x190.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-190x190.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-380x380.jpg 2x"
                                                                                                                     width="190" height="190" alt="Headphones" title="Headphones" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                            <span className="product-label product-label-146 product-label-diagonal"><b>Custom Labels</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-70 %</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
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

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="360"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart"
                                                                                                                        // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('360')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('360')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('300')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=300"
                                                                                                           className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-190x190.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-190x190.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/additional/8549539065_78e985be0c_o-380x380.jpg 2x"
                                                                                                                     width="190" height="190" alt="Black Lace Dress" title="Black Lace Dress" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">

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

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('300')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('300')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
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
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('299')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=299"
                                                                                                           className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-190x190.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-190x190.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/fashion/f1-380x380.jpg 2x"
                                                                                                                     width="190" height="190" alt="Bodycorn Dress" title="Bodycorn Dress" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">

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

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('299')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
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
                                                                            <div className="module-item module-item-2 tab-pane" id="products-5cc677234756c-tab-2">
                                                                                <div className="swiper swiper-has-pages" data-items-per-row="{&quot;c0&quot;:{&quot;0&quot;:{&quot;items&quot;:2,&quot;spacing&quot;:20}},&quot;c1&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:0}},&quot;c2&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:0}},&quot;sc&quot;:{&quot;0&quot;:{&quot;items&quot;:1,&quot;spacing&quot;:0}}}" data-options="{&quot;speed&quot;:500,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:true,&quot;loop&quot;:false}">
                                                                                    <div className="swiper-container swiper-container-horizontal">
                                                                                        <div className="swiper-wrapper product-grid" style={{transitionDuration: '0ms'}}>
                                                                                            <div className="product-layout swiper-slide has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('360')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=360"
                                                                                                           className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-190x190.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-190x190.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/electronics/beoplay-h6-headphones-by-bang-olufsen-380x380.jpg 2x"
                                                                                                                     width="190" height="190" alt="Headphones" title="Headphones" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-31 product-label-default"><b>Hot</b></span>
                                                                                                            <span className="product-label product-label-146 product-label-diagonal"><b>Custom Labels</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-70 %</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
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

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="360"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart"
                                                                                                                        // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('360')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('360')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('360', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('42')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=42" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-190x190w.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-190x190w.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/apple_cinema_30-380x380w.jpg 2x"
                                                                                                                     width="190" height="190" alt="Apple Cinema 30&quot;" title="Apple Cinema 30&quot;" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-10 %</b></span>
                                                                                                        </div>

                                                                                                    </div>

                                                                                                    <div className="caption">
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

                                                                                                        <div
                                                                                                            className="rating no-rating rating-hover">
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
                                                                                                                        <input type="text" name="quantity" defaultValue="2" data-minimum="2" className="form-control"/>
                                                                                                                        <input type="hidden" name="product_id" defaultValue="42"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart"
                                                                                                                        // onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('42')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('42')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('42', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout swiper-slide has-countdown has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('420')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=420"
                                                                                                           className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-190x190.png"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-190x190.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/home/armchair/1-380x380.png 2x"
                                                                                                                     width="190" height="190" alt="Gray Armchair " title="Gray Armchair " className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-29 product-label-default"><b>New</b></span>
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                                            <div>277 <span>Day</span></div>
                                                                                                            <div>11 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
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

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="420"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart"
                                                                                                                        // onClick="cart.add('420', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('420')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('420')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('420', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('280')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=280" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-190x190.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-190x190.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/17-380x380.jpg 2x"
                                                                                                                     width="190" height="190" alt="Anti-Dandruff Shampoo" title="Anti-Dandruff Shampoo" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-85 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sun Jan 31 2021 00:00:00 +0000">
                                                                                                            <div>277 <span>Day</span>
                                                                                                            </div>
                                                                                                            <div>11 <span>Hour</span>
                                                                                                            </div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                             <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
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

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="280"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart"
                                                                                                                        // onClick="cart.add('280', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('280')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('280')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('280', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
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
                                                                                            <div className="product-layout swiper-slide has-countdown has-extra-button">
                                                                                                <div className="product-thumb">
                                                                                                    <div className="image">
                                                                                                        <div className="quickview-button">
                                                                                                            <a className="btn btn-quickview" data-toggle="tooltip"
                                                                                                               data-tooltip-class="module-products-186 module-products-grid quickview-tooltip"
                                                                                                               data-placement="top" title=""
                                                                                                                // onClick="quickview('274')"
                                                                                                               data-original-title="Quickview">
                                                                                                                <span className="btn-text">Quickview</span>
                                                                                                            </a>
                                                                                                        </div>

                                                                                                        <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=274" className="product-img ">
                                                                                                            <div>
                                                                                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-190x190.jpg"
                                                                                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-190x190.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/products/beauty/2-380x380.jpg 2x"
                                                                                                                     width="190" height="190" alt="Body Oil" title="Body Oil" className="img-responsive img-first"/>
                                                                                                            </div>
                                                                                                        </a>

                                                                                                        <div className="product-labels">
                                                                                                            <span className="product-label product-label-28 product-label-default"><b>-78 %</b></span>
                                                                                                        </div>

                                                                                                        <div className="countdown" data-date="Sat Aug 08 2026 00:00:00 +0000">
                                                                                                            <div>100 <span>Day</span></div>
                                                                                                            <div>23 <span>Hour</span></div>
                                                                                                            <div>50 <span>Min</span></div>
                                                                                                            <div>55 <span>Sec</span></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="caption">
                                                                                                        <div className="name">
                                                                                                            <a href="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=274">Body Oil</a>
                                                                                                        </div>

                                                                                                        <div className="description">
                                                                                                            Product description, along with any other tab can be displayed as tabs,
                                                                                                            accordion or all-visible blocks in grid format or one under the other.&nbsp; Y..
                                                                                                        </div>

                                                                                                        <div className="price">
                                                                                                            <div>
                                                                                                                <span className="price-new">$122.00</span>
                                                                                                                <span className="price-old">$554.00</span>
                                                                                                            </div>
                                                                                                            <span className="price-tax">Ex Tax:$100.00</span>
                                                                                                        </div>

                                                                                                        <div className="rating no-rating rating-hover">
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
                                                                                                                        <input type="hidden" name="product_id" defaultValue="274"/>
                                                                                                                        <span>
                                                                                                                            <i className="fa fa-angle-up"/>
                                                                                                                            <i className="fa fa-angle-down"/>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <a className="btn btn-cart"
                                                                                                                        // onClick="cart.add('274', $(this).closest('.button-group').find('input[name=\'quantity\']').val());"
                                                                                                                       data-loading-text="<span class='btn-text'>Add to Cart</span>">
                                                                                                                        <span className="btn-text">Add to Cart</span>
                                                                                                                    </a>
                                                                                                                </div>

                                                                                                                <div
                                                                                                                    className="wish-group">
                                                                                                                    <a className="btn btn-wishlist" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid wishlist-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="wishlist.add('274')"
                                                                                                                       data-original-title="Add to Wish List">
                                                                                                                        <span className="btn-text">Add to Wish List</span>
                                                                                                                    </a>

                                                                                                                    <a className="btn btn-compare" data-toggle="tooltip"
                                                                                                                       data-tooltip-class="module-products-186 module-products-grid compare-tooltip"
                                                                                                                       data-placement="top" title=""
                                                                                                                        // onClick="compare.add('274')"
                                                                                                                       data-original-title="Compare this Product">
                                                                                                                        <span className="btn-text">Compare this Product</span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>

                                                                                                        <div className="extra-group">
                                                                                                            <div>
                                                                                                                <a className="btn btn-extra btn-extra-46"
                                                                                                                    // onClick="cart.add('274', $(this).closest('.button-group').find('input[name=\'quantity\']').val(), true);"
                                                                                                                   data-loading-text="<span class='btn-text'>Buy Now</span>">
                                                                                                                    <span className="btn-text">Buy Now</span>
                                                                                                                </a>
                                                                                                                <a className="btn btn-extra btn-extra-93"
                                                                                                                    // href="javascript:open_popup(22)"
                                                                                                                   data-product_id="274"
                                                                                                                   data-product_url="https://www.journal-theme.com/1/index.php?route=product/product&amp;product_id=274"
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="main-menu-2" className="main-menu main-menu-64">
                    <ul className="j-menu">
                        <li className="menu-item main-menu-item main-menu-item-1 multi-level drop-menu ">
                            <a href="tel:18005556787">
                                <span className="links-text">1.800.555.6789</span>
                            </a>
                        </li>
                        <li className="menu-item main-menu-item main-menu-item-2 multi-level drop-menu ">
                            <a href="https://www.journal-theme.com/1/index.php?route=journal3/blog">
                                <span className="links-text">Blog</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}