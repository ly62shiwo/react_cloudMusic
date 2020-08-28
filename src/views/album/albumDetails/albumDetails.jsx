import React, { useEffect } from "react";

function AlbumDetails(props) {
  console.log(props);
  useEffect(() => {
    let id = props.location.search.slice(3);
    console.log(id);
  });

  return <div>11111</div>;
}

export default AlbumDetails;
