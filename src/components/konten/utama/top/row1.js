import React, {Component} from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./styles.css";
// import slider1 from '../../../../assets/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png';
// import slider2 from '../../../../assets/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png';
// import slider3 from '../../../../assets/image/cache/catalog/journal3/slider/demo1/s2-960x450h.png';

export default class TopRow1 extends Component {

    render() {
        const content = [
            {
                title: "Vulputate Mollis Ultricies Fermentum Parturient",
                description:
                    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
                button: "Read More",
                image: "https://i.imgur.com/ZXBtVw7.jpg"
            },
            {
                title: "Tortor Dapibus Commodo Aenean Quam",
                description:
                    "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
                button: "Discover",
                image: "https://i.imgur.com/DCdBXcq.jpg"
            },
            {
                title: "Phasellus volutpat metus",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
                button: "Buy now",
                image: "https://i.imgur.com/DvmN8Hx.jpg"
            }
        ];
        return(

            <div className="grid-row grid-row-top-1">
                <div className="grid-cols">
                    <div className="grid-col grid-col-top-1-1">
                        <div className="grid-items">
                            <div className="grid-item grid-item-top-1-1-1">
                                <Slider className="slider-wrapper" autoplay={3000}>
                                    {content.map((item, index) => (
                                        <div key={index}
                                            className="slider-content"
                                            style={{ background: `url('${item.image}') no-repeat center center` }}>
                                            <div className="inner">
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                                <button className='btn btn-quickview'>{item.button}</button>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="grid-col grid-col-top-1-2">
                        <div className="grid-items">
                            <div className="grid-item grid-item-top-1-2-1">
                                <div id="banners-5cca534f7955c"
                                     className="module module-banners module-banners-259">
                                    <div className="module-body">
                                        <div className="module-item module-item-1">
                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=59">
                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b1-320x210w.png"
                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b1-320x210w.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b1-640x420w.png 2x"
                                                    alt="" width="320" height="210"/>
                                                    <div className="banner-text banner-caption">
                                                        <span><s>Wearables</s> Intelligent &amp; Durable Design</span>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="module-item module-item-2">
                                            <a href="https://www.journal-theme.com/1/index.php?route=product/category&amp;path=26">
                                                <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b2-320x210w.png"
                                                    // srcSet="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b2-320x210w.png 1x, https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b2-640x420w.png 2x"
                                                    alt="" width="320" height="210"/>
                                                    <div className="banner-text banner-caption">
                                                        <span><s>Computers</s> Build your own high powered PC</span>
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
        );
    }
}