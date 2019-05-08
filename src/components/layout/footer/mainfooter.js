import React, {Component} from 'react';
import Row1 from './row1';
// import Row2 from './row2';
import Row3 from './row3';
import Row4 from './row4';

export default class Footer extends Component{
    render() {
        return(
            <div>
                <footer>
                    <div className="grid-rows">
                        <Row1/>
                        {/*<Row2/>*/}
                        <Row3/>
                        <Row4/>
                    </div>
                </footer>
            </div>

        );
    }
}