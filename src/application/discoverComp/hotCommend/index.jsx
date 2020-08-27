import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function index(props) {
//   console.log(props);
  const { hotCommendList } = props;
  return (
    <div className='wrap'>
      <div
        style={{
          width: 730,
          background: "#fff",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <div className='hotNav'>
          <Link to='discover/playlist' className='goCommend'>
            热门推荐
          </Link>
          <Link to='discover/playlist' className='goMore'>更多</Link>
        </div>

        <div className='hotCommendCard'>
          {hotCommendList.map((item) => {
            return (
              <div className='picture' key={item.userId}>
                <Link className='img' to={`/playlist?${item.id}`}>
                  <img src={item.coverImgUrl} alt='' />
                </Link>

                <div>
                  <Link to={`/playlist?${item.id}`}>{item.name}</Link>
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
