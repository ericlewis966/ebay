import {Row, Col, Button, Divider} from "antd";
import Navbar from 'components/Navbar';
import ProductDetail from "components/ProductDetail";
import ProfileItem from 'components/ProfileItem';
import ebay from "assets/stone.jpg"
import { getUser } from "actions/user";
import { useEffect, useState } from "react";


const MainView = () => {

    const [currentSeller, setCurrentSeller] = useState({
        name: '',
        url: '',
        feedback: '',
        link: ''
    });

    useEffect(async() => {
        const users = await getUser();
        setCurrentSeller(users[users.length - 1]);
    }, [])

    return (
        <>
            <div className="App">
                <Navbar />
                <div className='root-container'>
                    <Row className='main-header flex'>
                        <img className='flex' src={ebay} />
                    </Row>
                    <Row className='product-panel flex'>
                        <Col className='col-product-row col-product-detail flex' span={9}>
                            <ProductDetail />
                        </Col>
                        <Col className='col-product-row col-product-detail flex col' span={9}>
                            <Row className='product-panel-center flex' >
                                <div><h1>Title listing</h1></div>
                            </Row>
                            <Divider />
                            <Row className='product-panel-center stock-number flex'>Stock number:</Row>
                            <Divider />
                            <Row className='product-panel-center usd-price flex'>Price $US: xxxxxPricexxxxx</Row>
                            <Divider />
                            <Row className='product-panel-center seller-type-bar flex'>
                                <Col className='seller-type'>Free finding</Col>
                                <Col className='seller-type'>30-day return</Col>
                                <Col className='seller-type'>Longtime member</Col>
                            </Row>
                            <Divider />
                            <Row className='product-panel-center  flex'>
                                <Button type='primary' size='large'>Message to seller for buyt it now.</Button>
                            </Row>
                        </Col>
                        <Col className='col-product-row col-seller-profile flex' align="middle" span={6}>
                            <ProfileItem name={currentSeller.name} href={currentSeller.url} link={currentSeller.link} feedback={currentSeller.feedback} />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default MainView;