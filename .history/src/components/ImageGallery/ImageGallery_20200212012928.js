import React from 'react';
import slideImg1 from "../../asset/img/slideImg.jpg";
import "./ImageGallery.scss";
const ImageGallery = ()=>{
    return(
        <div className='img-gallery'>
            <img src={slideImg1} alt=''/>
            <img src={slideImg1} alt=''/>
            <img src={slideImg1} alt=''/>
            <img src={slideImg1} alt=''/>
            <img src={slideImg1} alt=''/>
            <img src={slideImg1} alt=''/>
            
        </div>
    )
}

export default ImageGallery;