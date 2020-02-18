import React from 'react';
import slideImg1 from "../../";
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