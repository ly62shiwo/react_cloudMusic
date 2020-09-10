import React from "react";
import "./styles.scss";

export default function PlayMusic() {
  return (
    <div className='playMusic'>
      <div className='m_wrap' style={{height: 50}}>

        <div className='playBtn'>
          <a href='javascript:;' className='previousSong' title='上一首'></a>
          <a href='javascript:;' className='playSong' title='播放/暂停'></a>
          <a href='javascript:;' className='nextSong' title='下一首'></a>
        </div>

        <div className='playImg'>
          <a href=''>
            <img src='' alt='' />
          </a>
        </div>

      </div>
    </div>
  );
}
