//
import React from 'react';

import './Carousel.scss';
//
const Carousel = ()=> {

    let widgetConfig = {
        Carousel: {
            style_1: {
                'effect': 'scrollx',
                'easing': 'easeOutStrong',
                'steps': 5,
                'viewSize': [500],
                'circular': false,
                'prevBtnCls': 'prev',
                'nextBtnCls': 'next',
                'disableBtnCls': 'disable',
                'lazyDataType': 'img-src',
                // 'interval': '3000',
                'autoplay': true
            },
            //
            style_2: {
                'navCls':'ks-switchable-nav',
                'contentCls':'ks-switchable-content',
                'effect': 'scrollx',
                'easing': 'easeOutStrong',
                'steps':1,
                'viewSize': [450],
                'circular': false,
                'prevBtnCls': 'mall-prev',
                'nextBtnCls': 'mall-next',
                'disableBtnCls': 'disable'
            },
            //
            style_3: {
                // 'navCls':'ks-switchable-nav',
                'contentCls':'ks-switchable-content',
                'effect': 'scrollx',
                'easing': 'easeOutStrong',
                'steps':1,
                'viewSize': [500],
                'circular': true,
                'prevBtnCls': 'prev',
                'nextBtnCls': 'next',
                'disableBtnCls': 'disable',
                'autoplay': true,
            }
        }
    }
    //
    return (
        <div className="BS_Widgets_Carousel">
            <div  className="section  J_TWidget  BS_Widgets_Carousel_style_1" data-widget-type="Carousel" data-widget-config={JSON.stringify(widgetConfig.Carousel.style_1)}>
                <h2>Best Seller Widget Carousel style 1</h2>
                <span id="scroller-prev" className="prev disable"></span>
                <span id="scroller-next" className="next"></span>

                <div className="scroller-body scroller">
                    <div className="ks-switchable-content">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <ul className="ks-switchable-nav">
                        <li className="ks-active"></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            {/*
                Best Seller Widgets Carousel style 2
                */}
            <div  id="J_MallSlide" className="mall-slide J_TWidget dd BS_Widgets_carousel_style_2"
            data-widget-type="Carousel"
            data-widget-config={JSON.stringify(widgetConfig.Carousel.style_2)}>
            <h2>Best Seller Widget Carousel style 2</h2>
                <a title="上一页" href="javascript:void(0);" hidefocus="true" className="mall-prev footer-more-trigger"></a>
                <a title="下一页" href="javascript:void(0);" hidefocus="true" className="mall-next footer-more-trigger"></a>
                <div id="J_Carousel" className="mall-content clearfix" >
                <ul className="ks-switchable-content">
                    <li className="big-piclist">

                        <span data-resid="129" className="J_DirectPromo" id="J_DirectPromo_129">
                            <a target="_blank" href="#" style={{width: '440px', height: '137px'}}>
                                <img src="http://img04.taobaocdn.com/tps/i4/T1nd86XeVeXXXXXXXX-440-135.jpg" alt="不涨反降 洗护新品新体验" />
                            </a>
                        </span>
                    </li>
                    <li className="big-piclist">
                        <span data-resid="127" className="J_DirectPromo" id="J_DirectPromo_127">
                            <a target="_blank" href="#">
                                <img src="http://img01.taobaocdn.com/tps/i1/T1P0R6Xc4kXXXXXXXX-110-135.png" alt="潮潮了事" />
                            </a>
                        </span>
                        <a target="_blank" href="#">
                            <img src="http://img04.taobaocdn.com/tps/i4/T1.JV6XcXjXXXXXXXX-110-135.png" alt="闪耀指针" />
                        </a>
                        <a target="_blank" href="#">
                            <img src="http://img02.taobaocdn.com/tps/i2/T1YcN6XoloXXXXXXXX-110-135.png" alt="浓情午后" />
                        </a>
                        <a target="_blank" className="last" href="#">
                            <img src="http://img02.taobaocdn.com/tps/i2/T1jdx6Xd4oXXXXXXXX-110-135.png" alt="五折包邮" />
                        </a>

                    </li>
                    <li className="big-piclist">
                        <span data-resid="128" className="J_DirectPromo" id="J_DirectPromo_128">
                            <a target="_blank" href="#">
                                <img src="http://img02.taobaocdn.com/tps/i2/T1S006XiVdXXXXXXXX-110-135.png" alt="周年庆祝" />
                            </a>
                        </span>
                        <a target="_blank" href="#">
                            <img src="http://img02.taobaocdn.com/tps/i2/T1TZ06XkBqXXXXXXXX-110-135.png" alt="3.8折体验" />
                        </a>
                        <a target="_blank" href="#">
                            <img src="http://img02.taobaocdn.com/tps/i2/T1yKF6XcVdXXXXXXXX-110-135.png" alt="免单回馈" />
                        </a>
                        <a target="_blank" className="last" href="#">
                            <img src="http://img03.taobaocdn.com/tps/i3/T1qx85XotyXXXXXXXX-110-135.png" alt="新鲜搭配" />
                        </a>

                    </li>
                </ul>
                <ul className="ks-switchable-nav">
                    <li className="ks-active">
                        <img src='http://img04.taobaocdn.com/tps/i4/T1nd86XeVeXXXXXXXX-440-135.jpg' />
                    </li>
                    <li>
                        <img src='http://img04.taobaocdn.com/tps/i4/T1C206XdhvXXXXXXXX-130-50.jpg' />
                    </li>
                    <li>
                        <img src='http://img03.taobaocdn.com/tps/i3/T1CL06XdpvXXXXXXXX-120-50.jpg' />
                    </li>
                </ul>
                </div>
            </div>
            {/*
                Best Seller Widgets Carousel style 3
                */}
                <div  id="" className="J_TWidget dd BS_Widgets_carousel_style_3"
                data-widget-type="Carousel"
                data-widget-config={JSON.stringify(widgetConfig.Carousel.style_3)}>
                <h2>Best Seller Widget Carousel style 3</h2>
                    <a title="上一页" href="javascript:void(0);" hidefocus="true" className="prev"></a>
                    <a title="下一页" href="javascript:void(0);" hidefocus="true" className="next"></a>
                    <div id="J_Carousel" className="mall-content clearfix" >
                    <ul className="ks-switchable-content">
                        <li className="big-piclist">
                            <img src={require('../images/style1_01.jpg')} alt="不涨反降 洗护新品新体验" />
                        </li>
                        <li className="big-piclist">
                            <img src={require('../images/style1_03.jpg')} alt="不涨反降 洗护新品新体验" />
                        </li>
                        <li className="big-piclist">
                            <img src={require('../images/style1_04.jpg')} alt="不涨反降 洗护新品新体验" />
                        </li>
                    </ul>

                    </div>
                </div>
        </div>

    )
}

export default Carousel;
