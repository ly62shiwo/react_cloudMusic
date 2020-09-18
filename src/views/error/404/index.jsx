import React from "react";

const style = {
  width: 982,
  margin: "0 auto",
  minHeight: "50vh",
  boxSizing: "borderBox",
};

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
function Error404() {
  return (
    <div style={style}>
      <div style={styles}>
        <p>很抱歉，你要查找的网页找不到</p>
      </div>
    </div>
  );
}

export default Error404;
