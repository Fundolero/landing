import React from 'react';
import {BannerDiv} from './styles';
import { Parallax } from "react-parallax";


const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "80%",
    left: "23%",
    transform: "translate(-20%,-20%)"
  };

function Banner() {
    return(
        <BannerDiv>            
            <Parallax bgImage={require('../../assets/images/banner.jpg')} strength={100} style={{height:'100%', width:'100%'}}>
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>GET STARTED</div>
                </div>
            </Parallax>  
        </BannerDiv>
    )
}

export default Banner;