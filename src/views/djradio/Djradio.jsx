import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import RankCount from "@/component/rankCount";
import * as actionType from "./store/actionCreators";
import "./djradio.scss";

function Djradio(props) {
  // console.log(props);

  const { djCategory, djRecommendList, djProgramTop, djHotRadio } = props;
  const {
    getDjCategoryDispatch,
    getDjRecommendDispatch,
    getDjProgramTopListDispatch,
    getDjHotRadioListDispatch,
  } = props;

  const { query, hotRadioList } = djHotRadio;

  const [selectCategory, setSelectCategory] = useState("");
  const [categoryId, setCategoryID] = useState();

  useEffect(() => {
    getDjCategoryDispatch();
    getDjRecommendDispatch();
    getDjProgramTopListDispatch();

    //eslint-disable-next-line
  }, []);

  // 获取热门
  const getDjHotRadio = (id) => {
    setCategoryID(id);
    let data = `offset=${(query.page - 1) * 21}&limit=21&cateId=${id}`;
    getDjHotRadioListDispatch(data);
  };
  // 分页
  const changePagination = (page) => {
    let data = `offset=${(page - 1) * 21}&limit=21&cateId=${categoryId}`;
    getDjHotRadioListDispatch(data, page);
    window.scrollTo(0, 0);
  };
  // rditop
  return (
    <div className='djradio'>
      <ul className='banner'>
        {djCategory.length
          ? djCategory.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to={`/discover/djradio/category?id=${item.id}`}
                    className={
                      selectCategory === item.name
                        ? "z-sel specific"
                        : "specific"
                    }
                    onClick={() => {
                      setSelectCategory(item.name);
                      getDjHotRadio(item.id);
                    }}
                  >
                    <span
                      className='icon'
                      style={{ backgroundImage: `url(${item.picWebUrl})` }}
                    ></span>
                    <em>{item.name}</em>
                  </Link>
                </li>
              );
            })
          : ""}
      </ul>
      {/* 节目推荐、排行 */}
      <div
        className={
          props.location.pathname.indexOf("category") === -1 ? "rditop" : "show"
        }
      >
        {/* 推荐节目 */}
        <div className='leftCommend'>
          <div className='hotNav' style={{ border: 0 }}>
            <Link to='djradio/recommend' className='goCommend'>
              推荐节目
            </Link>
            <Link to='djradio/recommend' className='goMore'>
              更多 &gt;
            </Link>
          </div>
          <ul className='box'>
            {djRecommendList.length
              ? djRecommendList.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className={(index + 1) % 2 === 0 ? "odd itm" : "itm"}
                    >
                      <img src={item.coverUrl + `?param=40x40"`} alt='' />

                      <div className='name'>
                        <h3>
                          <Link to={`/program?id=${item.id}`}>
                            {item.mainSong.name}
                          </Link>
                        </h3>
                        <p>
                          <Link to={`/djradio?id=${item.radio.id}`}>
                            {item.radio.name}
                          </Link>
                        </p>
                      </div>

                      <Link
                        to={`djradio/category?id=${item.radio.categoryId}`}
                        className='tag'
                      >
                        {item.radio.category}
                      </Link>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>

        {/* 节目排行榜 */}
        <div className='rightTop'>
          <div className='hotNav' style={{ border: 0 }}>
            <Link to='' className='goCommend'>
              节目排行榜
            </Link>
            <Link to='' className='goMore'>
              更多 &gt;
            </Link>
          </div>
          <ul className='box'>
            {djProgramTop.list.slice(0, 10).map((item, index) => {
              return (
                <li
                  key={item.program.id}
                  className={(index + 1) % 2 === 0 ? "odd itm" : "itm"}
                >
                  <div className='order'>
                    <p className={index < 3 ? "topRed" : "notop"}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </p>

                    <RankCount rank={item.rank} lastRank={item.lastRank} />
                  </div>

                  <img src={item.program.coverUrl + `?param=40x40"`} alt='' />

                  <div className='name' style={{ width: "55%" }}>
                    <h3>
                      <Link to={`/program?id=${item.program.id}`}>
                        {item.program.mainSong.name}
                      </Link>
                    </h3>
                    <p>
                      <Link to={`/djradio?id=${item.program.dj.userId}`}>
                        {item.program.dj.nickname}
                      </Link>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 电台排行榜 */}
      <div
        className={
          props.location.pathname.indexOf("category") !== -1
            ? "hotdjradio"
            : "show"
        }
      >
        <div style={{ height: 33, lineHeight: "33px" }}>
          <h3 className='radioRanking'>电台排行榜</h3>
          <span className='rightNo'>不知道</span>
        </div>

        <ul className='hotRadioList'>
          {hotRadioList.length
            ? hotRadioList.map((item, index) => {
                return (
                  <li key={item.id}>
                    <a href=''>
                      <img src={item.picUrl + `?param=120y120`} alt='' />
                    </a>

                    <div className='info'>
                      <h3 className='name'>
                        <a href='#'>{item.name}</a>
                      </h3>

                      <span className='djname'>
                        <i className='user-icn'></i>
                        <a href='#'>{item.dj.nickname}</a>
                        <i className='music-icn'></i>
                      </span>

                      <p>
                        共{item.programCount}期 &nbsp;&nbsp;&nbsp; 订阅
                        {item.subCount}次
                      </p>
                    </div>
                  </li>
                );
              })
            : ""}
        </ul>
        {/* 分页 */}
        <Pagination
          className='pagination'
          onChange={changePagination}
          current={query.page}
          total={query.total}
          pageSize={"22"}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    djCategory: state.djradio.djCategoryList,
    djRecommendList: state.djradio.djRecommendList,
    djProgramTop: state.djradio.djProgramTop,
    djHotRadio: state.djradio.djHotRadio,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getDjCategoryDispatch() {
      dispatch(actionType.getDjCategoryList());
    },
    getDjRecommendDispatch() {
      dispatch(actionType.getDjRecommendList());
    },
    getDjProgramTopListDispatch() {
      dispatch(actionType.getDjProgramTopList());
    },
    getDjHotRadioListDispatch(query, page) {
      dispatch(actionType.getDjHotRadioList(query, page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Djradio));
