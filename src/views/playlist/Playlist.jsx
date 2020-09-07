import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import { Link } from "react-router-dom";
import "./style.scss";

function Playlist(props) {
  const { catList, category } = props;
  const { getCatListDispatch } = props;
  console.log(category);

  const [showChooseCategory, setChooseCategory] = useState(false);

  useEffect(() => {
    if (!catList.length || !category.length) {
      getCatListDispatch();
    }
    //eslint-disable-next-line
  }, []);

  // 歌单种类
  const categoryList = () => {
    let arr = [];
    for (let i in category) {
      arr.push(category[i]);
    }
    // category 判断详细分类
    return arr.map((item, index) => {
      return (
        <dl key={index}>
          <dt>{item}</dt>
          <dd>
            {catList.map((items) => {
              if (items.category === 0 && index === 0) {
                return (
                  <>
                    <a href=''>{items.name}</a>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 1 && index === 1) {
                return (
                  <>
                    <a href=''>{items.name}</a>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 2 && index === 2) {
                return (
                  <>
                    <a href=''>{items.name}</a>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 3 && index === 3) {
                return (
                  <>
                    <a href=''>{items.name}</a>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 4 && index === 4) {
                return (
                  <>
                    <a href=''>{items.name}</a>
                    <span>|</span>
                  </>
                );
              }
            })}
          </dd>
        </dl>
      );
    });
  };

  //风格
  const chooseCategory = () => {
    return (
      <div className='chooseCategory'>
        <span className='icon'></span>
        <div className='all'>
          <a href='javascript:;' className='selectCat'>
            全部风格
          </a>
        </div>

        <div>{categoryList()}</div>
      </div>
    );
  };

  return (
    <div className='playlist'>
      <div className='playlistNav'>
        <h2 style={{ float: "left", fontSize: 24 }}>全部</h2>
        <a
          className='selectCat'
          href='javascript:;'
          onClick={() => {
            setChooseCategory(!showChooseCategory);
          }}
        >
          选择分类
        </a>
        {/* 风格 */}
        <div>{showChooseCategory === true ? chooseCategory() : null}</div>
        <span className='catHot'>
          <a href='javascript:;'>热门</a>
        </span>
      </div>
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    catList: state.playlist.catList,
    category: state.playlist.category,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getCatListDispatch() {
      dispatch(actionType.getCatList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Playlist));
