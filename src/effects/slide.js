import React from 'react';
//
import './slide.scss';

const Slide = () => {

    let widgetConfig = {

        slide: {
            style_1: {
                'effect':'fade',
                'autoplay': true,
                'duration':'0.6',
                 //
                 'activeTriggerCls': 'selected'
            },
            //
            style_2: {
                'effect':'scrolly',
                'autoplay': true,
                'duration':'0.6',
                 //
                 'activeTriggerCls': 'selected'
            },
            style_3: {
                'effect':'scrollx',
                'autoplay': true,
                'duration':'0.6',
                 //
                 'activeTriggerCls': 'selected'
            },
            //
            style_4: {
                'effect':'none',
                'autoplay': true,
                'duration':'0.6',
                 //
                 'activeTriggerCls': 'selected'
            }
        }

    }

    return (

        <div className="BS_Widgets_Slide">

            <div className="J_TWidget section BS_Widgets_Slide_style_1" data-widget-type="Slide" data-widget-config={JSON.stringify(widgetConfig.slide.style_1)}>
                <h2>Best Seller Widget Slide style 1</h2>
                <div className="ks-switchable-content">

                    <div style={{background:'#037084'}}><a href="#" target="_blank">Hello world</a></div>

                    <div style={{background:'#be07d4'}}><a href="#" target="_blank">Hello Kiitty</a></div>

                </div>

                <ul className="ks-switchable-nav yslider-stick">

                    <li className="selected"><a target="_blank">aaa</a></li>

                    <li><a target="_blank">bbb</a></li>

                </ul>

            </div>
            <div className="J_TWidget section BS_Widgets_Slide_style_2" data-widget-type="Slide" data-widget-config={JSON.stringify(widgetConfig.slide.style_2)}>

                <div className="ks-switchable-content">

                    <div style={{background:'#037084'}}><a href="#" target="_blank"><h2>Best Seller Widget Slide style 2</h2></a></div>

                    <div style={{background:'#be07d4'}}><a href="#" target="_blank"><h2>Best Seller Widget Slide style 2</h2></a></div>

                </div>

                <ul className="ks-switchable-nav yslider-stick">

                    <li className="selected"><a target="_blank">aaa</a></li>

                    <li><a target="_blank">bbb</a></li>

                </ul>

            </div>
            <div className="J_TWidget section BS_Widgets_Slide_style_3" data-widget-type="Slide" data-widget-config={JSON.stringify(widgetConfig.slide.style_3)}>

                <div className="ks-switchable-content">

                    <div style={{background:'#037084'}}><a href="#" target="_blank"><h2>Best Seller Widget Slide style 3</h2></a></div>

                    <div style={{background:'#be07d4'}}><a href="#" target="_blank"><h2>Best Seller Widget Slide style 3</h2></a></div>

                </div>

                <ul className="ks-switchable-nav yslider-stick">

                    <li className="selected"><a target="_blank">aaa</a></li>

                    <li><a target="_blank">bbb</a></li>

                </ul>

            </div>

            <div className="J_TWidget section BS_Widgets_Slide_style_4" data-widget-type="Slide" data-widget-config={JSON.stringify(widgetConfig.slide.style_4)}>
                <h2>Best Seller Widget Slide style 4</h2>
                <div className="ks-switchable-content">

                    <div style={{background:'#037084'}}><a href="#" target="_blank"><h2>-</h2></a></div>

                    <div style={{background:'#be07d4'}}><a href="#" target="_blank"><h2>-</h2></a></div>

                </div>

                <ul className="ks-switchable-nav yslider-stick">

                    <li className="selected"><a target="_blank">aaa</a></li>

                    <li><a target="_blank">bbb</a></li>

                </ul>

            </div>

        </div>
    )
};
//
export default Slide;
