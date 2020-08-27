import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import {
  DiscoverSwiper,
  HotCommend,
  NewDiscShelf,
} from "@/application/discoverComp";

function Discover(props) {
  const { bannerList, hotCommendList, newDiscShelfList } = props; // 数据
  const {
    getBannerDataDispatch,
    getHotCommendDispatch,
    getNewDiscShelfDispatch,
  } = props; // dispatch

  useEffect(() => {
    getBannerDataDispatch();
    getHotCommendDispatch();
    getNewDiscShelfDispatch();
  }, []);

  return (
    <div>
      <DiscoverSwiper bannerList={bannerList} />

      <HotCommend hotCommendList={hotCommendList} />

      <NewDiscShelf newDiscShelfList={newDiscShelfList} />
    </div>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    bannerList: state.discover.bannerList,
    hotCommendList: state.discover.hotCommendList,
    newDiscShelfList: state.discover.newDiscShelfList,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Discover));
