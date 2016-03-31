import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/options">Options</Link>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
