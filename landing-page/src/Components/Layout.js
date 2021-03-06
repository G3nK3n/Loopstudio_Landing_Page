import React, { Component } from 'react';
import Header from './Header/Header';
import TopBody from './MainBody/TopBody/TopBody';
import BottomBody from './MainBody/BottomBody/BottomBody';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

class Layout extends Component {
    
    render() {
        return(
            <div>
                <Header />
                <TopBody />
                <BottomBody />
                <Footer />
            </div>
        );
    }
}

export default Layout;