/**
 * 歌手详情页
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getSingerSingleList,
  getSingerAlbumList,
  getSingerMvList,
  getSingerDescribe,
  getHotSingerList,
} from "../store";
import { timestamp } from "@/config/utils";
import { Pagination } from "antd";

import "./styles.scss";

function ArtistDetails(props) {
  console.log(props, "ArtistDetails");

  useEffect(() => {
    let singerId = location.search.slice(4);
    if (!hotSingerList.length) {
      getHotSingerDispatch(0, 6);
    }
    getSingerSingleDispatch(singerId);
    getSingerDescribeDispatch(singerId);
    let dataAlbum = `id=${singerId}&offset=${
      (singerAlbumQuery.page - 1) * 12
    }&limit=12`;
    getSingerAlbumDispatch(dataAlbum);

    let dataMv = `id=${singerId}&offset=${
      (singerMvQuery.page - 1) * 12
    }&limit=500`;
    getSingerMvDispatch(dataMv);

    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, []);

  const [clBgc, setclBgc] = useState("1");
  // dispatch
  const {
    getSingerSingleDispatch,
    getSingerAlbumDispatch,
    getSingerMvDispatch,
    getSingerDescribeDispatch,
    getHotSingerDispatch,
  } = props;
  // state数据
  const {
    location,
    singerSingle,
    singerAlbum,
    singerMv,
    singerDescribe,
    hotSingerList,
  } = props;
  const { artist, hotSongs } = singerSingle;
  const { singerAlbumList, singerAlbumQuery } = singerAlbum;
  const { singerMvList, singerMvQuery } = singerMv;
  const { introduction, briefDesc } = singerDescribe;
  const tabs = [
    {
      title: "热门作品",
      key: "1",
    },
    {
      title: "所有专辑",
      key: "2",
    },
    {
      title: "相关MV",
      key: "3",
    },
    {
      title: "艺人介绍",
      key: "4",
    },
  ];

  // Album分页
  const changeAlbumPagination = (page) => {
    let data = `id=${location.search.slice(4)}&offset=${
      (page - 1) * 12
    }&limit=12`;
    getSingerAlbumDispatch(data, page);

    // window.scrollTo(0, 0);
  };

  return (
    <div className='artistDetails'>
      <div className='left'>
        <div className='topArtist'>
          <h2>{artist.name}</h2>
          <h3>{artist.alias}</h3>
          <img src={artist.picUrl + '?param=640y300"'} alt='' />
          <div className='mask'></div>
        </div>
        {/* tabs */}
        <ul className='tabs'>
          {tabs.map((item) => {
            // console.log(item);
            return (
              <li
                className={item.key === clBgc ? "bgc" : ""}
                key={item.key}
                onClick={() => {
                  setclBgc(item.key);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        {/* 播放列表 */}
        <table className={clBgc === "1" ? "m-table" : "show"}>
          <tbody>
            {hotSongs.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className={(index + 1) % 2 !== 0 ? "odd" : ""}
                  style={{ height: 30 }}
                >
                  <td style={{ flex: 1 }} className='rank'>
                    <span>{index + 1}</span>
                    <span
                      className='playIcon'
                      onClick={() => console.log("播放")}
                    ></span>
                  </td>
                  <td style={{ flex: 6 }} className='songName'>
                    <p>
                      <Link to={`song?id=${item.id}`}>{item.name}</Link>
                      <span className='alia'>{item.alia}</span>
                    </p>
                  </td>
                  <td style={{ flex: 2 }}>{timestamp(item.dt, ":")}</td>
                  <td style={{ flex: 3 }}>
                    <Link to={`album?id=${item.al.id}`}>{item.al.name}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 专辑列表 */}
        <div className={clBgc === "2" ? "" : "show"}>
          <ul className='newDiscList'>
            {singerAlbumList.map((item, index) => {
              return (
                <li key={item.id} style={{ marginBottom: 10 }}>
                  <div className='imgBgc'>
                    <Link to={`/album?id=${item.id}`}>
                      <img src={item.picUrl + "?param=120y120"} alt='专辑' />
                    </Link>
                  </div>
                  <div className='newDiscName'>
                    <Link to={`/album?id=${item.id}`} className='songName'>
                      {item.name}
                    </Link>
                    <br />
                    <span>{timestamp(item.publishTime, ".")}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* 分页 */}
          <Pagination
            className='pagination'
            onChange={changeAlbumPagination}
            current={singerAlbumQuery.page}
            total={singerAlbumQuery.total}
            pageSize={"12"}
            showSizeChanger={false}
          />
        </div>
        {/* mv */}
        <div className={clBgc === "3" ? "" : "show"}>
          <ul className='relevanceMv'>
            {singerMvList.map((item) => {
              return (
                <li className='mvli' key={item.id}>
                  <div className='mvimg'>
                    <Link to={`/mv?id=${item.id}`}>
                      <img src={item.imgurl + "?param=137y103"} alt='' />
                      <div className='mark'></div>
                    </Link>
                    <Link to={`/mv?id=${item.id}`} className='icon-play'></Link>
                  </div>
                  <Link to={`/mv?id=${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          {/* 分页 */}
          {/* <Pagination
            className='pagination'
            onChange={changeMvPagination}
            current={singerMvQuery.page}
            total={singerMvQuery.total}
            pageSize={"12"}
            showSizeChanger={false}
          /> */}
        </div>

        <div className={clBgc === "4" ? "introduce" : "show"}>
          <h2 className='synopsis'>{artist.name}简介</h2>
          <p style={{ textIndent: "2em" }}>{briefDesc}</p>
          {introduction.map((item) => {
            return (
              <span key={item.ti}>
                <h2>{item.ti}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.txt.replace(/\n/g, "<br>"),
                  }}
                ></p>
              </span>
            );
          })}
        </div>
      </div>

      <div className='right'>
        <div>
          <h2>热门歌手</h2>
          <ul className='ul-sin'>
            {hotSingerList.slice(0,6).map((item, index) => {
              return (
                <li key={item.id}>
                  <div className='hot-singer'>
                    <Link to={`/artist?id=${item.id}`}>
                      <img src={`${item.img1v1Url}?param=50y50`} alt='' />
                    </Link>
                    <p>
                      <Link to={`/artist?id=${item.id}`}>{item.name}</Link>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div style={{ marginTop: 20 }}>
          <h2>网易云音乐多端下载</h2>
          <p style={{ fontSize: 10, marginTop: 10 }}>下个锤锤</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    singerSingle: state.artist.singerSingle,
    singerAlbum: state.artist.singerAlbum,
    singerMv: state.artist.singerMv,
    singerDescribe: state.artist.singerDescribe,

    hotSingerList: state.artist.hotSingerList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingerSingleDispatch(id) {
      dispatch(getSingerSingleList(id));
    },
    getSingerAlbumDispatch(query, page) {
      dispatch(getSingerAlbumList(query, page));
    },
    getSingerMvDispatch(query, page) {
      dispatch(getSingerMvList(query, page));
    },
    getSingerDescribeDispatch(id) {
      dispatch(getSingerDescribe(id));
    },
    getHotSingerDispatch(count, num) {
      dispatch(getHotSingerList(count, num));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ArtistDetails));
