/**
 * 歌手详情页
 */
import React, { useState, useEffect } from "react";

function ArtistDetails(props) {
  const { location } = props;
  // console.log(props, "ArtistDetails");
  
  const[id, setId] = useState()
  useEffect(() => {
    let id = location.search.slice(4);
    setId(id)
  },[location.search]);
  
  return <div>ArtistDetails {id} </div>;
}

export default (React.memo(ArtistDetails))
