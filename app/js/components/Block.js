'use strict';

import React from 'react';

class Block extends React.Component{

    constructor(props) {
        super(props);
    }

    getImageUrl() {
        return "https://unsplash.it/640/480?image="+Math.round(Math.random()*100);
    }


    render() {
        return (
            <div className={ `block block--${this.props.type}` }>
                <img src={ this.getImageUrl() } />
            </div>
        );
    }

}

export default Block;