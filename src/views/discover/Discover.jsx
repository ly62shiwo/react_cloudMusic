import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCount } from "@/config/utils";
import * as actionType from "./store/actionCreators";
import { DiscoverSwiper, NewDiscShelf } from "@/application/discoverComp";
import "./discover.scss";

function Discover(props) {
  const {
    bannerList,
    hotCommendList,
    newDiscShelfList,
    leaderboardList,
    hotSingerList,
    hotAnchorList,
  } = props; // 数据
  const {
    getBannerDataDispatch,
    getHotCommendDispatch,
    getNewDiscShelfDispatch,
    getLeaderboardDispatch,
    getHotSingerDispatch,
    getHotAnchorDispatch,
  } = props; // dispatch

  useEffect(() => {
    if (
      !bannerList.length ||
      !hotCommendList.length ||
      !newDiscShelfList.length ||
      !leaderboardList.length ||
      !hotSingerList.length ||
      !hotAnchorList.length
    ) {
      getBannerDataDispatch();
      getHotCommendDispatch();
      getNewDiscShelfDispatch('limit=10&type=new');
      getLeaderboardDispatch();
      getHotSingerDispatch(0, 5);
      getHotAnchorDispatch(5);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* 轮播图 */}
      <DiscoverSwiper bannerList={bannerList} />

      <div className='wrap' style={{ position: "relative" }}>
        <div className='m_wrap bigDiv'>
          {/* 热门推荐 */}
          <div className='hotCommend'>
            <div className='hotNav'>
              <span className='hotNavIcon'></span>
              <Link to='discover/playlist' className='goCommend'>
                热门推荐
              </Link>
              <Link to='discover/playlist' className='goMore'>
                更多
              </Link>
            </div>
            <div className='hotCommendCard'>
              { hotCommendList.map((item) => {
                    return (
                      <div className='picture' key={item.id}>
                        <Link to={`/playlist?id=${item.id}`}>
                          <img
                            src={item.coverImgUrl + "?param=140y140"}
                            alt=''
                          />
                        </Link>
                        <div className='playBgi'>
                          <span className='earphoneIcon'></span>
                          <span className='playCount'>
                            {getCount(item.playCount)}
                          </span>
                          {/* 播放 */}
                          <span
                            className='playIcon'
                            onClick={() => console.log(item.id)}
                          ></span>
                        </div>

                     
                          <Link className='commendName' to={`/playlist?id=${item.id}`}>
                            {item.name}
                          </Link>
                        
                      </div>
                    );
                  })}
            </div>
          </div>

          {/* 新碟上架 */}
          <NewDiscShelf newDiscShelfList={newDiscShelfList} />

          {/* 榜单 */}
          <div className='leaderBoard'>
            <div className='hotNav'>
              <span className='hotNavIcon'></span>
              <Link to='discover/toplist' className='goCommend'>
                榜单
              </Link>
              <Link to='discover/toplist' className='goMore'>
                更多
              </Link>
            </div>
            <div className='leaderBoardCard'>
              {leaderboardList.map((item) => {
                    return (
                      <div className='listDetails' key={item.id}>
                        <Link to={`/discover/toplist?id=${item.id}`}>
                          <img
                            src={item.coverImgUrl + "?param=100y100"}
                            alt='榜单'
                          ></img>
                          <span className='mark'></span>
                        </Link>
                        <div className='toToplist'>
                          <Link to={`/discover/toplist?id=${item.id}`}>
                            {item.name}
                          </Link>
                          <span
                            className='playIcon'
                            onClick={() => console.log("播放")}
                          ></span>
                          <span
                            className='collect'
                            onClick={() => console.log("登录收藏")}
                          ></span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>

        {/* 右侧热门 */}
        <div className='rightCard'>
          <div className='toLogin'>
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <button
              onClick={(e) => {
                console.log("登录");
              }}
            >
              用户登录
            </button>
          </div>

          <div className='singer'>
            <div className='singerNav'>
              <span>热门歌手</span>
              <Link to='discover/artist'>查看全部 {">"} </Link>
            </div>
            {hotSingerList.map((item) => {
                  return (
                    <Link to={`/artist?id=${item.id}`} key={item.id}>
                      <div className='singerDetail'>
                        <img src={item.img1v1Url + "?param=62y62"} alt=''></img>
                        <p>{item.name}</p>
                      </div>
                    </Link>
                  );
                })}
          </div>
          <div className='anchor'>
            <div className='anchorNav'>
              <span>热门主播</span>
            </div>

            <ul className='anchorList'>
              { hotAnchorList.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link to={`/user/home?id=${item.id}`}>
                          <img
                            style={{ width: 40, height: 40 }}
                            src={item.avatarUrl}
                            alt=''
                          />
                        </Link>
                        <p>
                          <Link to={`/user/home?id=${item.id}`}>
                            {item.nickName}
                          </Link>
                        </p>
                        <span></span>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    bannerList: state.discover.bannerList,
    hotCommendList: state.discover.hotCommendList,
    newDiscShelfList: state.discover.newDiscShelfList,
    leaderboardList: state.discover.leaderboardList,
    hotSingerList: state.discover.hotSingerList,
    hotAnchorList: state.discover.hotAnchorList,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionType.getBannerList());
    },
    getHotCommendDispatch() {
      dispatch(actionType.getHotCommendList());
    },
    getNewDiscShelfDispatch(query) {
      dispatch(actionType.getNewDiscShelfList(query));
    },
    getLeaderboardDispatch() {
      dispatch(actionType.getLeaderboardList());
    },
    getHotSingerDispatch(count, num) {
      dispatch(actionType.getHotSingerList(count, num));
    },
    getHotAnchorDispatch(num) {
      dispatch(actionType.getHotAnchorList(num));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Discover));
