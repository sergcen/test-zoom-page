'use strict';

import React from 'react';

class PageBlock extends React.Component{

    constructor(props) {
        super(props || {});
        this.state = {
            active: false
        };
        this.setActive = this.setActive.bind(this)
    }

    componentDidMount(){
        var el = this.refs.block;
        el.style.height = `${el.clientHeight * 0.3}px`;
        this.refs.contentBlock
            .addEventListener('transitionend', ()=> {
                this.setState({animate: false});
                if (!this.state.active) {
                    $("body").css('overflow-y','auto');
                }

            }, false);
    }

    setActive() {
        let el = this.refs.contentBlock;
        let offset = $(this.refs.block).offset();
        offset.top -= $(window).scrollTop();
        let state = {
            active: !this.state.active,
            animate: true
        };
        if (!this.state.active) {
            el.style.transform = `translate(${-offset.left}px,${-offset.top}px) scale(1)`;
            $("body").css('overflow-y','hidden');
        } else {
            el.style.transform = '';
        }
        this.setState(state);

    }

    calcClass() {
        let name = `${this.state.active?'page-block--active':''}`;
        if (this.state.animate)
            name+=' page-block--animate';
        return name;
    }

    render() {
        return (
            <div className={ `page-block ${ this.calcClass() }` } ref="block">
                <div className="page-block__content" ref="contentBlock">
                    <a onClick={ this.setActive } className="page-block__close">закрыть</a>
                    {this.props.children}
                </div>
                <div className="page-block__trigger" onClick={ this.setActive }></div>
            </div>
        );
    }

}

export default PageBlock;