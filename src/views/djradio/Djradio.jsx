import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import "./djradio.scss";

function Djradio(props) {
  console.log(props);
  const { djCategory } = props;
  const { getDjCategoryDispatch } = props;

  const [select, setSelect] = useState();
  useEffect(() => {
    //   if (!djCategory) {
    getDjCategoryDispatch();
    //   }
    //eslint-disable-next-line
  }, []);
  return (
    <div className='djradio'>
      <ul>
        {djCategory.map((item) => {
          return (
            <li>
              <a
                href='javascript:;'
                className={select === item.name ? "z-sel specific" : 'specific'}
                onClick={() => {setSelect(item.name); console.log(item.name) }}
              >
                <span
                  className='icon'
                  style={{ backgroundImage: `url(${item.picWebUrl})` }}
                ></span>
                <em>{item.name}</em>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    djCategory: state.djradio.djCategoryList,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getDjCategoryDispatch() {
      dispatch(actionType.getDjCategoryList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Djradio));
