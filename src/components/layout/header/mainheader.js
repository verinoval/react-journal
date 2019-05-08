import React, {Component} from 'react';
import Headertop from './classic/headertop';
import Headermid from './classic/headermid';
import Mainmenu from './classic/main-menu';

import Mobiletopbar from './mobile/mobiletopheader';
import Mobilestikybar from './mobile/mobilestikybar';


export default class Header extends Component{
    render(){
        return(
                <header className="header-classic">
                    <div className="header header-classic header-lg">
                    <Headertop/>
                    <Headermid/>
                    <Mainmenu/>
                    </div>

                    <div className="mobile-header mobile-default mobile-1">
                        <Mobiletopbar/>
                        <Mobilestikybar/>
                    </div>
                </header>
        );
    }
}