import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllNewDiscList, getNewDiscShelfList } from "./store/index";
import { Pagination } from "antd";

import "./style.scss";

function Album(props) {
  console.log(props);
  const { query, allNewDiscList, newDiscShelfList } = props;
  const { getAllNewDiscDispatch, getNewDiscShelfDispatch } = props;

  const [quRegion, setQuRegion] = useState("ALL");
  useEffect(() => {
    // 热门新碟
    getNewDiscShelfDispatch("limit=10&type=hot");
    // 全部新碟
    let data = `offset=${(query.page - 1) * 35}&limit=35&area=all`;
    getAllNewDiscDispatch(data);
    //eslint-disable-next-line
  }, []);

  const region = [
    { name: "全部", key: "ALL" },
    { name: "华语", key: "ZH" },
    { name: "欧美", key: "EA" },
    { name: "韩国", key: "KR" },
    { name: "日本", key: "JP" },
  ];
  // 获取地区数据
  const changeAllNewDisc = (region) => {
    let data = `offset=${(1 - 1) * 35}&limit=35&area=${region}`;
    getAllNewDiscDispatch(data);
  };

  // 分页
  const changePagination = (page) => {
    let data = `offset=${(page - 1) * 35}&limit=35&area=${quRegion}`;
    getAllNewDiscDispatch(data, page);
    // window.scrollTo(0, 0);
  };

  return (
    <div className='album m_wrap'>
      {/* 热门新碟 */}
      <div className='hotNewDisc'>
        <div className='hotNav'>
          <span className='goCommend'>热门新碟</span>
        </div>
        <div className='newDiscList'>
          {newDiscShelfList.map((item, index) => {
            return (
              <div key={index} style={{ marginTop: 20 }}>
                <div className='imgBgc'>
                  <Link to={`/album?id=${item.id}`}>
                    <img src={item.picUrl + "?param=130y130"} alt='新碟上架' />
                  </Link>
                </div>
                <div className='newDiscName'>
                  <Link to={`/album?id=${item.id}`} className='songName'>
                    {item.name}
                  </Link>
                  <br />
                  <Link to={`/artist?id=${item.artist.id}`} className='name'>
                    {item.artist.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 全部新碟 */}
      <div className='allNewDisc'>
        <div className='hotNav'>
          <span className='goCommend'>全部新碟</span>
          {region.map((item, index) => {
            return (
              <div key={item.key}>
                <span
                  className='iteName'
                  onClick={() => {
                    changeAllNewDisc(item.key);
                    setQuRegion(item.key);
                  }}
                >
                  {item.name}
                </span>
                {index === 4 ? "" : <span className='line'> | </span>}
              </div>
            );
          })}
        </div>
        <div className='newDiscList'>
          {allNewDiscList.map((item, index) => {
            return (
              <div key={index} style={{ marginTop: 20 }}>
                <div className='imgBgc'>
                  <Link to={`/album?id=${item.id}`}>
                    <img src={item.picUrl + "?param=130y130"} alt='新碟上架' />
                  </Link>
                </div>
                <div className='newDiscName'>
                  <Link to={`/album?id=${item.id}`} className='songName'>
                    {item.name}
                  </Link>
                  <br />
                  <Link to={`/artist?id=${item.artist.id}`} className='name'>
                    {item.artist.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* 分页 */}
        <Pagination
          className='pagination'
          onChange={changePagination}
          current={query.page}
          total={query.total}
          pageSize={"35"}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    query: state.album.query,
    newDiscShelfList: state.album.newDiscShelfList,
    allNewDiscList: state.album.allNewDiscList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllNewDiscDispatch(query, page) {
      dispatch(getAllNewDiscList(query, page));
    },
    getNewDiscShelfDispatch(query) {
      dispatch(getNewDiscShelfList(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album));
