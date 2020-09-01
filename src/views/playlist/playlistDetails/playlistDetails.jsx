import React, { useState, useEffect } from "react";

function PlaylistDetails(props) {
  const { location } = props;
  // console.log(props, "ArtistDetails");

  const [id, setId] = useState();
  useEffect(() => {
    let id = location.search.slice(4);
    setId(id);
  }, [location.search]);

return <div>playlisyDetails {id}</div>;
}

export default React.memo(PlaylistDetails);
