import React,{Component} from 'react';

export default class Mobiletopbar extends Component{
    render() {
        return(
            <div className="mobile-top-bar">
                <div className="mobile-top-menu-wrapper">

                </div>
                <div className="language-currency top-menu">
                    <div className="mobile-currency-wrapper">
                        <div id="currency" className="currency">
                            <form action="https://www.journal-theme.com/1/index.php?route=common/currency/currency" method="post" encType="multipart/form-data" id="form-currency">
                                <div className="dropdown drop-menu">
                                    <button type="button" className="dropdown-toggle" data-toggle="" aria-expanded="false">
                                        <span className="currency-symbol-title">
                                            <span className="symbol">$</span>
                                            <span className="currency-title">US Dollar</span>
                                            <span className="currency-code">USD</span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu j-dropdown">
                                        <ul className="j-menu">
                                            <li>
                                                <a className="currency-select" data-name="EUR">
                                                    <span className="currency-symbol">€</span>
                                                    <span className="currency-title-dropdown">Euro</span>
                                                    <span className="currency-code-dropdown">EUR</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="currency-select" data-name="GBP">
                                                    <span className="currency-symbol">£</span>
                                                    <span className="currency-title-dropdown">Pound Sterling</span>
                                                    <span className="currency-code-dropdown">GBP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="currency-select" data-name="USD">
                                                    <span className="currency-symbol">$</span>
                                                    <span className="currency-title-dropdown">US Dollar</span>
                                                    <span className="currency-code-dropdown">USD</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <input type="hidden" name="code" value=""/>
                                    <input type="hidden" name="redirect" value="https://www.journal-theme.com/1/index.php?route=common/home"/>
                            </form>
                        </div>
                    </div>
                    <div className="mobile-language-wrapper">

                    </div>
                </div>
            </div>
        );
    }
}