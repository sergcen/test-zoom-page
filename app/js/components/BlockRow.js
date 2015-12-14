'use strict';

import React from 'react';

class BlockRow extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="block-row">
                {this.props.children}
            </div>
        );
    }

}

export default BlockRow;