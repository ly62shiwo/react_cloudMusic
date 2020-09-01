/**
 * 
 * 用户歌单
 */
import React, { useState, useEffect } from "react";


function UserHome(props) {
  const { location } = props;
  const [id, setId] = useState(null);

  useEffect(() => {
    let id = location.search.slice(4);
    setId(id);
  }, [location.search]);


return <div>UserHome {id}</div>;
}
export default React.memo(UserHome);
