// LICENSE : MIT
"use strict";
import React from "react";
class FixedBar extends React.Component {
    render() {
        return (
            <div className="FixedBar">{this.props.children}</div>
        );
    }
}

export default FixedBar;