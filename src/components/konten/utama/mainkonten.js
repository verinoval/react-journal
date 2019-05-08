import React, {Component} from 'react';

import TopRow1 from './top/row1';
import TopRow2 from './top/row2';
import TopRow3 from './top/row3';
import TopRow4 from './top/row4';

import BottomRow1 from './bottom/row1';
import BottomRow2 from './bottom/row2';
import BottomRow3 from './bottom/row3';
import BottomRow4 from './bottom/row4';
import BottomRow5 from './bottom/row5';

export default class Content extends Component{
    render() {
        return (
            <div>
                <div id="top" className="top top-row">
                    <div className="grid-rows">
                        <TopRow1/>
                        <TopRow2/>
                        <TopRow3/>
                        <TopRow4/>
                    </div>
                </div>
                <div id="bottom" className="bottom top-row">
                    <div className="grid-row">
                        <BottomRow1/>
                        <BottomRow2/>
                        <BottomRow3/>
                        <BottomRow4/>
                        <BottomRow5/>
                    </div>
                </div>
            </div>
        );
    }
}