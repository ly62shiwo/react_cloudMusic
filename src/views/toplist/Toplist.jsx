import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {singerName} from '../../config/utils'
import * as actionType from "./store/actionCreators";
import "./styles.scss";

function Toplist(props) {
  console.log(props, "toplist");
  const { leaderBoardList, playListDetail } = props;
  const { getLeaderboardDispatch, getPlayLisDetailDispatch } = props; // dispatch

  const [select, setSelect] = useState(19723756);
  const [updateTimeName, setUpdateTimeName] = useState("每天更新");

  useEffect(() => {
    getLeaderboardDispatch();
    getPlayLisDetailDispatch(select);
  }, []);

  const songList = () => {
    let arr = [];
    Object.assign(arr, playListDetail.tracks);
    // console.log(arr);
    return (
      <div>
        <table className='m-table'>
          <thead>
            <tr>
              <th style={{ flex: 1, borderLeft: 0 }}></th>
              <th style={{ flex: 5 }}>标题</th>
              <th style={{ flex: 2 }}>时长</th>
              <th style={{ flex: 3 }}>歌手</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td style={{ flex: 1 }}>{index + 1}</td>
                  {index < 3 ? (
                    <td style={{ flex: 5 }}>
                      {/* <Link to={`song?id=${}`}> */}
                        <img
                          src={item.al.picUrl + "?param=50y50&quality=100"}
                          alt=''
                        />
                      {/* </Link> */}
                      {item.name}
                    </td>
                  ) : (
                    <td style={{ flex: 5 }}>{item.name}</td>
                  )}
                  <td style={{ flex: 2 }}></td>
                  <td style={{ flex: 3 }}> {singerName('artist',item.ar)} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='topList'>
      <div className='leftDiv'>
        <h2>云音乐特色榜</h2>
        <ul>
          {leaderBoardList.length
            ? leaderBoardList.map((item) => {
                return (
                  <div key={item.id}>
                    <li
                      className={select === item.id ? "bgc" : null}
                      onClick={() => {
                        setSelect(item.id);
                        getPlayLisDetailDispatch(item.id);
                        setUpdateTimeName(item.updateFrequency);
                      }}
                    >
                      <Link to={`/discover/toplist?id=${item.id}`}>
                        <img src={item.coverImgUrl + "?param=40y40"} alt='' />
                        <p>{item.name}</p>
                      </Link>
                      <p className='update'>{item.updateFrequency}</p>
                    </li>
                    {item.name === "云音乐热歌榜" ? (
                      <h2>云音乐特色榜</h2>
                    ) : null}
                  </div>
                );
              })
            : null}
        </ul>
      </div>
      {/* ------------------------- */}
      <div className='rightDiv'>
        {/* 右侧榜顶部 */}
        <div className='synopsis'>
          <img src={playListDetail.coverImgUrl + "?param=150y150"} alt='' />
          <span className='mark'></span>
          <div className='rightSynopsis'>
            <h2>{playListDetail.name}</h2>
            <div className='updateTime'>
              <span className='icon'></span>
              最近更新：
              <span>{playListDetail.updateTime}</span>
              <span style={{ marginLeft: 10, color: "#999" }}>
                ({updateTimeName})
              </span>
            </div>

            <div>{/* 播放收藏 */}</div>
          </div>
        </div>
        {/* 右侧歌曲列表 */}
        <div className='songList'>
          <div className='title'>
            <h3>歌曲列表</h3>
            <p>100首歌</p>
            <span>
              播放: <strong>{playListDetail.playCount}</strong> 次
            </span>
          </div>
          {songList()}
        </div>
      </div>
    </div>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    leaderBoardList: state.toplist.leaderBoardList,
    playListDetail: state.toplist.playListDetail,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getLeaderboardDispatch() {
      dispatch(actionType.getLeaderboardList());
    },

    getPlayLisDetailDispatch(id) {
      dispatch(actionType.getPlayLisDetailList(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Toplist));
