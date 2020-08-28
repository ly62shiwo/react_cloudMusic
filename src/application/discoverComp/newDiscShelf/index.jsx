import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import "./style.scss";

function Index(props) {
  const { newDiscShelfList } = props;
  console.log(newDiscShelfList);

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
    <div style={{ width: 980, margin: "0 auto" }}>
      <div
        style={{
          width: 730,
          background: "#fff",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <div className='hotNav'>
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
                          src={item.picUrl}
                          alt='新碟上架'
                          style={{ width: 100, height: 100 }}
                        />
                      </Link>
                    </div>
                    <Link className='songName'>{item.name}</Link>
                    <Link className='name'>{item.artist.name}</Link>
                  </div>
                );
              })}
            </div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
