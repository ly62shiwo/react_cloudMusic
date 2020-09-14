import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionType from "./store/actionCreators";
import "./djradio.scss";

function Djradio(props) {
  console.log(props);

  const { djCategory, djRecommendList, djProgramTop } = props;
  const {
    getDjCategoryDispatch,
    getDjRecommendDispatch,
    getDjProgramTopListDispatch,
  } = props;

  const [select, setSelect] = useState();

  useEffect(() => {
    //   if (!djCategory) {
    getDjCategoryDispatch();
    getDjRecommendDispatch();
    getDjProgramTopListDispatch();
    //   }
    //eslint-disable-next-line
  }, []);

  const rankCount = (rank,lastRank) => {
    console.log(rank,lastRank);
    if(lastRank - rank === 0) {
      return <span className='rankZero'> <i className='u-icn icn-'></i>0</span>
    }
    if(lastRank - rank > 0 ) {
      return <span className='rankAdd'> <i className='u-icn icnadd'></i> {lastRank - rank} </span>
    }
    if(lastRank - rank > -3) {
      return <span className='rankCut'> <i className='u-icn icncut'></i> { Math.abs( lastRank - rank) } </span>
    }
    // if(lastRank - rank <= -3) {
    //   return <span > <i className='u-icn icnnew'> </i></span>
    // }

  }
  return (
    <div className='djradio'>
      <ul className='banner'>
        {djCategory.map((item) => {
          return (
            <li key={item.id}>
              <a
                href='javascript:;'
                className={select === item.name ? "z-sel specific" : "specific"}
                onClick={() => {
                  setSelect(item.name);
                  console.log(item.id);
                }}
              >
                <span
                  className='icon'
                  style={{ backgroundImage: `url(${item.picWebUrl})` }}
                ></span>
                <em>{item.name}</em>
              </a>
            </li>
          );
        })}
      </ul>

      <div className='rditop'>
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
            {djRecommendList.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={(index + 1) % 2 === 0 ? "odd itm" : "itm"}
                >
                  <img src={item.coverUrl + `?param=40x40"`} alt='' />
                  {/* --- */}
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
                  {/* --- */}
                  <Link
                    to={`djradio/category?id=${item.radio.categoryId}`}
                    className='tag'
                  >
                    {item.radio.category}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

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

                    <p>{rankCount(item.rank, item.lastRank)}</p>

                  </div>

                  <img src={item.program.coverUrl + `?param=40x40"`} alt='' />
                  {/* --- */}
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
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    djCategory: state.djradio.djCategoryList,
    djRecommendList: state.djradio.djRecommendList,
    djProgramTop: state.djradio.djProgramTop,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Djradio));
