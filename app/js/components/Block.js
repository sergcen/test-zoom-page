'use strict';

import React from 'react';
import Images from './Images';

class Block extends React.Component{

    constructor(props) {
        super(props);
    }

    getImageUrl() {
        let img = Math.random() * (Images.images.length - 1);
        img = Math.round(img);
        return Images.images[img].display_sizes[0].uri;
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