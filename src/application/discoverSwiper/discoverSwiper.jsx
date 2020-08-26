import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import "./DiscoverSwiper.scss";

function DiscoverSwiper(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".swiper-container", {
        loop: true,
        speed: 1000,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
        // 前进后退
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <div className='banner'>
      <div className='swiper wrap'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {bannerList.map((slider,index) => {
              return (
                <div className='swiper-slide' key={index}>
                  {/* <a href={slider.url}> */}
                  <img src={slider.imageUrl} alt='推荐' />
                  {/* </a> */}
                </div>
              );
            })}
          </div>
          <div className='swiper-pagination'></div>
        </div>
        {/* <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div> */}
        <div className='download'>
          <Link className='btn' to='/download'></Link>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSwiper;
