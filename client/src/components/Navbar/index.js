import React from 'react';
import { Row, Col, Button } from 'antd'
import './index.css';
import ebay from '../../assets/stone.png';

const Navbar = () => {
    return (
        <div className='top-navbar flex'>
            <Row className='navbar-row flex' width="100%">
                <Col className='narbar-logo flex'>
                    <a href='/'>
                        <img src={ebay} width={200} />
                    </a>
                </Col>
                <Col align="middle flex flex-center">
                    <Button className='flex' type='link' href='/admin'>Admin</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar;