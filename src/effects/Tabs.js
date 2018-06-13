
import React from 'react';

import './Tabs.scss';

const Tabs = () => {


    let widgetConfig = {
        //
        tabs: {
            style_1: {
                'effect': 'fade',
                'autoplay': true,
                'circular': true,
                'activeTriggerCls': 'selected',
                // 'steps': '5'
                // the effects widget will be disabled when add these attribute;
                // 'navCls': 'test'
                // 'contentCls': 'content'
            },
            //
            style_2: {
                'effect': 'none',
                'autoplay': true,
                'circular': true,
                'activeTriggerCls': 'selected'
                // 'steps': '5'
                // the effects widget will be disabled when add these attribute;
                // 'navCls': 'test'
                // 'contentCls': 'content'
            },
            //
            style_3: {
                'effect': 'scrollx',
                'autoplay': true,
                'circular': true,
                'activeTriggerCls': 'selected'
                // 'easing': 'easeBoth'
                // 'steps': '5'
                // the effects widget will be disabled when add these attribute;
                // 'navCls': 'test'
                // 'contentCls': 'content'
            },
            //
            style_4: {
                'effect': 'scrolly',
                'autoplay': true,
                'circular': true,
                'activeTriggerCls': 'selected',
                // 'steps': '5'
                // the effects widget will be disabled when add these attribute;
                // 'navCls': 'test'
                // 'contentCls': 'content'
            }
        }
    }

    return (

        <div className="BS_Widgets">
            <div className="BS_Widgets_Tabs">

                <div className="J_TWidget section BS_Tabs_style_1"  data-widget-type="Tabs" data-widget-config={JSON.stringify(widgetConfig.tabs.style_1)}>
                    <h2>Best Seller Widget Tabs style 1</h2>
                    <ul className="ks-switchable-nav">
                        <li className="ks-active">BS_Tabs_style_1_a</li>
                        <li>BS_Tabs_style_1_b</li>
                        <li>BS_Tabs_style_1_c</li>
                        <li>BS_Tabs_style_1_d</li>
                    </ul>
                    <div className="ks-switchable-content">
                        <div>
                            <div style={{background:'#000',width:'500px', height: '200px'}}></div>
                        </div>
                        <div style={{background:'#5ba900',width:'500px', height: '200px', display:'none'}}>

                        </div>
                        <div style={{background:'#c21462',width:'500px', height: '200px', display:'none'}}>

                        </div>
                        <div style={{background:'#5d580f',width:'500px', height: '200px', display:'none'}}>

                        </div>
                    </div>
                </div>

                <div className="J_TWidget section BS_Tabs_style_2"  data-widget-type="Tabs" data-widget-config={JSON.stringify(widgetConfig.tabs.style_2)}>
                    <h2>Best Seller Widget Tabs style 2</h2>
                    <ul className="ks-switchable-nav">
                        <li className="ks-active">BS_Tabs_style_1_a</li>
                        <li>BS_Tabs_style_1_b</li>
                        <li>BS_Tabs_style_1_c</li>
                        <li>BS_Tabs_style_1_d</li>
                    </ul>
                    <div className="ks-switchable-content">
                        <div>
                            <div style={{background:'#000',width:'500px', height: '200px'}}></div>
                        </div>
                        <div style={{background:'#5ba900',width:'500px', height: '200px', display:'none'}}>

                        </div>
                        <div style={{background:'#c21462',width:'500px', height: '200px', display:'none'}}>

                        </div>
                        <div style={{background:'#5d580f',width:'500px', height: '200px', display:'none'}}>

                        </div>
                    </div>
                </div>
                <div className="J_TWidget section BS_Tabs_style_3"  data-widget-type="Tabs" data-widget-config={JSON.stringify(widgetConfig.tabs.style_3)}>
                    <h2>Best Seller Widget Tabs style 3</h2>
                    <ul className="ks-switchable-nav">
                        <li className="ks-active">BS_Tabs_style_1_a</li>
                        <li>BS_Tabs_style_1_b</li>
                        <li>BS_Tabs_style_1_c</li>
                        <li>BS_Tabs_style_1_d</li>
                    </ul>
                    <div className="ks-switchable-content">
                        <div>
                            <div style={{background:'#000',width:'500px', height: '200px'}}></div>
                        </div>

                        <div style={{background:'#5ba900',width:'500px', height: '200px', display:'none'}}>

                        </div>
                        <div style={{background:'#c21462',width:'500px', height: '200px', display:'none'}}>

                        </div>
                        <div style={{background:'#5d580f',width:'500px', height: '200px', display:'none'}}>

                        </div>
                    </div>
                </div>
                <div className="J_TWidget section BS_Tabs_style_4"  data-widget-type="Tabs" data-widget-config={JSON.stringify(widgetConfig.tabs.style_4)}>
                    <div>
                        <h2>Best Seller Widget Tabs style 4</h2>
                        <ul className="ks-switchable-nav">
                            <li className="ks-active">BS_Tabs_style_1_a</li>
                            <li>BS_Tabs_style_1_b</li>
                            <li>BS_Tabs_style_1_c</li>
                            <li>BS_Tabs_style_1_d</li>
                        </ul>
                    </div>
                    <div className="ks-switchable-content">
                        <div>
                            <div style={{background:'#000',width:'500px', height: '250px'}}></div>
                        </div>

                        <div style={{background:'#5ba900',width:'500px', height: '250px', display:'none'}}>

                        </div>
                        <div style={{background:'#c21462',width:'500px', height: '250px', display:'none'}}>

                        </div>
                        <div style={{background:'#5d580f',width:'500px', height: '250px', display:'none'}}>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Tabs;
