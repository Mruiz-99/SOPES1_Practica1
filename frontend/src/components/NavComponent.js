import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navegacion">
                <ul id="nav">
                    <li>
                        <Link to='/calculadora'>
                            Calculadora
                    </Link>
                    </li>
                    <li>
                        <Link to='/logs'>
                            Logs
                    </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Navbar;