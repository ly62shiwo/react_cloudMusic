import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actionType from "../store/actionCreators";
import { timestamp } from "@/config/utils";
import "./style.scss";

function PlaylistDetails(props) {
  console.log(props, "ArtistDetails");

  const { location, playListDetail } = props;
  const { getPlayListDetailDispatch } = props;

  const { creator, tracks } = playListDetail;

  useEffect(() => {
    let id = location.search.slice(4);
    getPlayListDetailDispatch(id);
    
  }, []);

  return (
    <div className='playListDetails'>
      <div className='left'>
        <div className='lefttop'>
          <img src={playListDetail.coverImgUrl + "?param=200y200"} alt='' />
          <div className='mask'></div>

          <div className='left-introduce'>
            
            <div className='left-title'>
              <i className='icon-playlists'></i>
              <h2>{playListDetail.name}</h2>
            </div>

            <div>
              <img src={creator.avatarUrl + "?param=40y40"} alt='' />
              <Link>{creator.nickname}</Link>
              <span>{timestamp(playListDetail.createTime, "point")}创建</span>
            </div>
          </div>
        </div>

        {/* 播放列表 */}
        {/* <table className='m-table'>
          <tbody>
            {hotSongs.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className={(index + 1) % 2 !== 0 ? "odd" : ""}
                  style={{ height: 30 }}
                >
                  <td style={{ flex: 1 }} className='rank'>
                    <span>{index + 1}</span>
                    <span
                      className='playIcon'
                      onClick={() => console.log("播放")}
                    ></span>
                  </td>
                  <td style={{ flex: 6 }} className='songName'>
                    <p>
                      <Link to={`song?id=${item.id}`}>{item.name}</Link>
                      <span className='alia'>{item.alia}</span>
                    </p>
                  </td>
                  <td style={{ flex: 2 }}>{timestamp(item.dt, ":")}</td>
                  <td style={{ flex: 3 }}>
                    <Link to={`album?id=${item.al.id}`}>{item.al.name}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>

      <div className='right'>
        <div>
          <h2>喜欢这个歌单的人</h2>
          <ul className='ul-sin'>
            {/* {hotSingerList.slice(0, 6).map((item, index) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    console.log(item.id);
                  }}
                >
                  <div className='hot-singer'>
                    <Link to={`/artist?id=${item.id}`}>
                      <img src={`${item.img1v1Url}?param=50y50`} alt='' />
                    </Link>
                    <p>
                      <Link to={`/artist?id=${item.id}`}>{item.name}</Link>
                    </p>
                  </div>
                </li>
              );
            })} */}
          </ul>
        </div>

        <div style={{ marginTop: 20 }}>
          <h2>网易云音乐多端下载</h2>
          <p style={{ fontSize: 10, marginTop: 10 }}>下个锤锤</p>
        </div>
      </div>
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    playListDetail: state.playlist.playListDetail,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getPlayListDetailDispatch(id) {
      dispatch(actionType.getPlayListDetail(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PlaylistDetails));
