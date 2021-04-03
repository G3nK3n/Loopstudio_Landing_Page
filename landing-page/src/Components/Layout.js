import React, { Component } from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

class Layout extends Component {
    
    render() {
        return(
            <div>
                <Header />
            </div>
        );
    }
}

export default Layout;