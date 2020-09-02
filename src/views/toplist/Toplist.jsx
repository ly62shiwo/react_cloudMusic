import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import "./styles.scss";

function Toplist(props) {
  console.log(props, "toplist");
  const { leaderBoardList, playListDetail } = props;
  const { getLeaderboardDispatch, getPlayLisDetailDispatch } = props; // dispatch

  const [select, setSelect] = useState(19723756);
  const [updateTimeName, setUpdateTimeName] = useState("每天更新");
  const [tracksList, setTracksList] = useState();
  const { tracks } = playListDetail;

  const aaa = () => {
    if (playListDetail) return console.log(typeof tracks, 1111);
  };

  useEffect(() => {
    getLeaderboardDispatch();
    getPlayLisDetailDispatch(select);
  }, []);

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
            <p>{aaa()}首歌</p>
            <span>
              播放: <strong>{playListDetail.playCount}</strong> 次
            </span>
          </div>

          <div>

          </div>
          
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
