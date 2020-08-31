import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import {
  DiscoverSwiper,
  HotCommend,
  NewDiscShelf,
  Leaderboard,
  RightComp,
} from "@/application/discoverComp";

function Discover(props) {
  const {
    bannerList,
    hotCommendList,
    newDiscShelfList,
    leaderboardList,
    hotSingerList
  } = props; // 数据
  const {
    getBannerDataDispatch,
    getHotCommendDispatch,
    getNewDiscShelfDispatch,
    getLeaderboardDispatch,
    getHotSingerDispatch
  } = props; // dispatch

  useEffect(() => {
    getBannerDataDispatch();
    getHotCommendDispatch();
    getNewDiscShelfDispatch();
    getLeaderboardDispatch();
    getHotSingerDispatch(5)
  }, []);

  return (
    <div>
      <DiscoverSwiper bannerList={bannerList} />

      <div className='wrap'  style={{ position: "relative" }}>
        <HotCommend hotCommendList={hotCommendList} />

        <NewDiscShelf newDiscShelfList={newDiscShelfList} />

        <Leaderboard leaderboardList={leaderboardList} />

        <RightComp hotSingerList={hotSingerList} />
      </div>
    </div>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  // let {bannerList,hotCommendList,newDiscShelfList,LeaderboardList} = state.discover

  return {
    bannerList: state.discover.bannerList,
    hotCommendList: state.discover.hotCommendList,
    newDiscShelfList: state.discover.newDiscShelfList,
    leaderboardList: state.discover.leaderboardList,
    hotSingerList: state.discover.hotSingerList
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
    getNewDiscShelfDispatch() {
      dispatch(actionType.getNewDiscShelfList());
    },
    getLeaderboardDispatch() {
      dispatch(actionType.getLeaderboardList());
    },
    getHotSingerDispatch(num) {
      dispatch(actionType.getHotSingerList(num));
    },
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Discover));
