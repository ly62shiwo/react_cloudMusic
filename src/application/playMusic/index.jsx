import React, { useState } from "react";
import "./styles.scss";

export default function PlayMusic() {
  const [controlPlayMusic, setControlPlayMusic] = useState(true); //播放暂停
  const [showLock, setShowLock] = useState(true); // 锁
  const [showPlayMusic, setShowPlayMusic] = useState(false);

  const show = () => {
    const style = {
      bottom: -45,
    };
    if (showLock === false && showPlayMusic === false) {
      return style;
    }
  };

  return (
    <div
      className='playMusic'
      style={showLock === false ? show() : null}
      onMouseOver={() => setShowPlayMusic(true)}
      onMouseOut={() => setShowPlayMusic(false)}
    >
      {/* 控制显隐 */}
      <div className='controlShow'>
        <span
          onClick={() => setShowLock(!showLock)}
          className={showLock === true ? "iconLockOpen" : "iconLocClose"}
        ></span>
      </div>

      <div className='m_wrap' style={{ height: 50, position: "relative" }}>
        {/* 上播暂下 */}
        <div className='playBtn'>
          <span className='previousSong' title='上一首'></span>
          <span
            onClick={() => setControlPlayMusic(!controlPlayMusic)}
            className={controlPlayMusic === true ? "playSong" : "suspend"}
            title='播放/暂停'
          ></span>
          <span className='nextSong' title='下一首'></span>
        </div>
        {/* 头像 */}
        <div className='playImg'></div>
      </div>
    </div>
  );
}
