import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class header extends Component {
    render() {
        return (
            <nav className="sypth-navigation">
                <ul>
                    <li><Link to="/">Sypth</Link></li>
                    <li><Link to="/date-calculator">Date calculator</Link></li>
                    <li><Link to="/pie-loader">Pie Loader</Link></li>
                </ul>
            </nav>
        );
    }
}

export default header;
