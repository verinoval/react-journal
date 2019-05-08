import React, {Component} from 'react';

import Content from './components/konten/utama/mainkonten';
import Footer from './components/layout/footer/mainfooter';
import Header from './components/layout/header/mainheader';

import Mobilemenu from  './components/layout/mobile/menu';
import Mobilefilter from  './components/layout/mobile/filter';
import Mobilecart from './components/layout/mobile/cart';

import About from './components/konten/about/about';
import Contact from './components/konten/contact/contact';
import delivery from './components/konten/delivery/delivery';
import privacypolicy from './components/konten/privacypolicy/privacypolicy';
import Allproduct from './components/konten/product/allproduct';
import Productfashion from './components/konten/product/productfashion';
import Productdetail from './components/konten/product/productdetail';
import Productreturn from  './components/konten/product/productreturn';
import loginAkun from './components/login';
import Registrasi from './components/register'
import forgotpassword from "./components/forgotpassword";
import cart from './components/konten/cart/cart';
import compare from './components/konten/compare/compare';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>

                <Mobilemenu/>
                <Mobilefilter/>
                <Mobilecart/>

                <div className='site-wrapper'>
                    <Header/>
                    <Switch>
                        <Route exact={true} path='/' component={Content}/>
                        <Route exact={true} path='/loginakun' component={loginAkun}/>
                        <Route exact={true} path='/register' component={Registrasi}/>
                        <Route exact={true} path='/forgotpassword' component={forgotpassword}/>

                        <Route exact={true} path='/cart' component={cart}/>
                        <Route exact={true} path='/compare' component={compare}/>
                        <Route exact={true} path='/about' component={About}/>
                        <Route exact={true} path='/contact' component={Contact}/>
                        <Route exact={true} path='/privacypolicy' component={privacypolicy}/>
                        <Route exact={true} path='/delivery' component={delivery}/>

                        <Route exact={true} path='/allproduct' component={Allproduct}/>
                        <Route exact={true} path='/productfashion' component={Productfashion}/>
                        <Route exact={true} path='/productdetail' component={Productdetail}/>
                        <Route exact={true} path='/productreturn' component={Productreturn}/>

                    </Switch>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}
export default App;
