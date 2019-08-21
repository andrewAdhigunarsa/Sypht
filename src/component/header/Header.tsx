import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/sypth">Sypth</Link></li>
                    <li><Link to="/date-calculator">Date calculator</Link></li>
                    <li><Link to="/pie-loader">Pie Loader</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
