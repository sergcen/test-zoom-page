'use strict';

import React from 'react';

class BlockContainer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ `block-container block-container--${this.props.type}` }>
                {this.props.children}
            </div>
        );
    }

}

export default BlockContainer;