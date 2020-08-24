import React from 'react'
import DiscoverSwiper from '@/component/discoverSwiper/discoverSwiper.jsx'

function Discover() {
    const bannerList = [1,2,3,4].map (item => {
        return { imageUrl: "http://p1.music.126.net/8P_KGkoBNoparZyDZjRHew==/109951165263586946.jpg" }
      });
    
    return (
        <div>
            <DiscoverSwiper bannerList={bannerList} />
        </div>
    )
}

export default Discover
