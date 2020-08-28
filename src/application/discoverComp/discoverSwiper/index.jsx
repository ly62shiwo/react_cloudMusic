import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import "./style.scss";

function DiscoverSwiper(props) {
  
  const { bannerList } = props;
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const [bgiSwiper, setBgiSwiper] = useState([]);

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
        effect: "fade",
        // 事件
        on: {
          slideChangeTransitionStart: function () {
            setBgiSwiper(bannerList[this.realIndex]);
          },
        },
      });

      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList, sliderSwiper]);

  return (
    <div className='disSwi'>
      <div
        className='blurred-background'
        style={{
          backgroundImage: `url(${bgiSwiper.imageUrl})`,
        }}
      ></div>
      <div className='swiper wrap'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {bannerList.map((slider, index) => {
              return (
                <div className='swiper-slide' key={index}>
                  <a href={slider.url}>
                  <img src={slider.imageUrl} alt='推荐' />
                  </a>
                </div>
              );
            })}
          </div>
          <div className='swiper-pagination'></div>
        </div>
        <div className='download'>
          <Link className='btn' to='/download'></Link>
        </div>
      </div>
    </div>
  );
}

export default (React.memo(DiscoverSwiper));
