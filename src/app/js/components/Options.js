import React from 'react';

import Option from './Option';

export default class Options extends React.Component {
    render() {
        return (
            <div className="wrap">
                <h1 className="banner">Options</h1>
                <Option />
                <Option />
            </div>
        )
    }
}
