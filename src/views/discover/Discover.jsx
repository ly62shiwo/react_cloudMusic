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
      getNewDiscShelfDispatch();
      getLeaderboardDispatch();
      getHotSingerDispatch(0, 5);
      getHotAnchorDispatch(5);
    }

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <DiscoverSwiper bannerList={bannerList} />

      <div className='wrap' style={{ position: "relative" }}>
        <HotCommend hotCommendList={hotCommendList} />

        <NewDiscShelf newDiscShelfList={newDiscShelfList} />

        <Leaderboard leaderboardList={leaderboardList} />

        <RightComp
          hotSingerList={hotSingerList}
          hotAnchorList={hotAnchorList}
        />
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
    getNewDiscShelfDispatch() {
      dispatch(actionType.getNewDiscShelfList());
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
