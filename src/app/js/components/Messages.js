import React from 'react';

import Message from './Message';

export default class Messages extends React.Component {
    render() {
        return (
            <div className="wrap">
                <h1 className="banner">Messages</h1>
                <Message />
            </div>
        )
    }
}
