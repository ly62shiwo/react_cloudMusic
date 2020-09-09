/**
 * 新碟上架
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import "./style.scss";

function NewDiscShelf(props) {
  const { newDiscShelfList } = props;
  // console.log(newDiscShelfList);

  const [newDiscSwiper, setNewDiscSwiper] = useState(null);

  useEffect(() => {
    if (newDiscShelfList.length && !newDiscSwiper) {
      let newDiscSwiper = new Swiper(".swiper-newDiscShelf", {
        loop: true,
        speed: 1500,
        slidesPerView: 5,
        slidesPerGroup: 5,
        loopFillGroupWithBlank: true,
        // 前进后退
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      setNewDiscSwiper(newDiscSwiper);
    }
  }, [newDiscShelfList, newDiscSwiper]);

  return (
    <div className='newDiscShelf'>
      <div className='hotNav'>
        <span className='hotNavIcon'></span>
        <Link to='discover/album' className='goCommend'>
          新碟上架
        </Link>
        <Link to='discover/album' className='goMore'>
          更多
        </Link>
      </div>
      {/* 新碟轮播 */}
      <div className='inner'>
        <div className='swiper-newDiscShelf'>
          <div className='swiper-wrapper'>
            {newDiscShelfList.map((item, index) => {
              return (
                <div className='swiper-slide' key={index}>
                  <div className='imgBgc'>
                    <Link to={`/album?id=${item.id}`}>
                      <img
                        src={item.picUrl + "?param=100y100"}
                        alt='新碟上架'
                      />
                    </Link>
                  </div>
                  <div className='newDiscName'>
                    <Link to={`/album?id=${item.id}`} className='songName'>
                      {item.name}
                    </Link>
                    <br />
                    <Link to={`/artist?id=${item.artist.id}`} className='name'>
                      {item.artist.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='swiper-button-prev'></div>
          <div className='swiper-button-next'></div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NewDiscShelf);
