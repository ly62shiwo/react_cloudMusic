import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function index(props) {
  const { newDiscShelfList } = props;
  console.log(newDiscShelfList);

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
          <Link to='discover/album' className='goCommend'>
            新碟上架
          </Link>
          <Link to='discover/album' className='goMore'>
            更多
          </Link>
        </div>

        <div className='inner'>
            
        </div>


      </div>
    </div>
  );
}

export default index;
