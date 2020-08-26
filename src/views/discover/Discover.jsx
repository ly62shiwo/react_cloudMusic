import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import DiscoverSwiper from "@/application/discoverSwiper/discoverSwiper.jsx";

function Discover(props) {
  //   console.log(props, "Discover");
  const { bannerList } = props; // 数据
  const { getBannerDataDispatch, getHotCommendDispatch } = props; // dispatch

  useEffect(() => {
    getBannerDataDispatch();
    getHotCommendDispatch();
  }, []);


  return (
    <div>
      <DiscoverSwiper bannerList={bannerList} />
    </div>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    bannerList: state.discover.bannerList,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Discover));
