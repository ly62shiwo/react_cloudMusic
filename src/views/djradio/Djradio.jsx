import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import * as actionType from "./store/actionCreators";
import "./djradio.scss";

function Djradio(props) {
  console.log(props);
  const {route , location} = props

  const { djCategory, djRecommendList } = props;
  const { getDjCategoryDispatch, getDjRecommendDispatch } = props;

  const [select, setSelect] = useState();
  useEffect(() => {
    //   if (!djCategory) {
    getDjCategoryDispatch();
    getDjRecommendDispatch();
    //   }
    //eslint-disable-next-line
  }, []);
  return (
    <div className='djradio'>
      <ul className='banner'>
        {djCategory.map((item) => {
          return (
            <li>
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
                <li className={(index + 1) % 2 === 0 ? "odd itm" : "itm"}>
                  <img src={item.coverUrl + `?param=40x40"`} alt='' />
                  {/* --- */}
                  <div className='name'>
                    <h3>
                      <Link to={`/program?id=${item.id}`}>
                        {item.mainSong.name}
                      </Link>
                    </h3>
                    <p>
                      <Link to={`djradio?id=${item.radio.id}`}>{item.radio.name}</Link>
                    </p>
                  </div>
                  {/* --- */}
                  <Link to={`djradio/category?id=${item.radio.categoryId}`} className='tag'>{item.radio.category}</Link>
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
        </div>
      </div>
    
      
      {renderRoutes(route.routes)}
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    djCategory: state.djradio.djCategoryList,
    djRecommendList: state.djradio.djRecommendList,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Djradio));
