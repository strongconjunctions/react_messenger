import React from 'react';
import { Link } from 'react-router';

import Footer from '../components/Footer';


export default class Layout extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="logo"><span className="lightblue">MS</span>GR</h1>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/options">Options</Link>
                </nav>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}
