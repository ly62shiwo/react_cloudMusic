import React from "react";
import { Link } from "react-router-dom";
import { getCount } from "@/config/utils";
import "./style.scss";
function index(props) {
  console.log(props);
  const { hotCommendList } = props;
  return (
    <div style={{ width: 980, margin: "0 auto" }}>
      <div className='hotCommend'>
        <div className='hotNav'>
          <Link to='discover/playlist' className='goCommend'>
            热门推荐
          </Link>
          <Link to='discover/playlist' className='goMore'>
            更多
          </Link>
        </div>
        <div className='hotCommendCard'>
          {hotCommendList.map((item) => {
            return (
              <div className='picture' key={item.id}>
                <Link className='img' to={`/playlist?id=${item.id}`}>
                  <img src={item.coverImgUrl} alt='' />
                </Link>
                <span className='playCount'>{getCount(item.playCount)}</span>
                <div className='commendName'>
                  <Link to={`/playlist?id=${item.id}`}>{item.name}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default index;
