/**
 * 歌单详情页
 */
import React, { useState, useEffect } from "react";

function AlbumDetails(props) {
  // console.log(props);
  const {location} = props
  const [id, setId] = useState(null);

  useEffect(() => {
    let id = location.search.slice(4);
    setId(id);
  },[location.search]);
  
  return <div>albumDetails {id}</div>;
}

export default React.memo(AlbumDetails);
