import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import { Link } from "react-router-dom";
import { getCount } from "@/config/utils";
import "./style.scss";

function Playlist(props) {
  const { catList, category, hotCommendList, query } = props;
  const { getCatListDispatch, getHotCommendDispatch } = props;

  const [showChooseCategory, setChooseCategory] = useState(false);
  const [catName, setcatName] = useState("全部");

  useEffect(() => {
    if (!catList.length || !category.length) {
      getCatListDispatch();
    }
    if (!hotCommendList.length) {
      let data = `offset=${(query.page - 1) * 35}&limit=35`;
      getHotCommendDispatch(data);
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
                    <Link
                      key={items.name}
                      to={`/discover/playlist/?cat=${items.name}`}
                      onClick={() => {
                        getHotCommendDispatch(
                          `offset=${(1 - 1) * 35}&limit=35&cat=${items.name}`
                        );
                        setChooseCategory(!showChooseCategory);
                        setcatName(items.name);
                      }}
                    >
                      {items.name}
                    </Link>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 1 && index === 1) {
                return (
                  <>
                    <Link
                      key={items.name}
                      to={`/discover/playlist/?cat=${items.name}`}
                      onClick={() => {
                        getHotCommendDispatch(
                          `offset=${(1 - 1) * 35}&limit=35&cat=${items.name}`
                        );
                        setChooseCategory(!showChooseCategory);
                        setcatName(items.name);
                      }}
                    >
                      {items.name}
                    </Link>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 2 && index === 2) {
                return (
                  <>
                    <Link
                      key={items.name}
                      to={`/discover/playlist/?cat=${items.name}`}
                      onClick={() => {
                        getHotCommendDispatch(
                          `offset=${(1 - 1) * 35}&limit=35&cat=${items.name}`
                        );
                        setChooseCategory(!showChooseCategory);
                        setcatName(items.name);
                      }}
                    >
                      {items.name}
                    </Link>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 3 && index === 3) {
                return (
                  <>
                    <Link
                      key={items.name}
                      to={`/discover/playlist/?cat=${items.name}`}
                      onClick={() => {
                        getHotCommendDispatch(
                          `offset=${(1 - 1) * 35}&limit=35&cat=${items.name}`
                        );
                        setChooseCategory(!showChooseCategory);
                        setcatName(items.name);
                      }}
                    >
                      {items.name}
                    </Link>
                    <span>|</span>
                  </>
                );
              }
              if (items.category === 4 && index === 4) {
                return (
                  <>
                    <Link
                      key={items.name}
                      to={`/discover/playlist/?cat=${items.name}`}
                      onClick={() => {
                        getHotCommendDispatch(
                          `offset=${(1 - 1) * 35}&limit=35&cat=${items.name}`
                        );
                        setChooseCategory(!showChooseCategory);
                        setcatName(items.name);
                      }}
                    >
                      {items.name}
                    </Link>
                    <span>|</span>
                  </>
                );
              }
            })}
          </dd>
        </dl>
      );
    })
  
  };

  //风格
  const chooseCategory = () => {
    return (
      <div className='chooseCategory'>
        <span className='icon'></span>
        <div className='all'>
          <Link
            className='selectCat'
            to={`/discover/playlist`}
            onClick={() => {
              getHotCommendDispatch(`offset=${(1 - 1) * 35}&limit=35`);
              setChooseCategory(!showChooseCategory);
            }}
          >
            全部风格
          </Link>
        </div>

        <div> {categoryList()}</div>
      </div>
    );
  };

  return (
    <div className='playlist'>
      <div className='playlistNav'>
        <h2 style={{ float: "left", fontSize: 24 }}>{catName}</h2>
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
      </div>

      <div className='hotCommendCard'>
        {hotCommendList.map((item) => {
          return (
            <div className='picture' key={item.id}>
              <Link to={`/playlist?id=${item.id}`}>
                <img src={item.coverImgUrl} alt='' />
              </Link>
              <div className='playBgi'>
                <span className='earphoneIcon'></span>
                <span className='playCount'>{getCount(item.playCount)}</span>

                <span
                  className='playIcon'
                  onClick={() => console.log(item.id)}
                ></span>
              </div>

              <div className='commendName'>
                <Link to={`/playlist?id=${item.id}`}>{item.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    catList: state.playlist.catList,
    category: state.playlist.category,
    hotCommendList: state.playlist.hotCommendList,
    query: state.playlist.query,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getCatListDispatch() {
      dispatch(actionType.getCatList());
    },
    getHotCommendDispatch(query) {
      dispatch(actionType.getHotCommend(query));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Playlist));
