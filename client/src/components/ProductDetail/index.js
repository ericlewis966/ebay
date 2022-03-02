import { Row } from 'antd';
import React, { useState } from 'react';
import BigImage from 'assets/products/cycle/s-l1600.jpg';
import BigImage2 from 'assets/products/cycle/s-l1601.jpg';

const Thumbnail = ({image, onClick}) => {
    return (
        <li onClick={onClick}>
            <img src={image} alt="product" className='small-product' />
        </li>
    )
}

const ProductDetail = () => {
    const [original, setOriginal] = useState(BigImage);
    return (
        <div className='product-detail'>
            <Row>
                <img src={original} alt="product" className='big-product' />
            </Row>
            <ul id='product-list'>
                <Thumbnail image={BigImage} onClick={() => setOriginal(BigImage)}/>
                <Thumbnail image={BigImage2} onClick={() => setOriginal(BigImage2)}/>
                <Thumbnail image={BigImage} onClick={() => setOriginal(BigImage)}/>
                <Thumbnail image={BigImage2} onClick={() => setOriginal(BigImage2)}/>
                <Thumbnail image={BigImage} onClick={() => setOriginal(BigImage)}/>
                <Thumbnail image={BigImage2} onClick={() => setOriginal(BigImage2)}/>
            </ul>
        </div>
    )
}

export default ProductDetail;