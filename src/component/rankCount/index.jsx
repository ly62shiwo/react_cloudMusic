import React from "react";
import "./style.scss";

function RankCount(props) {
  let { rank, lastRank } = props;
  // console.log(rank, lastRank);
  return (
    <>
      {lastRank - rank === 0 ? (
        <span className='rankZero'>
          <i className='u-icn icn-'></i>0
        </span>
      ) : lastRank - rank > 0 ? (
        <span className='rankAdd'>
          <i className='u-icn icnadd'></i> {lastRank - rank}
        </span>
      ) : lastRank - rank < 0 && lastRank !== -1 ? (
        <span className='rankCut'>
          <i className='u-icn icncut'></i> {Math.abs(lastRank - rank)}
        </span>
      ) : lastRank === -1 ? (
        <span className='rankCut'>
          <i className='u-icn icnnew'></i>
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(RankCount);
