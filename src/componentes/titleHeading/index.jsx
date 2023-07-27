import React from "react";
import Image from 'next/image';

function TitleHeading ({title,text,img,alt,imgPhone}){
    return(
        <div className="main-container-heading">
        <div className="heading-container">
            <div className="heading-img-phone">
                <Image src={imgPhone} alt={alt} />
            </div>
            <div className="heading-info"> 
            <h1 className="heading-title">
                {title}
            </h1>
            <p className="heading-p">
                {text}
            </p>
            </div>

            <div className="heading-img">
                <Image src={img} alt={alt} />
            </div>
        </div>
        </div>
    )
}

export default TitleHeading;