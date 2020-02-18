import React from 'react';
import Img1 from "../../asset/img/Gallery/img1.jpg";
import Img1 from "../../asset/img/Gallery/img2.jpg";
import slideImg1 from "../../asset/img/Gallery/img3.jpg";
import slideImg1 from "../../asset/img/Gallery/img4.jpg";
import slideImg1 from "../../asset/img/Gallery/img5.jpg";
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