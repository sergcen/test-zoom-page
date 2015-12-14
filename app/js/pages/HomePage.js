'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import PageBlock from '../components/PageBlock'
import BlockRow from '../components/BlockRow'
import BlockContainer from '../components/BlockContainer'
import Block from '../components/Block'

const propTypes = {
    currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    generateBlocks() {
        const blocks1 = [
            function(key){
                return (
                    <BlockContainer type="medium" key={key}>
                        <Block type="small" />
                        <Block type="small" />
                    </BlockContainer>
                );
            },
            function(key){
                return (
                    <Block type="medium" key={key} />
                );
            }
        ];

        function blocks2(key) {
            return (
                <Block type="big" key={key} />
            );
        };
        var blocks = [];
        var sum = 0;
        while (sum < 3) {
            if (Math.round(Math.random())) {
                if (sum < 2) {
                    blocks.push(blocks2(sum));
                    sum+=2;
                }
            } else {
                if (sum < 3) {
                    blocks.push(blocks1[Math.round(Math.random())](sum));
                    sum++;
                }
            }
        }

        return (
            <BlockRow>
                { blocks }
            </BlockRow>
        );
    }


    generatePage(id) {
        return (
            <PageBlock key={ id } active={ this.props.params.id == id }>
                { this.generateBlocks() }
                { this.generateBlocks() }
                { this.generateBlocks() }
            </PageBlock>
        )
    }

    render() {
        return (
            <div>
                <DocumentTitle title="Home"/>
                <section className="content">
                    <BlockRow>
                        { this.generatePage(1) }
                        { this.generatePage(2) }
                        { this.generatePage(3) }
                    </BlockRow>
                    <BlockRow>
                        { this.generatePage(4) }
                        { this.generatePage(5) }
                        { this.generatePage(6) }
                    </BlockRow>
                </section>
            </div>
        );
    }

}

HomePage.propTypes = propTypes;

export default HomePage;