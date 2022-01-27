import React,{useState} from "react";
import Slider from "react-slick";
import {PrevArrow,NextArrow} from "./Arrow";
function Carousel() {
    const images=[
        "https://assets.ajio.com/medias/sys_master/images/images/h6f/hc3/46980587913246/27012022-D-Unisex-topbannercarousel-p3-winterwear-brands-upto70.jpg",
        "https://assets.ajio.com/medias/sys_master/images/images/ha2/hdc/46980588109854/27012022-D-Unisex-topbannercarousel-p5-brands-4090.jpg",
        "https://assets.ajio.com/medias/sys_master/images/images/h80/h9a/46980588306462/27012022-D-Unisex-topbannercarousel-p7-footwear-min50.jpg",
        "https://assets.ajio.com/medias/sys_master/images/images/h46/hfd/46980587520030/27012022-D-Unisex-topbannercarousel-p1-clearancesale-upto90-2-.jpg",
        "https://assets.ajio.com/medias/sys_master/images/images/h82/h21/46980587782174/27012022-D-Unisex-topbannercarousel-p2-clearancesale-flat70-2-.jpg",
        "https://assets.ajio.com/medias/sys_master/images/images/hcc/h96/46980588044318/27012022-D-Unisex-topbannercarousel-p4-superdry-upto50.jpg",
        "https://assets.ajio.com/medias/sys_master/images/images/h70/h4a/46980588175390/27012022-D-Unisex-topbannercarousel-p6-premium-brands-3060.jpg"
    ];
    var settingsLg={
        autoplay:true,
        speed:500,
        infinite:true,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        centerPadding:"150px",
        centerMode:true
    }
    var settings={
        infinite:true,
        arrows:true,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        speed:500,
        slidesToScroll:1,
        slidesToShow:1
    }
  return (<>
        <div className="lg:hidden">
            <Slider {...settings}>
                {images.map((image)=>{
                    return (
                        <div className="w-full h-60 px-2">
                            <img src={image} alt="banner" className="w-full h-full object-cover object-center "/>
                        </div>
                    )
                })}
            </Slider>
        </div>
        <div className="hidden lg:block ">
            <Slider {...settingsLg}>
                {images.map((image)=>{
                    return (
                        <div className="w-full h-96 px-2">
                            <img src={image} alt="banner" className="w-full h-full object-center object-cover"/>
                        </div>
                    )
                })}
            </Slider>
        </div>
  </>)
}

export default Carousel;
