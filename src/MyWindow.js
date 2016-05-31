// LICENSE : MIT
"use strict";
import SizeMe from 'react-sizeme';
import React from "react";
import FixedBar from "./FixedBar";
import {ToggleOrPattern} from "react-toggle-pattern";
class MyWindow extends React.Component {
    render() {
        const {width, height} = this.props.size;
        const Order = {
            High: width > 200,
            Middle: width > 700,
            Low: width > 1200
        };
        console.log(Order);
        return (
            <div className="MyWindow">
                <ToggleOrPattern High={Order.High} Middle={Order.Middle} Low={Order.Low}>
                    <FixedBar Middle={true}>Middle</FixedBar>
                    <FixedBar Low={true}>Low</FixedBar>
                    <FixedBar Middle={true}>Middle</FixedBar>
                    <FixedBar High={true}>High</FixedBar>
                </ToggleOrPattern>
            </div>
        );
    }
}

// Create the config
const config = {monitorHeight: true};

// Call SizeMe with the config to get back the HOC. 
const SizeMeHOC = SizeMe(config);

// Wrap your component with the HOC.
export default SizeMeHOC(MyWindow);