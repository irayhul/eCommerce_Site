import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/Woow.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>HERBALIFE</h1>
                    <p style={{ color: 'white' }}>
                    Herbalife Nutrition Ltd., also called Herbalife International, Inc. or simply Herbalife, is a global multi-level marketing corporation that develops and sells dietary supplements. The company has been alleged to have fraudulently operated a pyramid scheme. Some products sold by Herbalife have caused acute hepatitis
                    </p>
                    <div className="ctas">
                    <a href="/Aboutme"><div className="banner-cta">About Me...</div></a>
                        <a href="#container"> <div className="banner-cta v2">Shop Now</div></a>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;